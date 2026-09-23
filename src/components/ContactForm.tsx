"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Button from "./ui/Button";
import FormField from "./ui/FormField";
import OptionGrid from "./ui/OptionGrid";
import Reveal from "./ui/Reveal";
import { industries } from "@/content/industries";

type Values = {
  industry: string;
  maturity: string;
  priority: string;
  name: string;
  company: string;
  email: string;
  message: string;
};

type FieldKey = keyof Values;

const steps: { title: string; fields: FieldKey[] }[] = [
  { title: "Tell Us About Your Business", fields: ["industry", "maturity", "priority"] },
  { title: "About You", fields: ["name", "company"] },
  { title: "Contact Info", fields: ["email"] },
  { title: "Your Message", fields: [] },
];

const industryOptions = [...industries.map((i) => ({ id: i.slug, label: i.name })), { id: "other", label: "Other" }];

const maturityOptions = [
  { id: "predictive", label: "Just exploring predictive analytics and forecasting" },
  { id: "genai", label: "Piloting GenAI copilots or knowledge assistants" },
  { id: "agentic", label: "Ready to deploy autonomous, agentic operations" },
];

const priorityOptions = [
  { id: "cost", label: "Cost & operational efficiency" },
  { id: "risk", label: "Risk & compliance" },
  { id: "revenue", label: "Revenue & customer experience" },
  { id: "resilience", label: "Operational resilience" },
];

const MESSAGE_MAX = 500;

function validateField(key: FieldKey, values: Values): string | undefined {
  switch (key) {
    case "industry":
      return values.industry ? undefined : "Please select an industry.";
    case "maturity":
      return values.maturity ? undefined : "Please select where you are in your AI journey.";
    case "priority":
      return values.priority ? undefined : "Please select your top priority.";
    case "name":
      return values.name.trim() ? undefined : "Please enter your name.";
    case "company":
      return values.company.trim() ? undefined : "Please enter your company.";
    case "email":
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email) ? undefined : "Enter a valid work email.";
    case "message":
      return undefined;
  }
}

function summarizeInterest(values: Values): string | null {
  const industry = industries.find((i) => i.slug === values.industry);
  const priority = priorityOptions.find((p) => p.id === values.priority);
  if (!industry || !priority) return null;
  return `We'll follow up with next steps for ${industry.name} organizations focused on ${priority.label.toLowerCase()}.`;
}

const inputClasses =
  "w-full rounded-xl border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none transition-colors";

function fieldBorder(hasError: boolean) {
  return hasError ? "border-red-500 focus:border-red-500" : "border-border focus:border-primary";
}

