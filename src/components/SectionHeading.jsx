import { motion } from "framer-motion";

function SectionHeading({ eyebrow, title, children, align = "left" }) {
  return (
    <motion.div
      className={`mx-auto mb-12 max-w-3xl ${align === "center" ? "text-center" : ""}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55 }}
    >
      {eyebrow && (
        <p className={`section-kicker mb-4 ${align === "center" ? "justify-center" : ""}`}>
          {eyebrow}
        </p>
      )}
      <h2 className="text-balance text-3xl font-black tracking-tight text-ink sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {children && <p className="mt-5 text-base leading-8 text-muted sm:text-lg">{children}</p>}
    </motion.div>
  );
}

export default SectionHeading;
