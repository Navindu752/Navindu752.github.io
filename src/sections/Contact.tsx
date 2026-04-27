import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import SectionWrapper from "../components/SectionWrapper";
import SectionHeading from "../components/SectionHeading";
import { FiMail, FiGithub, FiLinkedin, FiSend, FiMapPin, FiPhone } from "react-icons/fi";
import { EASE_OUT } from "../utils/animations";

// ── EmailJS config ────────────────────────────────────────────────────────────
// Replace these with your real EmailJS credentials:
//   https://www.emailjs.com/ → Account → API Keys + Email Services + Email Templates
const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  || "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  || "YOUR_PUBLIC_KEY";
// ─────────────────────────────────────────────────────────────────────────────

const contactItems = [
  {
    icon: FiMail,
    label: "Email",
    value: "navindudilshan60@gmail.com",
    href: "mailto:navindudilshan60@gmail.com",
  },
  {
    icon: FiPhone,
    label: "Phone",
    value: "+94 71 649 1737",
    href: "tel:+94716491737",
  },
  {
    icon: FiGithub,
    label: "GitHub",
    value: "github.com/Navindu752",
    href: "https://github.com/Navindu752",
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/navindu-dilshan-munasinghe",
    href: "https://www.linkedin.com/in/navindu-dilshan-munasinghe-242044216/",
  },
  {
    icon: FiMapPin,
    label: "Location",
    value: "Colombo, Sri Lanka",
    href: null,
  },
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setStatus("sent");
      formRef.current.reset();
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <SectionWrapper id="contact" className="bg-white dark:bg-gray-950">
      <SectionHeading
        label="Contact"
        title="Let's Work Together"
        subtitle="Have a project in mind, a role to discuss, or just want to connect? I'd love to hear from you."
        centered
      />

      <div className="grid md:grid-cols-2 gap-10 lg:gap-16 max-w-4xl mx-auto">
        {/* Contact Info */}
        <div className="space-y-4">
          <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6">
            I'm currently open to <span className="font-semibold text-gray-800 dark:text-gray-200">senior engineering</span> and{" "}
            <span className="font-semibold text-gray-800 dark:text-gray-200">tech lead</span> opportunities. Whether it's a full-time role, contract work, or a
            challenging side project — let's talk!
          </p>

          {contactItems.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08, ease: EASE_OUT }}
              className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-sky-500/50 transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-500 shrink-0 group-hover:bg-sky-500/20 transition-colors">
                <item.icon size={18} />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-gray-400 dark:text-gray-500 font-medium">{item.label}</p>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-gray-800 dark:text-gray-200 hover:text-sky-500 transition-colors truncate block"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">{item.value}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                Name <span className="text-sky-500">*</span>
              </label>
              <input
                type="text"
                name="from_name"
                required
                placeholder="John Doe"
                className="w-full px-4 py-2.5 rounded-xl text-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                Email <span className="text-sky-500">*</span>
              </label>
              <input
                type="email"
                name="from_email"
                required
                placeholder="john@example.com"
                className="w-full px-4 py-2.5 rounded-xl text-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              placeholder="Project collaboration / Job opportunity"
              className="w-full px-4 py-2.5 rounded-xl text-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
              Message <span className="text-sky-500">*</span>
            </label>
            <textarea
              required
              name="message"
              rows={10}
              placeholder="Tell me about your project or opportunity..."
              className="w-full px-4 py-2.5 rounded-xl text-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all resize-none"
            />
          </div>

          {status === "error" && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-start gap-3 p-4 rounded-xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/30"
            >
              <span className="text-red-500 text-lg leading-none">✕</span>
              <div>
                <p className="text-sm font-semibold text-red-600 dark:text-red-400">Failed to send message</p>
                <p className="text-xs text-red-500 dark:text-red-400 mt-0.5">
                  Something went wrong. Please try again or reach me directly at{" "}
                  <a href="mailto:navindudilshan60@gmail.com" className="underline">
                    navindudilshan60@gmail.com
                  </a>
                </p>
              </div>
            </motion.div>
          )}

          {status === "sent" && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-start gap-3 p-4 rounded-xl bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/30"
            >
              <span className="text-green-500 text-lg leading-none">✓</span>
              <div>
                <p className="text-sm font-semibold text-green-600 dark:text-green-400">Message sent successfully!</p>
                <p className="text-xs text-green-600 dark:text-green-400 mt-0.5">
                  Thanks for reaching out! I'll get back to you as soon as possible.
                </p>
              </div>
            </motion.div>
          )}

          <button
            type="submit"
            disabled={status === "sending" || status === "sent"}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold bg-sky-500 hover:bg-sky-600 disabled:opacity-60 disabled:cursor-not-allowed text-white transition-all duration-200 shadow-md hover:shadow-sky-500/30 hover:shadow-lg"
          >
            {status === "sending" ? (
              <>
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Sending…
              </>
            ) : status === "sent" ? (
              <>✓ Sent!</>
            ) : (
              <>
                <FiSend size={15} />
                Send Message
              </>
            )}
          </button>
        </form>
      </div>
    </SectionWrapper>
  );
}
