import { motion } from "framer-motion";
import { ArrowRight, Brain, Building2, GraduationCap, Home, Leaf, Music } from "lucide-react";

import { Button, SectionHeader } from "../components/ui";
import teaProductImage2 from "../assets/images/核心业务/东水茶/东水茶2.jpg";

export const ServicesOverviewPage = ({ navigate, t }) => {
  const content = t.pages;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 min-h-screen"
    >
      <div className="container mx-auto px-6">
        <SectionHeader title={t.nav.services} subtitle={t.nav.servicesSub} />

        {/* 0. Fashion Music Festival */}
        <div id="festival" className="mb-24 scroll-mt-28">
          <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
            <div className="md:w-1/2">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1489515217757-5fd1be406fef?q=80&w=2070&auto=format&fit=crop"
                  alt="Festival"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur px-3 py-1.5 rounded-full text-white text-xs font-bold border border-white/20">
                  {content.festival.heroNote}
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-6">
                <Music />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-3">
                {content.festival.title}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                {content.festival.heroDesc}
              </p>
              <div className="flex flex-wrap gap-3 mb-6 text-xs text-slate-500">
                <span className="px-3 py-1 bg-emerald-50 rounded-full border border-emerald-100">
                  {content.festival.location}
                </span>
                <span className="px-3 py-1 bg-slate-50 rounded-full border border-slate-200">
                  {content.festival.date}
                </span>
              </div>
              <Button
                variant="primary"
                onClick={() => navigate("music-festival")}
              >
                {t.common.btnDetail} <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </div>

        {/* 1. VR Healing */}
        <div id="vr" className="mb-24 scroll-mt-28">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1535905557558-afc4877a26fc?q=80&w=1974&auto=format&fit=crop"
                alt="VR"
                className="rounded-3xl shadow-xl w-full"
              />
            </div>
            <div className="md:w-1/2">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                <Brain />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                {content.vr.title}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {content.vr.heroDesc}
              </p>
              <Button variant="primary" onClick={() => navigate("vr-healing")}>
                {t.common.btnDetail} <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </div>

        {/* 2. Global Study */}
        <div id="study" className="mb-24 scroll-mt-28">
          <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
                alt="Study"
                className="rounded-3xl shadow-xl w-full"
              />
            </div>
            <div className="md:w-1/2">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 mb-6">
                <GraduationCap />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                {content.study.title}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {content.study.facDesc}
              </p>
              <Button
                variant="outline"
                onClick={() => navigate("global-study")}
              >
                {t.common.btnDetail} <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </div>

        {/* 3. Wellness Living */}
        <div id="living" className="mb-24 scroll-mt-28">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=2070&auto=format&fit=crop"
                alt="Living"
                className="rounded-3xl shadow-xl w-full"
              />
            </div>
            <div className="md:w-1/2">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mb-6">
                <Home />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                {content.living.title}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {content.living.introDesc}
              </p>
              <Button
                variant="outline"
                onClick={() => navigate("wellness-living")}
              >
                {t.common.btnDetail} <ArrowRight size={16} />
              </Button>
              <div className="mt-4">
                <Button
                  variant="primary"
                  onClick={() => navigate("wellness-estate")}
                  className="gap-2"
                >
                  {t.pages.estate?.sub || "WELLNESS REAL ESTATE"}{" "}
                  <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* 3.1 Wellness Estate */}
        <div id="estate" className="mb-24 scroll-mt-28">
          <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
            <div className="md:w-1/2">
              <img
                src={
                  t.pages.estate?.gallery?.[0] ||
                  "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=2000&q=80"
                }
                alt="Wellness Estate"
                className="rounded-3xl shadow-xl w-full"
              />
            </div>
            <div className="md:w-1/2">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mb-6">
                <Building2 />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                {content.estate?.title || t.nav.sub.estate}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {content.estate?.heroDesc}
              </p>
              <div className="flex flex-wrap gap-3 mb-6 text-xs text-slate-500">
                {content.estate?.stats?.slice(0, 3).map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-emerald-50 rounded-full border border-emerald-100"
                  >
                    {item.value} · {item.label}
                  </span>
                ))}
              </div>
              <Button variant="primary" onClick={() => navigate("wellness-estate")}>
                {t.common.btnDetail} <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </div>

        {/* 4. Dongshui Tea [NEW] */}
        <div id="tea" className="scroll-mt-28">
          <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
            <div className="md:w-1/2">
              <img
                src={teaProductImage2}
                alt="Tea"
                className="rounded-3xl shadow-xl w-full"
              />
            </div>
            <div className="md:w-1/2">
              <div className="w-12 h-12 bg-stone-100 rounded-xl flex items-center justify-center text-stone-600 mb-6">
                <Leaf />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                {content.tea.title}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {content.tea.intro} {content.tea.historyDesc}
              </p>
              <Button variant="outline" onClick={() => navigate("tea")}>
                {t.common.btnDetail} <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
