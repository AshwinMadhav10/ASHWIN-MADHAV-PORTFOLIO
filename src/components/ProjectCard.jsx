import { motion } from "framer-motion";
import { FaArrowRight, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

function ProjectCard({ project }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16 }}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 240, damping: 22 }}
      className="surface group relative flex h-full flex-col overflow-hidden rounded-2xl p-4 sm:p-5 transition hover:-translate-y-1 hover:border-cobalt/40"
    >
      <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-cobalt/70 to-transparent opacity-0 transition group-hover:opacity-100" />
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="rounded-full bg-cobalt/10 px-2 py-1 text-[10px] font-black uppercase tracking-widest text-cobalt">
            {project.category}
          </span>
          <h3 className="mt-3 text-xl font-black leading-tight tracking-tight text-ink">{project.title}</h3>
          <p className="mt-1 text-sm font-bold text-muted">{project.subtitle}</p>
        </div>
      </div>

      <p className="mt-3 text-sm leading-6 text-muted">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.technologies.map((tech) => (
          <span key={tech} className="chip text-[10px] px-2 py-0.5">
            {tech}
          </span>
        ))}
      </div>

      <ul className="mt-4 grid gap-1.5">
        {project.features?.slice(0, 4).map((feature, index) => (
          <motion.li
            key={feature}
            className="flex gap-2 text-xs leading-5 text-muted"
            whileHover={{ x: 2 }}
            transition={{ type: "spring", stiffness: 320, damping: 24, delay: index * 0.005 }}
          >
            <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-green" />
            {feature}
          </motion.li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap gap-2 pt-5">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full border border-line bg-paper/80 px-3 py-1.5 text-xs font-black text-ink outline-none transition hover:border-cobalt/40 hover:bg-cobalt/5"
        >
          <FaGithub aria-hidden="true" />
          GitHub
        </a>
        {project.demo ? (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-line bg-paper/80 px-3 py-1.5 text-xs font-black text-ink outline-none transition hover:border-cobalt/40 hover:bg-cobalt/5"
          >
            <FaExternalLinkAlt aria-hidden="true" />
            Live Demo
          </a>
        ) : (
          <span className="inline-flex items-center rounded-full border border-line bg-canvas/60 px-3 py-1.5 text-xs font-bold text-muted">
            Demo pending
          </span>
        )}
        <a
          href={project.caseStudy}
          className="inline-flex items-center gap-1.5 rounded-full bg-cobalt px-3 py-1.5 text-xs font-black text-ink outline-none transition hover:bg-green"
        >
          Case Study
          <FaArrowRight className="transition group-hover:translate-x-1" aria-hidden="true" />
        </a>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
