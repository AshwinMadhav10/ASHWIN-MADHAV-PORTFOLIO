import emailjs from "@emailjs/browser";
import { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import { contact } from "../data/portfolio.js";
import SectionHeading from "./SectionHeading.jsx";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: "idle", message: "" });

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const validate = () => {
    if (!form.name.trim() || !form.email.trim() || !form.subject.trim() || !form.message.trim()) {
      return "Please complete all fields before sending.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      return "Please enter a valid email address.";
    }
    if (form.message.trim().length < 12) {
      return "Please add a little more detail to your message.";
    }
    return "";
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const error = validate();
    if (error) {
      setStatus({ type: "error", message: error });
      return;
    }

    setStatus({ type: "loading", message: "Sending message..." });

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      if (serviceId && templateId && publicKey) {
        await emailjs.send(serviceId, templateId, form, { publicKey });
      } else {
        const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name}\nEmail: ${form.email}`);
        window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(form.subject)}&body=${body}`;
      }
      setStatus({ type: "success", message: "Message ready. Thank you for reaching out." });
      setForm(initialForm);
    } catch (sendError) {
      setStatus({
        type: "error",
        message: "The message could not be sent right now. Please email Ashwin directly.",
      });
    }
  };

  return (
    <section id="contact" className="section-shell pb-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Contact" title="Let's Build Something Intelligent" align="center">
          I am open to AI/ML, Python development, backend development, internship, and entry-level software
          opportunities. Contact me to discuss projects, collaborations, or career opportunities.
        </SectionHeading>

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="surface rounded-3xl p-6 sm:p-8">
            <h3 className="text-2xl font-black tracking-tight text-ink">Contact Details</h3>
            <div className="mt-6 space-y-4">
              <a className="contact-row" href={`mailto:${contact.email}`}>
                <FaEnvelope aria-hidden="true" />
                <span>{contact.email}</span>
              </a>
              <div className="contact-row">
                <FaMapMarkerAlt aria-hidden="true" />
                <span>{contact.location}</span>
              </div>
              <a className="contact-row" href={`https://${contact.linkedin}`} target="_blank" rel="noreferrer">
                <FaLinkedin aria-hidden="true" />
                <span>{contact.linkedin}</span>
              </a>
              <a className="contact-row" href={`https://${contact.github}`} target="_blank" rel="noreferrer">
                <FaGithub aria-hidden="true" />
                <span>{contact.github}</span>
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="surface rounded-3xl p-6 sm:p-8" noValidate>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="field-label">
                Name
                <input name="name" value={form.name} onChange={updateField} autoComplete="name" className="field-input" />
              </label>
              <label className="field-label">
                Email
                <input name="email" type="email" value={form.email} onChange={updateField} autoComplete="email" className="field-input" />
              </label>
            </div>
            <label className="field-label mt-5">
              Subject
              <input name="subject" value={form.subject} onChange={updateField} className="field-input" />
            </label>
            <label className="field-label mt-5">
              Message
              <textarea name="message" value={form.message} onChange={updateField} rows="6" className="field-input resize-none" />
            </label>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={status.type === "loading"}
                className="btn-primary disabled:cursor-not-allowed disabled:opacity-70"
              >
                <FaPaperPlane aria-hidden="true" />
                {status.type === "loading" ? "Sending..." : "Send Message"}
              </button>
              {status.message && (
                <p
                  className={`text-sm font-semibold ${
                    status.type === "error" ? "text-red-700" : status.type === "success" ? "text-green" : "text-muted"
                  }`}
                  role="status"
                >
                  {status.message}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
