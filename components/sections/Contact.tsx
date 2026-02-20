"use client";

import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Mail, MapPin, Briefcase, Clock, Github, Linkedin, Send, CheckCircle, AlertCircle } from "lucide-react";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  budget: string;
  message: string;
}

export function Contact() {
  const t = useTranslations("contact");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setStatus("sending");
    try {
      // EmailJS integration placeholder
      // Replace with actual EmailJS call:
      // await emailjs.send(SERVICE_ID, TEMPLATE_ID, data, PUBLIC_KEY);
      console.log("Form data:", data);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const contactInfo = [
    { icon: Mail, text: "nmau4669@gmail.com", href: "mailto:nmau4669@gmail.com" },
    { icon: MapPin, text: "Ho Chi Minh City, Vietnam" },
    { icon: Briefcase, text: t("open_to") },
    { icon: Clock, text: t("response_time") },
  ];

  return (
    <section id="contact" className="py-20 lg:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-display)] font-bold">
            {t("title")}
          </h2>
          <p className="mt-4 text-[var(--color-text-secondary)]">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-6"
          >
            {/* Available badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent-green)] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-accent-green)]" />
              </span>
              ✅ {t("available")}
            </div>

            {/* Contact cards */}
            <div className="space-y-3">
              {contactInfo.map((info, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  {info.href ? (
                    <a
                      href={info.href}
                      className="flex items-center gap-3 p-4 glass rounded-xl hover:border-[var(--color-accent-primary)] transition-all group"
                    >
                      <info.icon
                        size={20}
                        className="text-[var(--color-accent-primary)] shrink-0"
                      />
                      <span className="text-[var(--color-text-secondary)] group-hover:text-[var(--color-accent-primary)] transition-colors">
                        {info.text}
                      </span>
                    </a>
                  ) : (
                    <div className="flex items-center gap-3 p-4 glass rounded-xl">
                      <info.icon
                        size={20}
                        className="text-[var(--color-accent-primary)] shrink-0"
                      />
                      <span className="text-[var(--color-text-secondary)]">
                        {info.text}
                      </span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex gap-3 pt-4">
              {[
                { icon: Github, href: "https://github.com/NVMau", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/vmaudev", label: "LinkedIn" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-3 glass rounded-xl text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] hover:scale-110 transition-all"
                >
                  <Icon size={22} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="glass rounded-xl p-6 sm:p-8 space-y-5"
            >
              {/* Name & Email row */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-[var(--color-text-secondary)] mb-1.5">
                    {t("form_name")} *
                  </label>
                  <input
                    {...register("name", { required: true })}
                    className="w-full px-4 py-2.5 rounded-lg bg-[var(--color-bg-primary)] border border-[var(--color-border)] text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:border-[var(--color-accent-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent-primary)] transition-all"
                    placeholder="Tony Stark"
                  />
                  {errors.name && (
                    <p className="text-xs text-red-400 mt-1">Required</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm text-[var(--color-text-secondary)] mb-1.5">
                    {t("form_email")} *
                  </label>
                  <input
                    {...register("email", {
                      required: true,
                      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    })}
                    type="email"
                    className="w-full px-4 py-2.5 rounded-lg bg-[var(--color-bg-primary)] border border-[var(--color-border)] text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:border-[var(--color-accent-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent-primary)] transition-all"
                    placeholder="tony@starkindustries.com"
                  />
                  {errors.email && (
                    <p className="text-xs text-red-400 mt-1">Valid email required</p>
                  )}
                </div>
              </div>

              {/* Subject & Budget row */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-[var(--color-text-secondary)] mb-1.5">
                    {t("form_subject")} *
                  </label>
                  <input
                    {...register("subject", { required: true })}
                    className="w-full px-4 py-2.5 rounded-lg bg-[var(--color-bg-primary)] border border-[var(--color-border)] text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:border-[var(--color-accent-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent-primary)] transition-all"
                    placeholder="Build me a Death Star 💀"
                  />
                </div>
                <div>
                  <label className="block text-sm text-[var(--color-text-secondary)] mb-1.5">
                    {t("form_budget")}
                  </label>
                  <input
                    {...register("budget")}
                    className="w-full px-4 py-2.5 rounded-lg bg-[var(--color-bg-primary)] border border-[var(--color-border)] text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:border-[var(--color-accent-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent-primary)] transition-all"
                    placeholder="Mass money 💰"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm text-[var(--color-text-secondary)] mb-1.5">
                  {t("form_message")} *
                </label>
                <textarea
                  {...register("message", { required: true })}
                  rows={5}
                  className="w-full px-4 py-2.5 rounded-lg bg-[var(--color-bg-primary)] border border-[var(--color-border)] text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:border-[var(--color-accent-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent-primary)] transition-all resize-none"
                  placeholder="I need a backend that can handle mass traffic... yesterday 😅"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[var(--color-accent-primary)] text-[var(--color-bg-primary)] font-medium hover:shadow-[0_0_30px_rgba(0,217,255,0.4)] disabled:opacity-50 transition-all"
              >
                {status === "sending" ? (
                  <>
                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    {t("form_sending")}
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    {t("form_send")}
                  </>
                )}
              </button>

              {/* Status messages */}
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-sm text-[var(--color-accent-green)] p-3 rounded-lg bg-[rgba(0,255,136,0.1)]"
                >
                  <CheckCircle size={18} />
                  {t("form_success")}
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-sm text-red-400 p-3 rounded-lg bg-[rgba(255,0,0,0.1)]"
                >
                  <AlertCircle size={18} />
                  {t("form_error")}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
