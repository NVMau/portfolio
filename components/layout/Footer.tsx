"use client";

import { useTranslations } from "next-intl";
import { Github, Linkedin, Mail, ArrowUp, Heart } from "lucide-react";

export function Footer() {
  const t = useTranslations("footer");
  const navT = useTranslations("nav");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[var(--color-border)] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Logo & Tagline */}
          <div>
            <a
              href="#home"
              className="font-[family-name:var(--font-code)] text-lg font-bold text-[var(--color-accent-primary)]"
            >
              {"<NVM />"}
            </a>
            <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
              {t("tagline")}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 md:justify-center">
            {["home", "about", "experience", "projects", "skills", "contact"].map(
              (key) => (
                <a
                  key={key}
                  href={`#${key}`}
                  className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] transition-colors"
                >
                  {navT(key)}
                </a>
              )
            )}
          </div>

          {/* Social & Back to top */}
          <div className="flex items-center gap-3 md:justify-end">
            {[
              { icon: Github, href: "https://github.com/NVMau", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/vmaudev", label: "LinkedIn" },
              { icon: Mail, href: "mailto:nmau4669@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="p-2 rounded-lg text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
            <button
              onClick={scrollToTop}
              className="ml-2 p-2 rounded-lg glass text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] transition-all"
              aria-label={t("back_to_top")}
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-[var(--color-border)] text-center">
          <p className="text-sm text-[var(--color-text-muted)] flex items-center justify-center gap-1">
            © 2025 Nguyen Van Mau. Built with Next.js &{" "}
            <Heart size={14} className="text-red-500 fill-red-500" />
          </p>
        </div>
      </div>
    </footer>
  );
}
