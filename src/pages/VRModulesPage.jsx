import { motion } from "framer-motion";
import {
  BarChart3,
  Building,
  CheckCircle2,
  Lock,
  Network,
  ShieldCheck,
  Workflow,
} from "lucide-react";

import { BackButton, Button, SectionHeader } from "../components/ui";

export const VRModulesPage = ({ navigate, t }) => {
  const content = t.pages.vrModules;
  const visualImage =
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2069&auto=format&fit=crop";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 bg-slate-50 min-h-screen"
    >
      <div className="container mx-auto px-6 space-y-12">
        <BackButton
          onClick={() => navigate("vr-healing")}
          text={t.nav.sub.vr}
        />
        <SectionHeader
          title={content.title}
          subtitle={content.sub}
          align="left"
        />

        {/* Hero */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <img
            src={content.heroImage}
            alt={content.title}
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-transparent flex items-center p-10 md:p-14">
            <div className="max-w-2xl text-white space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold tracking-wide border border-white/15">
                <Network size={14} /> {content.sub}
              </div>
              <h3 className="text-4xl font-bold leading-tight whitespace-pre-line">
                {content.heroTitle}
              </h3>
              <p className="text-lg text-slate-200">{content.heroDesc}</p>
              <div className="flex flex-wrap gap-3">
                <Button onClick={() => navigate("contact")}>
                  {t.common.btnDetail}
                </Button>
                <Button variant="white" onClick={() => navigate("contact")}>
                  {t.common.btnSubmit}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Flow + Visual */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          <div className="lg:col-span-2">
            <h4 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Workflow className="text-emerald-500" /> {content.flowTitle || "一体化闭环"}
            </h4>
            <div className="grid md:grid-cols-5 gap-3">
              {content.flow.map((step, i) => (
                <div
                  key={i}
                  className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                    <CheckCircle2 className="text-emerald-500" size={18} />
                  </div>
                  <div className="font-bold text-slate-900 mb-1">{step.title}</div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-xl h-full">
            <img
              src={visualImage}
              alt="System Visual"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Modules */}
        <div>
          <h4 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Building className="text-blue-500" /> {content.modulesTitle || "核心模块"}
          </h4>
          <div className="grid md:grid-cols-3 gap-4">
            {content.modules.map((mod, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="font-bold text-slate-900 mb-2">{mod.name}</div>
                <ul className="text-sm text-slate-600 space-y-2 mb-3">
                  {mod.features.map((f, j) => (
                    <li key={j}>• {f}</li>
                  ))}
                </ul>
                <div className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full inline-flex">
                  {mod.tech}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Privacy */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20"></div>
          <div className="relative z-10 space-y-4">
            <div className="flex items-center gap-2 text-emerald-200 text-xs font-bold uppercase tracking-widest">
              <ShieldCheck size={16} /> {content.privacy.title}
            </div>
            <p className="text-slate-200 max-w-3xl">{content.privacy.desc}</p>
            <div className="grid md:grid-cols-2 gap-3 text-sm text-slate-100">
              {content.privacy.points.map((p, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3 flex items-start gap-2"
                >
                  <Lock size={16} className="mt-0.5 text-emerald-300" />
                  <span>{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cases */}
        <div>
          <h4 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <BarChart3 className="text-orange-500" /> {content.caseTitle || "应用成效"}
          </h4>
          <div className="grid md:grid-cols-3 gap-4">
            {content.cases.map((c, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="font-bold text-slate-900 mb-2">{c.title}</div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {c.result}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
