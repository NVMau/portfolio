"use client";

import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface StatItemProps {
  value: string;
  label: string;
  isInView: boolean;
  delay: number;
}

function StatItem({ value, label, isInView, delay }: StatItemProps) {
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value);
  const hasPlus = value.includes("+");
  const isInfinity = value === "∞";

  useEffect(() => {
    if (!isInView || isInfinity) return;

    let start = 0;
    const end = numericValue;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, numericValue, isInfinity]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6 }}
      className="text-center p-6"
    >
      <div className="text-4xl sm:text-5xl font-[family-name:var(--font-display)] font-bold text-[var(--color-accent-primary)] neon-text mb-2">
        {isInfinity ? "∞" : count}
        {hasPlus && "+"}
      </div>
      <div className="text-sm text-[var(--color-text-secondary)]">{label}</div>
    </motion.div>
  );
}

export function Stats() {
  const t = useTranslations("stats");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const stats = [
    { value: "2+", label: t("years") },
    { value: "10+", label: t("projects") },
    { value: "3", label: t("companies") },
    { value: "5+", label: t("stacks") },
    { value: "∞", label: t("code") },
  ];

  return (
    <section className="py-20 relative overflow-hidden" ref={ref}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass rounded-2xl p-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {stats.map((stat, i) => (
              <StatItem
                key={stat.label}
                value={stat.value}
                label={stat.label}
                isInView={isInView}
                delay={0.1 + i * 0.1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
