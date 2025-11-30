import { motion } from "framer-motion";
import { ArrowRight, Award, Building2, CheckCircle, Play, Users } from "lucide-react";

import { ChairmanMessageSection } from "../components/sections/ChairmanMessageSection.jsx";
import { Button, SectionHeader } from "../components/ui";

export const AboutPage = ({ navigate, t }) => {
  const content = t.pages.about;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 bg-slate-50 min-h-screen"
    >
      <div className="container mx-auto px-6">
        <SectionHeader title={content.title} subtitle={content.sub} />
        <div className="bg-white rounded-3xl p-12 shadow-sm mb-20 flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              {content.title}
            </h3>
            <p className="text-slate-600 mb-6 leading-loose text-justify">
              {content.desc}
            </p>
            <div className="grid grid-cols-2 gap-4">
              {content.tags.map((tag, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-sm font-medium text-slate-700"
                >
                  <CheckCircle size={16} className="text-emerald-500" /> {tag}
                </div>
              ))}
            </div>
            <Button
              variant="primary"
              className="mt-8"
              onClick={() => navigate("experts")}
            >
              {t.nav.experts} <ArrowRight size={16} />
            </Button>
          </div>
          <div className="md:w-1/2 relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-emerald-100 rounded-full opacity-50 blur-2xl"></div>
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
              alt="Team Meeting"
              className="rounded-2xl shadow-xl relative z-10"
            />
          </div>
        </div>

        <ChairmanMessageSection t={t} />

        {/* Alliance Members Entry */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Users size={200} />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                {t.nav.alliance}
              </h3>
              <p className="text-slate-300 max-w-xl">{t.pages.alliance.desc}</p>
            </div>
            <Button
              variant="primary"
              onClick={() => navigate("alliance")}
              className="flex-shrink-0 relative z-10"
            >
              {t.common.btnDetail} <ArrowRight size={18} />
            </Button>
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-2xl font-bold text-center mb-12">
            {content.planTitle}
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {content.plans.map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl border border-slate-100 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 text-slate-100 transform translate-x-1/4 -translate-y-1/4">
                  {
                    [
                      <Building2 key="1" />,
                      <Play key="2" />,
                      <Award key="3" />,
                    ][i]
                  }
                </div>
                <span className="text-emerald-600 font-bold text-sm block mb-2">
                  {item.time}
                </span>
                <h4 className="text-xl font-bold text-slate-900 mb-4">
                  {item.title}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

