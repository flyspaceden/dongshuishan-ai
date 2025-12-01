import { motion } from "framer-motion";
import {
  Activity,
  Building2,
  Monitor,
  Mountain,
  ShieldCheck,
  Smile,
  Sparkles,
  UserCheck,
} from "lucide-react";

import { BackButton, Button, SectionHeader } from "../components/ui";

export const VRHealingPage = ({ navigate, t }) => {
  const content = t.pages.vr;
  const subPages = [
    {
      id: "vr-assessment",
      title: t.pages.vrAssessment.title,
      desc: t.pages.vrAssessment.heroDesc,
      tag: t.pages.vrAssessment.sub,
      image:
        "https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=2069&auto=format&fit=crop",
      icon: <Sparkles />,
    },
    {
      id: "vr-happy",
      title: t.pages.vrHappy.title,
      desc: t.pages.vrHappy.heroDesc,
      tag: t.pages.vrHappy.sub,
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2070&auto=format&fit=crop",
      icon: <Smile />,
    },
    {
      id: "vr-modules",
      title: t.pages.vrModules.title,
      desc: t.pages.vrModules.heroDesc,
      tag: t.pages.vrModules.sub,
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2069&auto=format&fit=crop",
      icon: <ShieldCheck />,
    },
  ];
  const isZh = t.nav.home === "首页";
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

        {/* Subpage navigation */}
        <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 mb-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                {isZh ? "VR 心理疗愈子页面" : "VR Healing Subpages"}
              </h3>
              <p className="text-slate-600 mt-2">
                {isZh
                  ? "深入体验情绪评估、快乐疗法与系统蓝图，按需选择入口。"
                  : "Dive into assessment, joyful therapy, and the system blueprint—choose the path you need."}
              </p>
            </div>
            <Button variant="outline" onClick={() => navigate("contact")}>
              {isZh ? "预约体验" : "Book a Demo"}
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {subPages.map((item, i) => (
              <div
                key={i}
                onClick={() => navigate(item.id)}
                className="relative rounded-2xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-all border border-slate-100"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent"></div>
                <div className="absolute inset-0 p-5 flex flex-col justify-end text-white space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-emerald-200">
                    {item.icon} {item.tag}
                  </div>
                  <h4 className="text-lg font-bold leading-snug">{item.title}</h4>
                  <p className="text-sm text-slate-200 line-clamp-2">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
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
