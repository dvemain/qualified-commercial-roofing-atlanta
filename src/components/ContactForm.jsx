import { useState } from "react";

/**
 * Netlify Forms contact form. Submissions land in the Netlify dashboard and are
 * emailed to the address configured there (Forms → Notifications). A static copy
 * of this form lives in index.html so Netlify's build bot can register it.
 */
const encode = (data) =>
  Object.keys(data).map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k])).join("&");

export default function ContactForm({ formName = "contact", dark = false, idPrefix = "cf" }) {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [values, setValues] = useState({ name: "", email: "", phone: "", address: "", message: "" });

  const onChange = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": formName, ...values }),
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
