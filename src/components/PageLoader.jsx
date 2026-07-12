import { motion } from "framer-motion";

function PageLoader() {
  return (
    <motion.div
      className="fixed inset-0 z-50 grid place-items-center bg-canvas"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.35 } }}
    >
      <div className="text-center">
        <motion.div
          className="mx-auto grid h-20 w-20 place-items-center rounded-3xl border border-line bg-gradient-to-br from-cobalt to-green shadow-card"
          animate={{ y: [0, -8, 0], rotate: [0, 2, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-2xl font-black text-ink">AM</span>
        </motion.div>
        <p className="mt-5 text-sm font-black uppercase tracking-[0.22em] text-muted">Loading Portfolio</p>
      </div>
    </motion.div>
  );
}

export default PageLoader;