export default function ContactForm() {
  const searchParams = useSearchParams();
  const presetIndustry = searchParams.get("industry") ?? "";

  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [values, setValues] = useState<Values>({
    industry: presetIndustry,
    maturity: "",
    priority: "",
    name: "",
    company: "",
    email: "",
    message: "",
  });
  const [touched, setTouched] = useState<Partial<Record<FieldKey, boolean>>>({});

  function setValue(key: FieldKey, value: string) {
    setValues((v) => ({ ...v, [key]: value }));
  }

  function markTouched(key: FieldKey) {
    setTouched((t) => ({ ...t, [key]: true }));
  }

  // Button-grid selections (industry/maturity/priority) commit immediately on click,
  // so they're validated right away rather than waiting for a blur event.
  function selectOption(key: FieldKey, value: string) {
    setValue(key, value);
    markTouched(key);
  }

  function errorFor(key: FieldKey) {
    if (!touched[key]) return undefined;
    return validateField(key, values);
  }

  const currentFields = steps[step].fields;
  const stepValid = currentFields.every((key) => !validateField(key, values));
  const isLastStep = step === steps.length - 1;

  async function handleSubmit() {
    setIsSubmitting(true);
    setSubmitError(null);

    const emailContent = `
<div style="font-family: Arial, sans-serif; max-width: 600px; color: #333;">
  <h2 style="color: #0056b3; border-bottom: 2px solid #eee; padding-bottom: 10px;">New Website Lead</h2>
  <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
    <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; width: 100px;"><strong>Name:</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #eee;">${values.name}</td></tr>
    <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Company:</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #eee;">${values.company}</td></tr>
    <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Email:</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #eee;">${values.email}</td></tr>
    <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Industry:</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #eee;">${values.industry}</td></tr>
    <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Maturity:</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #eee;">${values.maturity}</td></tr>
    <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Priority:</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #eee;">${values.priority}</td></tr>
  </table>
  <h3 style="margin-bottom: 10px; color: #444;">Message:</h3>
  <div style="background-color: #f9f9f9; padding: 15px; border-radius: 6px; border: 1px solid #eee; white-space: pre-wrap;">${values.message || 'No message provided.'}</div>
</div>
    `.trim();

    try {
      const res = await fetch('/api/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          to: 'info@aitek.in',
          subject: `New Website Lead from ${values.name}`,
          content: emailContent
        })
      });

      if (!res.ok) {
        throw new Error('Failed to send email');
      }

      const autoReplyContent = `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333; line-height: 1.6;">
  <div style="text-align: center; padding-bottom: 20px; border-bottom: 2px solid #f0f0f0; margin-bottom: 20px;">
    <!-- NOTE TO DEV: The src URL below will be replaced with the actual hosted URL of the AiTEK logo -->
    <img src="https://aitek.in/images/aitek-logo-new.png" alt="AiTEK Logo" style="max-width: 180px;" />
  </div>
  <p>Dear ${values.name},</p>
  <p>Thank you for reaching out to <strong>AiTEK</strong>. We truly appreciate you taking the time to connect with us.</p>
  <p>We have successfully received your message, and one of our representatives will be in touch with you in the coming days to discuss your inquiry further.</p>
  <br>
  <p>Best regards,</p>
  <p><strong>The AiTEK Team</strong><br>
  <a href="mailto:info@aitek.in" style="color: #0056b3; text-decoration: none;">info@aitek.in</a></p>
</div>
`.trim();

      const replyRes = await fetch('/api/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          to: values.email,
          subject: 'Thank you for reaching out to AiTEK',
          content: autoReplyContent
        })
      });

      if (!replyRes.ok) {
        console.error('Failed to send auto-reply email');
      }

      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setSubmitError('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleAdvance() {
    if (!stepValid) {
      currentFields.forEach(markTouched);
      return;
    }
    if (isLastStep) {
      await handleSubmit();
      return;
    }
    setStep((s) => s + 1);
  }

  function goBack() {
    setStep((s) => Math.max(0, s - 1));
  }

  function reset() {
    setValues({ industry: "", maturity: "", priority: "", name: "", company: "", email: "", message: "" });
    setTouched({});
    setStep(0);
    setSubmitted(false);
    setSubmitError(null);
  }

  if (submitted) {
    const summary = summarizeInterest(values);
    return (
      <Reveal className="rounded-2xl border border-primary/30 bg-surface-raised p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 text-primary">
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
            <path
              d="M5 12.5l4.5 4.5L19 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className="mt-4 text-lg font-semibold text-foreground">Thank you for reaching out.</h3>
        <p className="mt-2 text-sm text-muted">
          {summary ?? "A member of the AITEK team will get back to you shortly."}
        </p>
        <button type="button" onClick={reset} className="mt-6 text-sm font-medium text-primary hover:underline">
          Send another message
        </button>
      </Reveal>
    );
  }

  return (
    <div className="rounded-2xl border border-border bg-surface p-8">
      <div className="mb-6">
        <div className="flex items-center justify-between text-xs font-medium text-muted">
          <span>
            Step {step + 1} of {steps.length}
          </span>
          <span>{steps[step].title}</span>
        </div>
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-surface-raised">
          <div
            className="h-full rounded-full bg-primary transition-all duration-300"
            style={{ width: `${((step + 1) / steps.length) * 100}%` }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={false}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -16 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="space-y-6"
        >
          {step === 0 && (
            <>
              <fieldset>
                <legend className="mb-1.5 text-sm font-medium text-foreground/90">
                  Which industry best describes your organization?
                </legend>
                <OptionGrid
                  options={industryOptions}
                  value={values.industry}
                  onChange={(v) => selectOption("industry", v)}
                />
                {errorFor("industry") && <p className="mt-1.5 text-xs text-red-500">{errorFor("industry")}</p>}
              </fieldset>
              <fieldset>
                <legend className="mb-1.5 text-sm font-medium text-foreground/90">
                  Where are you in your AI journey?
                </legend>
                <OptionGrid
                  options={maturityOptions}
                  value={values.maturity}
                  onChange={(v) => selectOption("maturity", v)}
                  columns={1}
                />
                {errorFor("maturity") && <p className="mt-1.5 text-xs text-red-500">{errorFor("maturity")}</p>}
              </fieldset>
              <fieldset>
                <legend className="mb-1.5 text-sm font-medium text-foreground/90">
                  What matters most in the next 12 months?
                </legend>
                <OptionGrid
                  options={priorityOptions}
                  value={values.priority}
                  onChange={(v) => selectOption("priority", v)}
                />
                {errorFor("priority") && <p className="mt-1.5 text-xs text-red-500">{errorFor("priority")}</p>}
              </fieldset>
            </>
          )}

          {step === 1 && (
            <div className="grid gap-5 sm:grid-cols-2">
              <FormField label="Full Name" htmlFor="name" error={errorFor("name")}>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoFocus
                  value={values.name}
                  onChange={(e) => setValue("name", e.target.value)}
                  onBlur={() => markTouched("name")}
                  className={`${inputClasses} ${fieldBorder(!!errorFor("name"))}`}
                  placeholder="Jane Doe"
                />
              </FormField>
              <FormField label="Company" htmlFor="company" error={errorFor("company")}>
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={values.company}
                  onChange={(e) => setValue("company", e.target.value)}
                  onBlur={() => markTouched("company")}
                  className={`${inputClasses} ${fieldBorder(!!errorFor("company"))}`}
                  placeholder="Acme Corp"
                />
              </FormField>
            </div>
          )}

          {step === 2 && (
            <FormField label="Work Email" htmlFor="email" error={errorFor("email")}>
              <input
                id="email"
                name="email"
                type="email"
                autoFocus
                value={values.email}
                onChange={(e) => setValue("email", e.target.value)}
                onBlur={() => markTouched("email")}
                className={`${inputClasses} ${fieldBorder(!!errorFor("email"))}`}
                placeholder="jane@acme.com"
              />
            </FormField>
          )}

          {step === 3 && (
            <FormField label="Anything else you'd like us to know? (optional)" htmlFor="message">
              <textarea
                id="message"
                name="message"
                rows={6}
                autoFocus
                maxLength={MESSAGE_MAX}
                value={values.message}
                onChange={(e) => setValue("message", e.target.value)}
                className={`${inputClasses} border-border focus:border-primary`}
                placeholder="Tell us about your transformation goals..."
              />
              <p className="mt-1.5 text-right text-xs text-muted">
                {values.message.length} / {MESSAGE_MAX}
              </p>
            </FormField>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="mt-8 flex flex-col gap-4">
        {submitError && (
          <p className="text-center text-sm font-medium text-red-500">
            {submitError}
          </p>
        )}
        <div className="flex items-center justify-between">
          <Button onClick={goBack} variant="secondary" className={step === 0 ? "invisible" : ""}>
            Back
          </Button>
          <Button
            onClick={handleAdvance}
            className={(stepValid && !isSubmitting) ? "" : "pointer-events-none opacity-40"}
          >
            {isLastStep ? (isSubmitting ? "Sending..." : "Send Message") : "Next"}
          </Button>
        </div>
      </div>
    </div>
  );
}
