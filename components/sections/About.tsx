"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Server, Brain, Cloud, MapPin, GraduationCap, Briefcase, Zap } from "lucide-react";

export function About() {
  const t = useTranslations("about");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const cards = [
    {
      icon: Server,
      title: t("card_backend_title"),
      desc: t("card_backend_desc"),
      color: "var(--color-accent-primary)",
    },
    {
      icon: Brain,
      title: t("card_ai_title"),
      desc: t("card_ai_desc"),
      color: "var(--color-accent-secondary)",
    },
    {
      icon: Cloud,
      title: t("card_cloud_title"),
      desc: t("card_cloud_desc"),
      color: "var(--color-accent-green)",
    },
  ];

  const facts = [
    { icon: MapPin, text: t("location") },
    { icon: GraduationCap, text: t("education") },
    { icon: Briefcase, text: t("current") },
    { icon: Zap, text: t("passion") },
  ];

  return (
    <section id="about" className="py-20 lg:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Avatar + Quick Facts */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Avatar */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-48 h-48 rounded-full glass overflow-hidden glow">
                  <img
                    src="/images/avatar.jpg"
                    alt="NVMau"
                    className="w-full h-full object-cover object-top scale-150"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 px-3 py-1 rounded-full bg-[var(--color-accent-green)] text-[var(--color-bg-primary)] text-xs font-medium">
                  Available
                </div>
              </div>
            </div>

            {/* Quick Facts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {facts.map((fact, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-lg glass"
                >
                  <fact.icon size={18} className="text-[var(--color-accent-primary)] shrink-0" />
                  <span className="text-sm text-[var(--color-text-secondary)]">
                    {fact.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Description + What I Do Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Description */}
            <div className="space-y-4 text-[var(--color-text-secondary)] leading-relaxed">
              <p>{t("description1")}</p>
              <p>{t("description2")}</p>
              <p>{t("description3")}</p>
            </div>

            {/* What I Do */}
            <div>
              <h3 className="text-xl font-[family-name:var(--font-display)] font-bold mb-4">
                {t("what_i_do")}
              </h3>
              <div className="space-y-4">
                {cards.map((card, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.15 }}
                    className="group glass rounded-xl p-5 glow-hover transition-all hover:-translate-y-1"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="p-3 rounded-lg shrink-0"
                        style={{ backgroundColor: `color-mix(in srgb, ${card.color} 15%, transparent)` }}
                      >
                        <card.icon size={24} style={{ color: card.color }} />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{card.title}</h4>
                        <p className="text-sm text-[var(--color-text-secondary)]">
                          {card.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
