import type { Metadata } from "next";
import { Urbanist, Inter, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const urbanist = Urbanist({
  variable: "--font-heading",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://www.smartaitek.ai";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Smart AITEK — Architecting the Autonomous Enterprise",
    template: "%s | Smart AITEK",
  },
  description:
    "Smart AITEK is a consulting-led, engineering-backed partner helping organizations transition from manual operations to self-optimizing, intelligent ecosystems powered by Agentic AI.",
  openGraph: {
    type: "website",
    siteName: "Smart AITEK",
    url: siteUrl,
    title: "Smart AITEK — Architecting the Autonomous Enterprise",
    description:
      "Consulting-led, engineering-backed partner for Digital Business Engineering, Enterprise Architecture, and Agentic AI transformation.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart AITEK — Architecting the Autonomous Enterprise",
    description:
      "Consulting-led, engineering-backed partner for Digital Business Engineering, Enterprise Architecture, and Agentic AI transformation.",
  },
};

const themeInitScript = `(function(){try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}if(t==='dark'){document.documentElement.setAttribute('data-theme','dark');}}catch(e){}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${urbanist.variable} ${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
