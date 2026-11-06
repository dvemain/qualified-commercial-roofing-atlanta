import { useState } from "react";

/**
 * Contact form. Each submission goes two places:
 *  1. FormSubmit (formsubmit.co) → emails the inquiry to TO_EMAIL. No account needed;
 *     the very first submission triggers a one-time "activate" email to that inbox.
 *  2. Netlify Forms → a stored copy in the Netlify dashboard (Forms tab), for records/spam filtering.
 *     A static copy of this form lives in index.html so Netlify's build bot can register it.
 */
const TO_EMAIL = "qualifiedinquiry@gmail.com";
const encode = (data) =>
  Object.keys(data).map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k])).join("&");

export default function ContactForm({ formName = "contact", dark = false, idPrefix = "cf", siteLabel = "website" }) {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [values, setValues] = useState({ name: "", email: "", phone: "", address: "", message: "" });

  const onChange = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      // Stored copy in Netlify (best effort — never blocks the email)
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": formName, ...values }),
      }).catch(() => {});

      const res = await fetch(`https://formsubmit.co/ajax/${TO_EMAIL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...values,
          _subject: `New inquiry — ${siteLabel}`,
          _template: "table",
          _captcha: "false",
          _replyto: values.email,
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
      setValues({ name: "", email: "", phone: "", address: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className={"cf cf-done" + (dark ? " cf-dark" : "")} role="status">
        <strong>Thanks, we got it.</strong>
        <p>We'll be in touch shortly. For anything urgent, call us.</p>
      </div>
    );
  }

  return (
    <form
      className={"cf" + (dark ? " cf-dark" : "")}
      name={formName}
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={onSubmit}
    >
      <input type="hidden" name="form-name" value={formName} />
      <p className="cf-hp" aria-hidden="true"><label>Don't fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" /></label></p>

      <div className="cf-row">
        <label htmlFor={`${idPrefix}-name`}>Name<input id={`${idPrefix}-name`} name="name" required value={values.name} onChange={onChange} autoComplete="name" /></label>
        <label htmlFor={`${idPrefix}-phone`}>Phone<input id={`${idPrefix}-phone`} name="phone" type="tel" value={values.phone} onChange={onChange} autoComplete="tel" /></label>
      </div>
      <div className="cf-row">
        <label htmlFor={`${idPrefix}-email`}>Email<input id={`${idPrefix}-email`} name="email" type="email" required value={values.email} onChange={onChange} autoComplete="email" /></label>
        <label htmlFor={`${idPrefix}-address`}>Property address<input id={`${idPrefix}-address`} name="address" value={values.address} onChange={onChange} autoComplete="street-address" /></label>
      </div>
      <label htmlFor={`${idPrefix}-message`}>How can we help?<textarea id={`${idPrefix}-message`} name="message" rows={5} required value={values.message} onChange={onChange} /></label>

      {status === "error" && <p className="cf-err" role="alert">Something went wrong sending that. Please try again or call us.</p>}
      <button type="submit" className="cf-btn" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
