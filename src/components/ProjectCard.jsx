import { motion } from "framer-motion";
import { FaArrowRight, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

function ProjectCard({ project }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      whileHover={{ x: 6 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      className="flex items-center gap-4 rounded-xl border border-line/80 bg-canvas/45 p-4 transition hover:border-cobalt/35 hover:bg-cobalt/10"
    >
      <div className="flex-1">
        <p className="text-[10px] font-black uppercase tracking-widest text-coral mb-1">{project.category}</p>
        <h3 className="font-black text-ink text-lg leading-tight">{project.title}</h3>
        <p className="mt-1 text-sm text-muted line-clamp-2">{project.subtitle}</p>
        
        <div className="mt-3 flex flex-wrap gap-4">
          <a href={project.github} target="_blank" rel="noreferrer" className="text-xs font-bold text-cobalt hover:underline inline-flex items-center gap-1.5">
            <FaGithub /> GitHub
          </a>
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer" className="text-xs font-bold text-cobalt hover:underline inline-flex items-center gap-1.5">
              <FaExternalLinkAlt /> Demo
            </a>
          )}
          <a href={project.caseStudy} className="text-xs font-black text-ink hover:underline inline-flex items-center gap-1.5 ml-auto">
            Case Study <FaArrowRight />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
