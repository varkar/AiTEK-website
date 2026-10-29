import { NextResponse } from 'next/server';
import { getZohoAccessToken } from '@/lib/zoho';

export async function POST(request: Request) {
  try {
    const { to, subject, content } = await request.json();

    if (!to || !subject || !content) {
      return NextResponse.json(
        { error: 'Missing required fields: to, subject, and content are required.' },
        { status: 400 }
      );
    }

    const accessToken = await getZohoAccessToken();
    const accountId = process.env.ZOHO_ACCOUNT_ID;

    if (!accountId) {
      console.error('ZOHO_ACCOUNT_ID is not configured.');
      return NextResponse.json(
        { error: 'Server configuration error.' },
        { status: 500 }
      );
    }

    const zohoResponse = await fetch(`https://mail.zoho.in/api/accounts/${accountId}/messages`, {
      method: 'POST',
      headers: {
        'Authorization': `Zoho-oauthtoken ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fromAddress: 'info@smartaitek.ai',
        toAddress: to,
        subject: subject,
        content: content,
        mailFormat: 'html',
      }),
    });

    const data = await zohoResponse.json();

    if (!zohoResponse.ok) {
      console.error('Zoho API error (Send):', data);
      return NextResponse.json(
        { error: 'Failed to send email via Zoho.', details: data },
        { status: zohoResponse.status }
      );
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error('Error in send email route:', error);
    return NextResponse.json(
      { error: 'Internal server error while sending email.' },
      { status: 500 }
    );
  }
}
