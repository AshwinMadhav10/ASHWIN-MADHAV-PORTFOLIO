import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import { education } from "../data/portfolio.js";
import SectionHeading from "./SectionHeading.jsx";

function Education() {
  return (
    <section className="section-shell">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Learning" title="Education" align="center">
          Academic foundation in computer science, application development, and emerging AI technologies.
        </SectionHeading>

        <div className="grid gap-6 md:grid-cols-2">
          {education.map((item, index) => (
            <motion.article
              key={item.degree}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="surface rounded-3xl p-6 sm:p-8"
            >
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-coral/10 text-2xl text-coral">
                <FaGraduationCap aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-black tracking-tight text-ink">{item.degree}</h3>
              <p className="mt-2 font-bold text-cobalt">{item.institution}</p>
              <p className="mt-2 text-sm font-black uppercase tracking-[0.16em] text-muted">{item.period}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {item.highlights.map((highlight) => (
                  <span key={highlight} className="chip">
                    {highlight}
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

export default Education;
