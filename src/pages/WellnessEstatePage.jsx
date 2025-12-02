import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  Building2,
  Home,
  Leaf,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from "lucide-react";

import { BackButton, Button, SectionHeader } from "../components/ui";

export const WellnessEstatePage = ({ navigate, t }) => {
  const content = t.pages.estate;
  const galleryImages = content.gallery || [];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 bg-slate-50 min-h-screen"
    >
      <div className="container mx-auto px-6 space-y-14">
        <BackButton onClick={() => navigate("wellness-living")} text={t.nav.sub.living} />

        <SectionHeader title={content.title} subtitle={content.sub} align="left" />

        {/* Hero */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-700 via-emerald-600 to-cyan-500 text-white p-10 shadow-2xl">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_left,#fff,transparent_30%)]"></div>
          <div className="grid lg:grid-cols-3 gap-10 items-center relative z-10">
            <div className="lg:col-span-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs uppercase tracking-widest">
                <Building2 size={16} />
                {content.heroTitle}
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">{content.heroTitle}</h2>
              <p className="text-white/80 text-lg leading-relaxed">{content.heroDesc}</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {content.stats.map((item, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl bg-white/10 border border-white/20 p-4 backdrop-blur"
                  >
                    <div className="text-sm text-white/70">{item.label}</div>
                    <div className="text-2xl font-bold mt-1">{item.value}</div>
                    <div className="text-xs text-white/70">{item.desc}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <Button variant="primary" onClick={() => navigate("contact")} className="gap-2">
                  {t.common.btnReserve} <ArrowRight size={16} />
                </Button>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={
                    galleryImages[0] ||
                    "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=2000&q=80"
                  }
                  alt="Estate main"
                  className="w-full h-56 object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {galleryImages.slice(1, 3).map((src, idx) => (
                  <div key={idx} className="rounded-2xl overflow-hidden shadow-xl">
                    <img src={src} alt={`Estate ${idx}`} className="w-full h-28 object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Products */}
        <section className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
          <div className="flex items-center gap-3 mb-6">
            <Home className="text-emerald-500" />
            <div>
              <h3 className="text-2xl font-bold text-slate-900">{content.productsTitle}</h3>
              <p className="text-slate-500 text-sm">{content.heroDesc}</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {content.products.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-100 bg-slate-50/70 p-6 hover:-translate-y-1 hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="font-bold text-lg text-slate-900">{item.name}</div>
                  <span className="text-xs px-3 py-1 rounded-full bg-emerald-100 text-emerald-700">
                    {item.area}
                  </span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{item.desc}</p>
                <div className="space-y-2">
                  {item.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-700">
                      <ShieldCheck size={16} className="text-emerald-500" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Smart Community */}
        <section className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold">
              <Sparkles size={14} />
              {content.smartTitle}
            </div>
            <h3 className="text-3xl font-bold text-slate-900">{content.smartTitle}</h3>
            <p className="text-slate-600 leading-relaxed">{content.heroDesc}</p>
            <div className="space-y-4">
              {content.smartFeatures.map((item, idx) => {
                const icons = [
                  <Activity key="a" size={18} />,
                  <Sparkles key="b" size={18} />,
                  <Leaf key="c" size={18} />,
                ];
                return (
                  <div
                    key={idx}
                    className="rounded-2xl bg-white border border-slate-100 p-4 shadow-sm flex gap-3"
                  >
                    <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                      {icons[idx] || <Sparkles size={18} />}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">{item.title}</div>
                      <p className="text-sm text-slate-600 mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Stethoscope className="text-emerald-500" />
              <div>
                <div className="text-xs uppercase tracking-widest text-slate-400">
                  {content.servicesTitle}
                </div>
                <div className="text-lg font-bold text-slate-900">{content.servicesTitle}</div>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {content.services.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-100 bg-slate-50/60 p-4 hover:border-emerald-200 transition-colors"
                >
                  <div className="font-semibold text-slate-900 mb-1">{item.title}</div>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Leaf className="text-emerald-500" />
            <div>
              <h3 className="text-2xl font-bold text-slate-900">{content.galleryTitle}</h3>
              <p className="text-slate-500 text-sm">
                {content.heroDesc || "Eco-living scenes around the tea garden."}
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {galleryImages.map((src, idx) => (
              <div
                key={idx}
                className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <img src={src} alt={`Gallery ${idx}`} className="w-full h-52 object-cover" />
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-3xl bg-gradient-to-r from-emerald-600 to-cyan-500 text-white p-8 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-xs uppercase tracking-widest text-white/70">
              {content.sub}
            </div>
            <h4 className="text-3xl font-bold mt-2">{content.ctaTitle}</h4>
            <p className="text-white/80 mt-2 max-w-xl">{content.ctaDesc}</p>
          </div>
          <div className="flex gap-3">
            <Button variant="primary" onClick={() => navigate("contact")} className="gap-2">
              {t.common.btnSubmit} <ArrowRight size={16} />
            </Button>
            <Button variant="outline" onClick={() => navigate("wellness-living")}>
              {t.nav.sub.living}
            </Button>
          </div>
        </section>
      </div>
    </motion.div>
  );
};
