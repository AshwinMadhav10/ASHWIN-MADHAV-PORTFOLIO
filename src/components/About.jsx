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

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="surface rounded-3xl p-6 sm:p-8"
          >
            <p className="text-lg leading-9 text-ink-soft">
              I have worked with FastAPI, Flask, PostgreSQL, ChromaDB, Hugging Face, LangChain, Groq, NLP, OCR, and
              large language models.
            </p>
            <p className="mt-5 text-lg leading-9 text-muted">
              Through my internships and academic projects, I have gained practical experience in data preprocessing,
              machine learning, backend API development, semantic search, resume parsing, automated evaluation, CRM
              integration, and intelligent workflow automation. I enjoy learning new technologies and using AI to solve
              real-world problems.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {infoCards.map(({ label, value, icon: Icon }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.06, duration: 0.5 }}
                className="surface-soft rounded-3xl p-5 transition hover:-translate-y-1 hover:border-cobalt/40 hover:bg-paper"
              >
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-2xl bg-cobalt/10 text-cobalt">
                  <Icon aria-hidden="true" />
                </div>
                <p className="text-sm font-black uppercase tracking-[0.16em] text-muted">{label}</p>
                <p className="mt-2 text-lg font-black leading-7 text-ink">{value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
