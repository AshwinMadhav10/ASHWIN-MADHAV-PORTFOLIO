import { motion } from "framer-motion";
import { infoCards } from "../data/portfolio.js";
import SectionHeading from "./SectionHeading.jsx";

function About() {
  return (
    <section id="about" className="section-shell">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Profile" title="About Me">
          I am an aspiring AI/ML Engineer and Python Developer with hands-on experience in developing AI-powered
          platforms, RAG applications, recruitment systems, educational tools, and business automation workflows.
        </SectionHeading>

        <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {infoCards.map(({ label, value, icon: Icon }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.06, duration: 0.5 }}
              className="surface-soft flex flex-col items-center justify-center rounded-2xl p-4 text-center transition hover:-translate-y-1 hover:border-cobalt/40 hover:bg-paper"
            >
              <div className="mb-3 grid h-10 w-10 place-items-center rounded-xl bg-cobalt/10 text-cobalt">
                <Icon aria-hidden="true" />
              </div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-muted">{label}</p>
              <p className="mt-1.5 text-base font-black leading-6 text-ink">{value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
