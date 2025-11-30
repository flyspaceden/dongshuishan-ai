import { motion } from "framer-motion";

export const SectionHeader = ({
  title,
  subtitle,
  align = "center",
  light = false,
}) => (
  <div className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}>
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`font-bold tracking-widest text-sm uppercase mb-3 block ${
        light ? "text-emerald-300" : "text-emerald-600"
      }`}
    >
      {subtitle}
    </motion.div>
    <motion.h2
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className={`text-3xl md:text-5xl font-bold ${
        light ? "text-white" : "text-slate-900"
      }`}
    >
      {title}
    </motion.h2>
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: 80 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className={`h-1.5 bg-gradient-to-r from-emerald-400 to-cyan-400 mt-6 rounded-full ${
        align === "center" ? "mx-auto" : ""
      }`}
    ></motion.div>
  </div>
);

