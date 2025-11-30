import { motion } from "framer-motion";
import { BookOpen, Building2, Clock } from "lucide-react";

import { BackButton, Button, SectionHeader } from "../components/ui";

export const GlobalStudyPage = ({ navigate, t }) => {
  const content = t.pages.study;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 bg-slate-50 min-h-screen"
    >
      <div className="container mx-auto px-6">
        <BackButton
          onClick={() => navigate("services")}
          text={t.common.btnBack}
        />
        <SectionHeader
          title={content.title}
          subtitle={content.sub}
          align="left"
        />

        <div className="grid lg:grid-cols-3 gap-10 mb-16">
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Building2 className="text-orange-500" /> {content.facTitle}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-8">
                {content.facDesc}
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {content.facilities.map((item, i) => (
                  <div
                    key={i}
                    className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="font-bold text-3xl text-slate-900 mb-1">
                      {item.val}
                      <span className="text-sm font-normal text-slate-500 ml-1">
                        {item.unit}
                      </span>
                    </div>
                    <div className="font-bold text-slate-800 mb-2">
                      {item.name}
                    </div>
                    <div className="text-sm text-slate-500 leading-relaxed">
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <BookOpen className="text-orange-500" /> {content.currTitle}
              </h3>
              <div className="space-y-6">
                <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100">
                  <h4 className="font-bold text-lg text-orange-800 mb-2">
                    {content.k12Title}
                  </h4>
                  <ul className="list-disc list-inside text-slate-700 space-y-2 text-sm">
                    {content.k12List.map((li, i) => (
                      <li key={i}>{li}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                  <h4 className="font-bold text-lg text-blue-800 mb-2">
                    {content.highTitle}
                  </h4>
                  <ul className="list-disc list-inside text-slate-700 space-y-2 text-sm">
                    {content.highList.map((li, i) => (
                      <li key={i}>{li}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
              <h4 className="font-bold text-lg mb-6">
                {t.common.latestActivity}
              </h4>
              <div className="space-y-6">
                <div className="pb-6 border-b border-slate-100">
                  <div className="text-xs font-bold text-white bg-orange-500 px-2 py-0.5 rounded w-fit mb-2">
                    {t.common.studyActivity.tag}
                  </div>
                  <h5 className="font-bold text-slate-800 text-lg">
                    {t.common.studyActivity.title}
                  </h5>
                  <p className="text-sm text-slate-500 mt-2">
                    {t.common.studyActivity.duration}
                  </p>
                  <div className="flex items-center gap-2 mt-3 text-xs text-slate-400">
                    <Clock size={14} /> 2025.01.15
                  </div>
                </div>
              </div>
              <Button className="w-full mt-8 justify-center">
                {t.common.btnDownload}
              </Button>
            </div>

            <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h4 className="font-bold text-lg mb-2">
                  {t.common.coopSchool}
                </h4>
                <div className="flex flex-wrap gap-2 mt-4">
                  {t.common.schools.map((school, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-white/10 rounded text-xs"
                    >
                      {school}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

