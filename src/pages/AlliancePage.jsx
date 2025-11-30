import { motion } from "framer-motion";
import { ArrowRight, Building2, Users } from "lucide-react";

import { Button, SectionHeader } from "../components/ui";

export const AlliancePage = ({ navigate, t }) => {
  const content = t.pages.alliance;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 bg-slate-50 min-h-screen"
    >
      <div className="container mx-auto px-6">
        <SectionHeader title={content.title} subtitle={content.sub} />

        {/* Introduction */}
        <div className="bg-white rounded-3xl p-12 shadow-sm mb-16 text-center max-w-4xl mx-auto">
          <p className="text-slate-600 text-lg leading-relaxed">
            {content.desc}
          </p>
        </div>

        {/* Alliance Companies */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-slate-900 mb-10 text-center">
            {content.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.companies.map((company, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-emerald-200 group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-50 to-cyan-50 flex items-center justify-center border border-emerald-100 group-hover:from-emerald-100 group-hover:to-cyan-100 transition-colors">
                    <Building2 className="text-emerald-600" size={28} />
                  </div>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                    {company.type}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">
                  {company.name}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {company.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {company.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 bg-slate-50 text-slate-500 text-xs rounded-full border border-slate-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Join Alliance CTA */}
        <div className="bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-3xl p-12 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Users size={200} />
          </div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">{content.joinTitle}</h3>
            <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
              {content.joinDesc}
            </p>
            <Button variant="white" onClick={() => navigate("contact")}>
              {content.joinBtn} <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

