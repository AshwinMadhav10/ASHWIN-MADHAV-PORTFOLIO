import { motion } from "framer-motion";
import { FaCalendarAlt } from "react-icons/fa";
import { experiences } from "../data/portfolio.js";
import SectionHeading from "./SectionHeading.jsx";

function Experience() {
  return (
    <section id="experience" className="section-shell">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Practice" title="Experience" align="center">
          Internship experience across AI workflows, backend systems, data science, NLP, and product-oriented
          applications.
        </SectionHeading>

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-cobalt via-coral to-transparent sm:block" />
          <div className="space-y-6">
            {experiences.map((experience, index) => (
              <motion.article
                key={experience.role}
                initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55 }}
                whileHover={{ x: 6 }}
                className="surface relative rounded-3xl p-5 sm:ml-14 sm:p-6"
              >
                <span className="absolute -left-[3.4rem] top-8 hidden h-10 w-10 rounded-full border border-line bg-paper shadow-crisp sm:grid sm:place-items-center">
                  <span className="pulse-dot h-3 w-3 rounded-full bg-green" />
                </span>
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-2xl font-black tracking-tight text-ink">{experience.role}</h3>
                    <p className="mt-2 text-base font-bold text-cobalt">
                      {experience.company} <span className="text-muted">- {experience.mode}</span>
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-line bg-canvas/70 px-4 py-2 text-sm font-bold text-muted">
                    <FaCalendarAlt className="text-coral" aria-hidden="true" />
                    {experience.period}
                  </div>
                </div>
                <ul className="mt-6 space-y-3">
                  {experience.points.map((point) => (
                    <li key={point} className="flex gap-3 text-muted">
                      <span className="mt-2 h-2 w-2 flex-none rounded-full bg-green" />
                      <span className="leading-7">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
