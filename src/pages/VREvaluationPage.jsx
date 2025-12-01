import { motion } from "framer-motion";
import { Activity, BarChart2, Lock, Mic, ShieldCheck, Sparkles, Workflow } from "lucide-react";

import { BackButton, Button, SectionHeader } from "../components/ui";

export const VREvaluationPage = ({ navigate, t }) => {
  const content = t.pages.vrAssessment;
  const secondaryImage =
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&h=900&q=80";

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
        <div className="relative rounded-3xl overflow-hidden h-[420px] shadow-2xl">
          <img
            src={content.heroImage}
            alt={content.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-transparent flex items-center p-10 md:p-14">
            <div className="max-w-xl text-white space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold tracking-wide border border-white/15">
                <Sparkles size={14} /> {content.sub}
              </div>
              <h3 className="text-4xl font-bold leading-tight whitespace-pre-line">
                {content.heroTitle}
              </h3>
              <p className="text-lg text-slate-200">{content.heroDesc}</p>
              <div className="flex flex-wrap gap-3">
                <Button onClick={() => navigate("contact")}>
                  {content.ctaPrimary}
                </Button>
                <Button variant="white" onClick={() => navigate("contact")}>
                  {content.ctaSecondary}
                </Button>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                {content.quickTags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-white/10 border border-white/15"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Inputs + Visual */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
              <Mic className="text-emerald-500" /> {content.inputsTitle || "输入方式"}
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              {content.inputs.map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="font-bold text-slate-900">{item.title}</div>
                    <div className="text-xs px-2 py-1 rounded-full bg-emerald-50 text-emerald-600">
                      {i === 0 ? "Text" : "Voice"}
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4 text-xs text-slate-500">
                    {item.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="px-2 py-1 bg-slate-50 rounded-lg border border-slate-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="h-full">
            <div className="relative h-full min-h-[260px] rounded-3xl overflow-hidden shadow-xl">
              <img
                src={secondaryImage}
                alt="Evaluation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-cyan-500/10"></div>
            </div>
          </div>
        </div>

        {/* Flow */}
        <div>
          <h4 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Workflow className="text-blue-500" /> {content.flowTitle || "评估流程"}
          </h4>
          <div className="grid md:grid-cols-4 gap-4">
            {content.flow.map((step, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-600 font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <Activity size={18} className="text-emerald-500" />
                </div>
                <div className="font-bold text-slate-900 mb-2">{step.title}</div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech + Results */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
              <Sparkles className="text-purple-500" /> {content.techTitle || "AI 技术支撑"}
            </h4>
            <div className="space-y-3">
              {content.tech.map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="font-bold text-slate-900 mb-1">
                    {item.title}
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
              <BarChart2 className="text-orange-500" /> {content.resultsTitle || "结果呈现"}
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              {content.results.map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="font-bold text-slate-900 mb-1">
                    {item.title}
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
              <div className="md:col-span-2 bg-gradient-to-r from-emerald-600 to-cyan-500 text-white p-6 rounded-2xl shadow-lg flex items-center gap-3">
                <ShieldCheck />
                <div>
                  <div className="font-bold text-lg">{content.safety.title}</div>
                  <div className="text-sm text-emerald-100">
                    {content.safety.points.join(" · ")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Safety */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20"></div>
          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-emerald-200 uppercase text-xs font-bold tracking-widest mb-2">
                <Lock size={16} /> {content.safety.title}
              </div>
              <div className="grid md:grid-cols-3 gap-3 text-sm text-slate-200">
                {content.safety.points.map((p, i) => (
                  <div
                    key={i}
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3"
                  >
                    {p}
                  </div>
                ))}
              </div>
            </div>
            <Button variant="white" onClick={() => navigate("contact")}>
              {content.ctaSecondary}
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
