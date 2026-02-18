"use client";

import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { experiences } from "@/data/experience";

export function Experience() {
  const t = useTranslations("experience");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [locale, setLocale] = useState("en");

  useEffect(() => {
    const cookieLocale =
      document.cookie
        .split("; ")
        .find((row) => row.startsWith("locale="))
        ?.split("=")[1] || "en";
    setLocale(cookieLocale);
  }, []);

  return (
    <section id="experience" className="py-20 lg:py-32" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-[2px] bg-[var(--color-border)]" />

          <div className="space-y-12">
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0;
              const highlights =
                locale === "vi" ? exp.highlightsVi : exp.highlights;

              return (
                <motion.div
                  key={exp.id}
                  initial={{
                    opacity: 0,
                    x: isLeft ? -40 : 40,
                  }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.2, duration: 0.6 }}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                    <div
                      className={`w-4 h-4 rounded-full border-2 ${
                        exp.isCurrent
                          ? "bg-[var(--color-accent-green)] border-[var(--color-accent-green)] shadow-[0_0_12px_rgba(0,255,136,0.5)]"
                          : "bg-[var(--color-bg-card)] border-[var(--color-accent-primary)]"
                      }`}
                    />
                  </div>

                  {/* Card */}
                  <div
                    className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                      isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                    }`}
                  >
                    <div className="glass rounded-xl p-6 glow-hover transition-all hover:-translate-y-1">
                      {/* Header */}
                      <div className="flex items-start justify-between gap-2 mb-3">
                        <div>
                          <h3 className="font-[family-name:var(--font-display)] font-bold text-lg">
                            {exp.company}
                          </h3>
                          <p className="text-[var(--color-accent-primary)] text-sm font-medium">
                            {exp.role}
                          </p>
                        </div>
                        {exp.isCurrent && (
                          <span className="shrink-0 px-2 py-0.5 text-xs rounded-full bg-[var(--color-accent-green)] text-[var(--color-bg-primary)] font-medium shadow-[0_0_8px_rgba(0,255,136,0.3)]">
                            {t("current")}
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-[var(--color-text-muted)] mb-3 font-[family-name:var(--font-code)]">
                        {exp.period}
                      </p>

                      {/* Highlights */}
                      <ul className="space-y-2 mb-4">
                        {highlights.map((h, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]"
                          >
                            <span className="text-[var(--color-accent-primary)] mt-1 shrink-0">
                              ▹
                            </span>
                            {h}
                          </li>
                        ))}
                      </ul>

                      {/* Tech tags */}
                      <div className="flex flex-wrap gap-2">
                        {exp.techTags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 text-xs font-[family-name:var(--font-code)] rounded bg-[var(--color-bg-primary)] text-[var(--color-accent-primary)] border border-[var(--color-border)]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
