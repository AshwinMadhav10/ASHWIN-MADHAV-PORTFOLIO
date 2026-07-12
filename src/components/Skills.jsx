import { motion } from "framer-motion";
import { skillGroups, techIcons } from "../data/portfolio.js";
import SectionHeading from "./SectionHeading.jsx";

function Skills() {
  return (
    <section id="skills" className="section-shell">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Stack" title="Skills and Tools">
          A category-based view of Ashwin&apos;s AI, backend, database, automation, and collaboration toolkit.
        </SectionHeading>

        <div className="mb-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-7">
          {techIcons.map(({ name, icon: Icon }, index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: index * 0.025, duration: 0.42 }}
              whileHover={{ y: -8, scale: 1.03, rotate: index % 2 === 0 ? -1.5 : 1.5 }}
              className="surface-soft grid min-h-28 place-items-center rounded-3xl p-4 text-center transition hover:-translate-y-1 hover:border-cobalt/40 hover:bg-paper"
            >
              <Icon className="mb-3 text-3xl text-cobalt" aria-hidden="true" />
              <p className="text-sm font-black text-ink">{name}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map(({ title, skills, icon: Icon }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.04, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="surface rounded-3xl p-6"
            >
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-green/10 text-xl text-green">
                  <Icon aria-hidden="true" />
                </span>
                <h3 className="text-xl font-black tracking-tight text-ink">{title}</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="chip">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
