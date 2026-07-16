import { motion } from "framer-motion";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import { resumeUrl, techIcons, timelineStats } from "../data/portfolio.js";
import SocialLinks from "./SocialLinks.jsx";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.62, ease: "easeOut" } },
};

function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-5 pb-16 pt-28 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-3xl">
          <motion.p variants={item} className="section-kicker mb-5">
            AI Portfolio
          </motion.p>
          <motion.h1 variants={item} className="hero-title text-balance text-3xl font-black leading-[0.98] tracking-tight sm:text-4xl lg:text-5xl">
            Ashwin Madhav A
          </motion.h1>
          <motion.p variants={item} className="mt-4 max-w-2xl text-lg font-black leading-8 text-ink-soft sm:text-xl">
            AI Engineer
          </motion.p>
          <motion.p variants={item} className="mt-4 max-w-2xl text-sm leading-7 text-muted sm:text-base">
            I build intelligent applications using Python, machine learning, large language models, RAG pipelines, NLP,
            backend APIs, and workflow automation. I focus on creating practical AI solutions for education, recruitment,
            CRM, analytics, and business automation.
          </motion.p>
          <motion.div variants={item} className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button
              type="button"
              onClick={scrollToProjects}
              className="btn-primary group"
            >
              Explore My Projects
              <FaArrowRight className="transition group-hover:translate-x-1" aria-hidden="true" />
            </button>
            <a
              href={resumeUrl}
              download
              className="btn-secondary"
            >
              <FaDownload aria-hidden="true" />
              Download Resume
            </a>
          </motion.div>
          <motion.div variants={item} className="mt-8">
            <SocialLinks />
          </motion.div>

          <motion.div variants={item} className="mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
            {timelineStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="surface-soft rounded-2xl p-4"
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 260, damping: 20, delay: index * 0.01 }}
              >
                <p className="text-2xl font-black tracking-tight text-ink">{stat.value}</p>
                <p className="mt-1 text-xs font-bold leading-5 text-muted">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 26 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
          className="relative"
        >
          <div className="hero-panel relative mx-auto max-w-[34rem] overflow-hidden rounded-[2rem] p-5 sm:p-6">
            <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-green/70 to-transparent" />
            <div className="absolute right-0 top-0 h-28 w-28 border-b border-l border-line bg-coral/10" />
            <div className="relative rounded-[1.45rem] border border-line/80 bg-paper/72 p-5 shadow-card">
              <div className="flex items-start justify-between gap-5 border-b border-line pb-5">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-cobalt">Selected Focus</p>
                  <h2 className="mt-2 text-2xl font-black tracking-tight text-ink">Production AI workflows</h2>
                </div>
                <span className="rounded-full bg-green px-3 py-1 text-xs font-black text-ink">Open</span>
              </div>

              <div className="grid gap-2 py-4">
                {[
                  ["01", "RAG systems"],
                  ["02", "Automation"],
                  ["03", "Backend APIs"],
                ].map(([number, title]) => (
                  <motion.div
                    key={title}
                    className="flex items-center gap-4 rounded-xl border border-line/80 bg-canvas/45 p-3 transition hover:border-cobalt/35 hover:bg-cobalt/10"
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 280, damping: 22 }}
                  >
                    <span className="font-black text-coral">{number}</span>
                    <div className="flex-1">
                      <p className="font-black text-ink">{title}</p>
                      <motion.div
                        className="mt-2 h-1 rounded-full bg-gradient-to-r from-cobalt via-green to-coral"
                        initial={{ width: "32%" }}
                        animate={{ width: ["32%", "76%", "48%"] }}
                        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: Number(number) * 0.25 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="border-t border-line pt-4">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-muted">Core toolchain</p>
                <div className="mt-3 grid grid-cols-4 gap-2 sm:grid-cols-7">
                  {techIcons.slice(0, 7).map(({ name, icon: Icon }, index) => (
                    <motion.div
                      key={name}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.28 + index * 0.025 }}
                      whileHover={{ y: -6, scale: 1.06, rotate: index % 2 === 0 ? -2 : 2 }}
                      className="grid aspect-square place-items-center rounded-xl border border-line/80 bg-canvas/45 text-cobalt transition hover:-translate-y-1 hover:border-green/50 hover:bg-green/10 hover:text-green"
                      title={name}
                    >
                      <Icon className="text-xl" aria-hidden="true" />
                      <span className="sr-only">{name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
