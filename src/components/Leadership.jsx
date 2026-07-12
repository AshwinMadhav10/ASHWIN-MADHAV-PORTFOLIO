import { motion } from "framer-motion";
import { FaShieldAlt } from "react-icons/fa";

function Leadership() {
  return (
    <section className="px-5 py-12 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55 }}
        className="surface mx-auto grid max-w-6xl gap-6 rounded-3xl p-6 sm:p-8 lg:grid-cols-[auto_1fr]"
      >
        <div className="grid h-16 w-16 place-items-center rounded-3xl bg-gradient-to-br from-cobalt to-green text-2xl text-ink shadow-card">
          <FaShieldAlt aria-hidden="true" />
        </div>
        <div>
          <p className="section-kicker">Leadership</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-ink">Leadership Beyond Technology</h2>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-muted">
            Served as an NCC Senior Division Leader and earned the NCC &apos;C&apos; Certificate. This experience
            strengthened my leadership, discipline, teamwork, communication, and ability to perform responsibly in
            challenging situations.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

export default Leadership;
