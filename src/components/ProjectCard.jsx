import { motion } from "framer-motion";
import { FaArrowRight, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

function ProjectCard({ project }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 26 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16 }}
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 240, damping: 22 }}
      className="surface group relative flex h-full flex-col overflow-hidden rounded-3xl p-6 transition hover:-translate-y-1 hover:border-cobalt/40"
    >
      <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-cobalt/70 to-transparent opacity-0 transition group-hover:opacity-100" />
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="rounded-full bg-cobalt/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-cobalt">
            {project.category}
          </span>
          <h3 className="mt-5 text-2xl font-black leading-tight tracking-tight text-ink">{project.title}</h3>
          <p className="mt-2 font-bold text-muted">{project.subtitle}</p>
        </div>
      </div>

      <p className="mt-5 leading-7 text-muted">{project.description}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span key={tech} className="chip">
            {tech}
          </span>
        ))}
      </div>

      <ul className="mt-6 grid gap-2">
        {project.features.slice(0, 6).map((feature, index) => (
          <motion.li
            key={feature}
            className="flex gap-3 text-sm leading-6 text-muted"
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 320, damping: 24, delay: index * 0.005 }}
          >
            <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-green" />
            {feature}
          </motion.li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap gap-3 pt-7">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-line bg-paper/80 px-4 py-2 text-sm font-black text-ink outline-none transition hover:border-cobalt/40 hover:bg-cobalt/5 focus-visible:ring-2 focus-visible:ring-cobalt"
        >
          <FaGithub aria-hidden="true" />
          GitHub
        </a>
        {project.demo ? (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-paper/80 px-4 py-2 text-sm font-black text-ink outline-none transition hover:border-cobalt/40 hover:bg-cobalt/5 focus-visible:ring-2 focus-visible:ring-cobalt"
          >
            <FaExternalLinkAlt aria-hidden="true" />
            Live Demo
          </a>
        ) : (
          <span className="inline-flex items-center rounded-full border border-line bg-canvas/60 px-4 py-2 text-sm font-bold text-muted">
            Demo pending
          </span>
        )}
        <a
          href={project.caseStudy}
          className="inline-flex items-center gap-2 rounded-full bg-cobalt px-4 py-2 text-sm font-black text-ink outline-none transition hover:bg-green focus-visible:ring-2 focus-visible:ring-cobalt"
        >
          View Case Study
          <FaArrowRight className="transition group-hover:translate-x-1" aria-hidden="true" />
        </a>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
