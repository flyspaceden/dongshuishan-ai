import { motion } from "framer-motion";
import { Activity, Building2, Monitor, Mountain, UserCheck } from "lucide-react";

import { BackButton, Button, SectionHeader } from "../components/ui";

export const VRHealingPage = ({ navigate, t }) => {
  const content = t.pages.vr;
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

        <div className="relative rounded-3xl overflow-hidden h-[450px] mb-16 shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1626379953822-baec19c3accd?q=80&w=2070&auto=format&fit=crop"
            alt="VR Healing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-transparent flex items-center p-12">
            <div className="max-w-xl text-white">
              <h3 className="text-4xl font-bold mb-6 leading-tight whitespace-pre-line">
                {content.heroTitle}
              </h3>
              <p className="text-lg text-slate-300 mb-8">{content.heroDesc}</p>
              <Button variant="primary">{t.common.btnSubmit}</Button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-8">
              {content.productsTitle}
            </h3>
            <div className="space-y-8">
              {[
                {
                  icon: <Monitor size={28} />,
                  color: "blue",
                  ...content.products[0],
                },
                {
                  icon: <Activity size={28} />,
                  color: "purple",
                  ...content.products[1],
                },
                {
                  icon: <Mountain size={28} />,
                  color: "emerald",
                  ...content.products[2],
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-5 group">
                  <div
                    className={`w-14 h-14 bg-${item.color}-100 rounded-2xl flex items-center justify-center text-${item.color}-600 flex-shrink-0 group-hover:bg-${item.color}-600 group-hover:text-white transition-colors`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-800">
                      {item.title}
                    </h4>
                    <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <UserCheck className="text-emerald-500" />{" "}
                {content.serviceTitle}
              </h3>
              <div className="space-y-4">
                {content.services.map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center p-4 border border-slate-100 rounded-xl hover:border-emerald-200 hover:bg-emerald-50/50 transition-all cursor-pointer"
                  >
                    <div>
                      <h5 className="font-bold text-slate-800 text-sm">
                        {item.name}
                      </h5>
                      <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
                    </div>
                    <span className="text-xs font-bold text-emerald-600 bg-white px-3 py-1 rounded-full shadow-sm">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900 p-8 rounded-3xl text-white relative overflow-hidden">
              <div className="relative z-10">
                <div className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-2">
                  {t.common.successCase}
                </div>
                <h4 className="font-bold text-lg mb-2">
                  {t.common.caseStudy.title}
                </h4>
                <p className="text-slate-400 text-sm">
                  {t.common.caseStudy.desc}
                </p>
              </div>
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <Building2 size={100} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

