"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { TypewriterText } from "@/components/effects/TypewriterText";
import { ParticleBackground } from "@/components/effects/ParticleBackground";

export function Hero() {
  const t = useTranslations("hero");

  const roles = t.raw("roles") as string[];

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      <ParticleBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-[var(--color-text-secondary)]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent-green)] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-accent-green)]" />
              </span>
              👋 {t("available")}
            </motion.div>

            {/* Heading */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold leading-tight"
              >
                {t("greeting")}{" "}
                <span className="neon-text text-[var(--color-accent-primary)]">
                  {t("name")}
                </span>
              </motion.h1>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-4 text-xl sm:text-2xl font-[family-name:var(--font-code)]"
              >
                <span className="text-[var(--color-text-muted)]">{">"} </span>
                <TypewriterText texts={roles} />
              </motion.div>
            </div>

            {/* Summary */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-[var(--color-text-secondary)] text-lg max-w-xl leading-relaxed"
            >
              {t("summary")}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => scrollTo("#projects")}
                className="group flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--color-accent-primary)] text-[var(--color-bg-primary)] font-medium hover:shadow-[0_0_30px_rgba(0,217,255,0.4)] transition-all"
              >
                {t("cta_work")}
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
              <a
                href="/cv/NVMau_CV.pdf"
                download
                className="flex items-center gap-2 px-6 py-3 rounded-lg border border-[var(--color-border)] text-[var(--color-text-primary)] hover:border-[var(--color-accent-primary)] hover:text-[var(--color-accent-primary)] transition-all"
              >
                <Download size={18} />
                {t("cta_cv")}
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex items-center gap-3 pt-2"
            >
              {[
                {
                  icon: Github,
                  href: "https://github.com/NVMau",
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/vmaudev",
                  label: "LinkedIn",
                },
                {
                  icon: Mail,
                  href: "mailto:nmau4669@gmail.com",
                  label: "Email",
                },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="p-3 rounded-lg border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] hover:border-[var(--color-accent-primary)] hover:scale-110 hover:rotate-3 transition-all"
                >
                  <Icon size={20} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Floating Stats & Terminal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="hidden lg:flex flex-col items-center gap-6"
          >
            {/* Terminal Window */}
            <div className="glass rounded-xl p-1 w-full max-w-md">
              <div className="flex items-center gap-2 px-4 py-2 border-b border-[var(--color-border)]">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-xs text-[var(--color-text-muted)] font-[family-name:var(--font-code)]">
                  ~/vmau.dev
                </span>
              </div>
              <div className="p-4 font-[family-name:var(--font-code)] text-sm space-y-2">
                <div>
                  <span className="text-[var(--color-accent-green)]">➜</span>{" "}
                  <span className="text-[var(--color-accent-primary)]">~</span>{" "}
                  <span className="text-[var(--color-text-secondary)]">
                    cat about.go
                  </span>
                </div>
                <div className="text-[var(--color-text-muted)]">
                  <div>
                    <span className="text-[var(--color-accent-secondary)]">
                      package
                    </span>{" "}
                    main
                  </div>
                  <div className="mt-1">
                    <span className="text-[var(--color-accent-secondary)]">
                      type
                    </span>{" "}
                    <span className="text-[var(--color-accent-primary)]">
                      Developer
                    </span>{" "}
                    <span className="text-[var(--color-accent-secondary)]">
                      struct
                    </span>{" "}
                    {"{"}
                  </div>
                  <div className="pl-4">
                    Name{"  "}
                    <span className="text-[var(--color-accent-primary)]">
                      string
                    </span>
                  </div>
                  <div className="pl-4">
                    Role{"  "}
                    <span className="text-[var(--color-accent-primary)]">
                      string
                    </span>
                  </div>
                  <div className="pl-4">
                    Skills{" "}
                    <span className="text-[var(--color-accent-primary)]">
                      []string
                    </span>
                  </div>
                  <div>{"}"}</div>
                </div>
              </div>
            </div>

            {/* Floating stat cards */}
            <div className="flex gap-4 w-full max-w-md">
              {[
                { value: "2+", label: "Years Exp" },
                { value: "10+", label: "Projects" },
                { value: "3", label: "Companies" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + i * 0.15 }}
                  className="flex-1 glass rounded-xl p-4 text-center glow-hover transition-all"
                >
                  <div className="text-2xl font-bold text-[var(--color-accent-primary)] font-[family-name:var(--font-display)]">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[var(--color-text-muted)] mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-[var(--color-text-muted)]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-5 h-8 rounded-full border-2 border-[var(--color-border)] flex justify-center pt-1.5"
        >
          <div className="w-1 h-1 rounded-full bg-[var(--color-accent-primary)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
