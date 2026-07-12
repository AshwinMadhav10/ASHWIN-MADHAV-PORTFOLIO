import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { projectCategories, projects } from "../data/portfolio.js";
import ProjectCard from "./ProjectCard.jsx";
import SectionHeading from "./SectionHeading.jsx";

function Projects() {
  const [category, setCategory] = useState("All");
  const filteredProjects = useMemo(
    () => (category === "All" ? projects : projects.filter((project) => project.category === category)),
    [category]
  );

  return (
    <section id="projects" className="section-shell">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Builds" title="Featured Projects" align="center">
          Practical AI systems across RAG, recruitment, CRM automation, education, and service-booking workflows.
        </SectionHeading>

        <div className="mb-8 flex flex-wrap justify-center gap-3" role="tablist" aria-label="Filter projects by category">
          {projectCategories.map((item) => (
            <motion.button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
              className={`rounded-full border px-4 py-2 text-sm font-black outline-none transition focus-visible:ring-2 focus-visible:ring-cobalt ${
                category === item
                  ? "border-cobalt bg-cobalt text-ink"
                  : "border-line bg-paper/70 text-muted hover:border-cobalt/40 hover:text-ink"
              }`}
              role="tab"
              aria-selected={category === item}
            >
              {item}
            </motion.button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default Projects;
