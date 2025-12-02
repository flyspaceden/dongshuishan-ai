import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const FeatureCard = ({
  icon,
  title,
  desc,
  onClick,
  btnText,
  image,
  alt,
}) => (
  <motion.div
    whileHover={{ y: -10 }}
    className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-emerald-200 cursor-pointer group"
    onClick={onClick}
  >
    <div className="flex flex-col sm:flex-row items-start gap-6">
      <div className="flex-1">
        <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center text-slate-600 mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2">
          {title}
        </h3>
        <p className="text-slate-600 mb-6 leading-relaxed text-sm line-clamp-3">
          {desc}
        </p>
        <div className="text-emerald-600 font-medium flex items-center gap-1 group-hover:gap-2 transition-all text-sm">
          {btnText} <ArrowRight size={16} />
        </div>
      </div>
      {image && (
        <div className="w-full sm:w-40 lg:w-52 h-48 rounded-xl overflow-hidden bg-slate-100 flex-shrink-0">
          <img
            src={image}
            alt={alt || title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      )}
    </div>
  </motion.div>
);
