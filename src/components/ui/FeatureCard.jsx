import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const FeatureCard = ({ icon, title, desc, onClick, btnText }) => (
  <motion.div
    whileHover={{ y: -10 }}
    className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-emerald-200 cursor-pointer group"
    onClick={onClick}
  >
    <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center text-slate-600 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 mb-6 leading-relaxed text-sm h-20 line-clamp-3">
      {desc}
    </p>
    <div className="text-emerald-600 font-medium flex items-center gap-1 group-hover:gap-2 transition-all text-sm">
      {btnText} <ArrowRight size={16} />
    </div>
  </motion.div>
);

