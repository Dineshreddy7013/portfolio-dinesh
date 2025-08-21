import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const navigate = useNavigate();
  const formRef = useRef(null);
  const [state, setState] = useState({ sending: false, sent: false, error: "" });

  // ---- EmailJS (frontend-only). Leave as-is to use mailto fallback.
  const SERVICE_ID = "REPLACE_WITH_EMAILJS_SERVICE_ID";
  const TEMPLATE_ID = "REPLACE_WITH_EMAILJS_TEMPLATE_ID";
  const PUBLIC_KEY  = "REPLACE_WITH_EMAILJS_PUBLIC_KEY";

  // ---- Mailto fallback (no backend)
  const MAILTO_TO = "reedydinesh@gmail.com"; // 

  const sendEmail = async (e) => {
    e.preventDefault();
    const formEl = formRef.current;
    if (!formEl) return;

    // Honeypot
    if (formEl.elements["website"]?.value) return;

    const fd = new FormData(formEl);
    const from_name = fd.get("from_name") || "";
    const reply_to  = fd.get("reply_to") || "";
    const subject   = fd.get("subject")   || "New message";
    const message   = fd.get("message")   || "";

    const emailJsConfigured = [SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY].every(
      (v) => v && !String(v).startsWith("REPLACE_WITH_")
    );

    try {
      setState({ sending: true, sent: false, error: "" });

      if (emailJsConfigured) {
        await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formEl, PUBLIC_KEY);
        setState({ sending: false, sent: true, error: "" });
        formEl.reset();
      } else {
        const body = `From: ${from_name} <${reply_to}>\n\n${message}`;
        const mailto = `mailto:${encodeURIComponent(MAILTO_TO)}?subject=${encodeURIComponent(
          subject
        )}&body=${encodeURIComponent(body)}`;
        window.location.href = mailto;
        setState({ sending: false, sent: true, error: "" });
      }
    } catch (err) {
      console.error(err);
      setState({ sending: false, sent: false, error: "Could not send. Please try again." });
    }
  };

  const isEmailJsConfigured = [SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY].every(
    (v) => v && !String(v).startsWith("REPLACE_WITH_")
  );

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-[#0b0f17] to-slate-900 text-white px-6 py-12">
      <div className="max-w-xl mx-auto">
        {/* Back arrow */}
        <button
          type="button"
          onClick={() => navigate(-1)}
          aria-label="Go back"
          className="mb-6 inline-grid place-items-center w-9 h-9 rounded-md bg-red-600 text-white hover:opacity-90 transition"
          title="Go back"
        >
          ←
        </button>

        <h2 className="text-4xl font-bold mb-3 text-center">Get In Touch</h2>
        <p className="text-center text-white/70 mb-8">I’ll reply within 24–48 hours.</p>

        {state.sent && (
          <p className="text-emerald-400 text-center mb-4">Message sent successfully!</p>
        )}
        {state.error && (
          <p className="text-red-400 text-center mb-4">{state.error}</p>
        )}

        <form ref={formRef} onSubmit={sendEmail} className="grid gap-4 text-left">
          {/* These names should match your EmailJS template variables */}
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            className="bg-white/5 border border-white/10 px-4 py-3 rounded-lg w-full text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/60"
          />
          <input
            type="email"
            name="reply_to"
            placeholder="Your Email"
            required
            className="bg-white/5 border border-white/10 px-4 py-3 rounded-lg w-full text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/60"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="bg-white/5 border border-white/10 px-4 py-3 rounded-lg w-full text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/60"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="How can I help?"
            required
            className="bg-white/5 border border-white/10 px-4 py-3 rounded-lg w-full text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/60"
          />

          {/* Honeypot (hidden) */}
          <input type="text" name="website" tabIndex="-1" autoComplete="off" className="hidden" />

          <button
            type="submit"
            disabled={state.sending}
            className="mt-2 bg-blue-600 hover:bg-blue-500 disabled:opacity-60 disabled:cursor-not-allowed transition px-6 py-3 rounded-lg font-semibold"
          >
            {state.sending ? "Sending..." : "Send Message"}
          </button>

          {!isEmailJsConfigured && (
            <p className="text-[12px] text-white/60 mt-2">
              No email service configured — your mail app will open with a prefilled message.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
