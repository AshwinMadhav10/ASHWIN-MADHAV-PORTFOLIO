import { motion } from "framer-motion";
import { FaAward, FaExternalLinkAlt } from "react-icons/fa";
import { certifications } from "../data/portfolio.js";
import SectionHeading from "./SectionHeading.jsx";

function Certifications() {
  return (
    <section id="certifications" className="section-shell">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Proof" title="Certifications" align="center">
          Certificates and credentials that support Ashwin&apos;s development, AI, and leadership profile.
        </SectionHeading>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {certifications.map((certificate, index) => (
            <motion.article
              key={certificate.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="surface flex min-h-72 flex-col rounded-3xl p-6 transition hover:-translate-y-1 hover:border-cobalt/40"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gold/10 text-xl text-gold">
                <FaAward aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-xl font-black leading-tight tracking-tight text-ink">{certificate.name}</h3>
              <p className="mt-3 font-bold text-muted">{certificate.issuer}</p>
              <div className="mt-auto pt-6">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-paper/80 px-4 py-2 text-sm font-bold text-muted transition hover:border-cobalt/40 hover:text-ink"
                  aria-label={`${certificate.name} credential placeholder`}
                >
                  <FaExternalLinkAlt className="text-cobalt" aria-hidden="true" />
                  {certificate.credential}
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
