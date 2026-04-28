import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import SectionWrapper from "../components/SectionWrapper";
import SectionHeading from "../components/SectionHeading";
import { FiMail, FiGithub, FiLinkedin, FiSend, FiMapPin, FiPhone } from "react-icons/fi";
import { EASE_OUT } from "../utils/animations";

const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  || "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  || "YOUR_PUBLIC_KEY";

const contactItems = [
  { icon: FiMail,     label: "Email",    value: "navindudilshan60@gmail.com",                      href: "mailto:navindudilshan60@gmail.com" },
  { icon: FiPhone,    label: "Phone",    value: "+94 71 649 1737",                                  href: "tel:+94716491737" },
  { icon: FiGithub,   label: "GitHub",   value: "github.com/Navindu752",                            href: "https://github.com/Navindu752" },
  { icon: FiLinkedin, label: "LinkedIn", value: "linkedin.com/in/navindu-dilshan-munasinghe",       href: "https://www.linkedin.com/in/navindu-dilshan-munasinghe-242044216/" },
  { icon: FiMapPin,   label: "Location", value: "Colombo, Sri Lanka",                               href: null },
];

const inputClass = "w-full px-4 py-3 rounded-xl text-sm bg-white dark:bg-white/[0.04] border border-gray-200 dark:border-white/[0.08] text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all duration-300 hover:border-gray-300 dark:hover:border-white/[0.14]";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, { publicKey: EMAILJS_PUBLIC_KEY });
      setStatus("sent");
      formRef.current.reset();
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <SectionWrapper id="contact" className="bg-white dark:bg-[#030712]">
      <div className="absolute inset-x-0 top-0 h-px section-divider" />

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-[120px] pointer-events-none" />

      <SectionHeading
        label="Contact"
        title="Let's Work Together"
        subtitle="Have a project in mind, a role to discuss, or just want to connect? I'd love to hear from you."
        centered
      />

      <div className="grid md:grid-cols-2 gap-10 lg:gap-16 max-w-4xl mx-auto relative">
        {/* Contact Info */}
        <div className="space-y-4">
          <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-7">
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
              transition={{ duration: 0.45, delay: idx * 0.08, ease: EASE_OUT }}
              whileHover={{ x: 4, transition: { duration: 0.2 } }}
              className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-white/[0.07] hover:border-sky-500/40 dark:hover:border-sky-500/30 transition-all duration-300 group hover:shadow-lg hover:shadow-sky-500/5"
            >
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-500 shrink-0 group-hover:bg-sky-500/20 group-hover:scale-110 transition-all duration-300">
                <item.icon size={17} />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] text-gray-400 dark:text-gray-500 font-semibold uppercase tracking-wider mb-0.5">{item.label}</p>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-gray-800 dark:text-gray-200 hover:text-sky-500 dark:hover:text-sky-400 transition-colors truncate block"
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
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: EASE_OUT }}
          ref={formRef}
          onSubmit={handleSubmit}
          className="relative bg-gray-50 dark:bg-gray-900/60 rounded-2xl p-7 border border-gray-200 dark:border-white/[0.08] space-y-5 overflow-hidden"
        >
          {/* Top shine */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-500/40 to-transparent" />

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wider">
                Name <span className="text-sky-500">*</span>
              </label>
              <input type="text" name="from_name" required placeholder="John Doe" className={inputClass} />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wider">
                Email <span className="text-sky-500">*</span>
              </label>
              <input type="email" name="from_email" required placeholder="john@example.com" className={inputClass} />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wider">
              Subject
            </label>
            <input type="text" name="subject" placeholder="Project collaboration / Job opportunity" className={inputClass} />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wider">
              Message <span className="text-sky-500">*</span>
            </label>
            <textarea required name="message" rows={6} placeholder="Tell me about your project or opportunity..." className={`${inputClass} resize-none`} />
          </div>

          {status === "error" && (
            <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="flex items-start gap-3 p-4 rounded-xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/30">
              <span className="text-red-500 text-lg leading-none mt-0.5">✕</span>
              <div>
                <p className="text-sm font-semibold text-red-600 dark:text-red-400">Failed to send message</p>
                <p className="text-xs text-red-500 dark:text-red-400 mt-0.5">
                  Something went wrong. Please try again or reach me directly at{" "}
                  <a href="mailto:navindudilshan60@gmail.com" className="underline">navindudilshan60@gmail.com</a>
                </p>
              </div>
            </motion.div>
          )}

          {status === "sent" && (
            <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="flex items-start gap-3 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30">
              <span className="text-emerald-500 text-lg leading-none mt-0.5">✓</span>
              <div>
                <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">Message sent successfully!</p>
                <p className="text-xs text-emerald-600 dark:text-emerald-400 mt-0.5">Thanks for reaching out! I'll get back to you as soon as possible.</p>
              </div>
            </motion.div>
          )}

          <motion.button
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={status === "sending" || status === "sent"}
            className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-bold bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-400 hover:to-sky-500 disabled:from-sky-400/60 disabled:to-sky-500/60 disabled:cursor-not-allowed text-white transition-all duration-300 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:shadow-xl"
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
          </motion.button>
        </motion.form>
      </div>
    </SectionWrapper>
  );
}
