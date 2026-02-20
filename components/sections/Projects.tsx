"use client";

import { useTranslations } from "next-intl";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ExternalLink, Github, Sparkles, Lock } from "lucide-react";
import { projects, type Project } from "@/data/projects";

const filters = ["all", "ai", "backend", "fullstack", "automation"] as const;

export function Projects() {
  const t = useTranslations("projects");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [locale, setLocale] = useState("en");

  useEffect(() => {
    const cookieLocale =
      document.cookie
        .split("; ")
        .find((row) => row.startsWith("locale="))
        ?.split("=")[1] || "en";
    setLocale(cookieLocale);
  }, []);

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 lg:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-display)] font-bold">
            {t("title")}
          </h2>
          <p className="mt-4 text-[var(--color-text-secondary)]">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex justify-center gap-2 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 text-sm rounded-lg font-medium transition-all ${
                activeFilter === filter
                  ? "bg-[var(--color-accent-primary)] text-[var(--color-bg-primary)]"
                  : "glass text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)]"
              }`}
            >
              {t(`filter_${filter}`)}
            </button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                locale={locale}
                t={t}
              />
            ))}

            {/* Coming Soon Card */}
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: filteredProjects.length * 0.1 }}
              className="glass rounded-xl p-6 flex flex-col items-center justify-center text-center min-h-[280px] border border-dashed border-[var(--color-border)]"
            >
              <Sparkles
                size={32}
                className="text-[var(--color-text-muted)] mb-4"
              />
              <h3 className="font-[family-name:var(--font-display)] font-bold text-lg mb-2">
                {t("coming_soon")}
              </h3>
              <p className="text-sm text-[var(--color-text-muted)]">
                {t("coming_soon_desc")}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  locale,
  t,
}: {
  project: Project;
  index: number;
  locale: string;
  t: ReturnType<typeof useTranslations>;
}) {
  const description =
    locale === "vi" ? project.descriptionVi : project.description;
  const badge = locale === "vi" ? project.badgeVi : project.badge;
  const note = locale === "vi" ? project.noteVi : project.note;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ delay: index * 0.1 }}
      className="group glass rounded-xl overflow-hidden glow-hover transition-all hover:-translate-y-2"
    >
      {/* Preview area with tech icons */}
      <div className="h-40 bg-[var(--color-bg-primary)] flex items-center justify-center relative overflow-hidden">
        <div className="flex flex-wrap gap-3 justify-center p-4">
          {project.techStack.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 text-xs font-[family-name:var(--font-code)] rounded-lg bg-[var(--color-bg-card)] text-[var(--color-accent-primary)] border border-[var(--color-border)]"
            >
              {tech}
            </span>
          ))}
        </div>
        {badge && (
          <div className="absolute top-3 right-3 px-2 py-1 text-xs rounded-full bg-[var(--color-accent-primary)] text-[var(--color-bg-primary)] font-medium">
            {badge}
          </div>
        )}
        {project.isFeatured && (
          <div className="absolute top-3 left-3 px-2 py-1 text-xs rounded-full bg-[var(--color-accent-secondary)] text-white font-medium">
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-[family-name:var(--font-display)] font-bold text-lg mb-2 group-hover:text-[var(--color-accent-primary)] transition-colors">
          {project.name}
        </h3>
        <p className="text-sm text-[var(--color-text-secondary)] mb-4 line-clamp-2">
          {description}
        </p>

        {/* Remaining tech tags */}
        {project.techStack.length > 5 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.techStack.slice(5).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-xs font-[family-name:var(--font-code)] rounded bg-[var(--color-bg-primary)] text-[var(--color-text-muted)] border border-[var(--color-border)]"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Note or Links */}
        {note ? (
          <div className="flex items-center gap-2 text-xs text-[var(--color-text-muted)]">
            <Lock size={14} />
            {note}
          </div>
        ) : (
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] transition-colors"
              >
                <Github size={16} />
                {t("github")}
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] transition-colors"
              >
                <ExternalLink size={16} />
                {t("live_demo")}
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}
