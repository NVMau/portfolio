"use client";

import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skillCategories } from "@/data/skills";

export function Skills() {
  const t = useTranslations("skills");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="skills" className="py-20 lg:py-32" ref={ref}>
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + catIndex * 0.1, duration: 0.6 }}
              className="glass rounded-xl p-6 glow-hover transition-all"
            >
              <h3 className="font-[family-name:var(--font-display)] font-bold text-lg mb-4 text-[var(--color-accent-primary)]">
                {t(category.titleKey)}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      delay: 0.2 + catIndex * 0.1 + skillIndex * 0.05,
                    }}
                    className="group relative"
                  >
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-[family-name:var(--font-code)] rounded-lg bg-[var(--color-bg-primary)] text-[var(--color-text-secondary)] border border-[var(--color-border)] hover:border-[var(--color-accent-primary)] hover:text-[var(--color-accent-primary)] hover:scale-105 hover:shadow-[0_0_15px_rgba(0,217,255,0.2)] transition-all cursor-default">
                      {skill.name}
                      {skill.level && (
                        <span className="text-xs text-[var(--color-accent-primary)]">
                          {"★".repeat(skill.level)}
                          {"☆".repeat(5 - skill.level)}
                        </span>
                      )}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
