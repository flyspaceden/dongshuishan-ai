import { motion } from "framer-motion";
import {
  BadgeCheck,
  CircleDashed,
  HeartHandshake,
  Laugh,
  PlayCircle,
  Sparkles,
  Timer,
} from "lucide-react";

import { BackButton, Button, SectionHeader } from "../components/ui";
import happyImage from "../assets/images/核心业务/心理疗愈/快乐疗法1.jpg";

export const VRHappyTherapyPage = ({ navigate, t }) => {
  const content = t.pages.vrHappy;
  const sideImage = happyImage;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 bg-white min-h-screen"
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
            className="w-full h-[420px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 via-emerald-900/40 to-transparent flex items-center p-10 md:p-14">
            <div className="max-w-2xl text-white space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold tracking-wide border border-white/15">
                <Laugh size={14} /> {content.sub}
              </div>
              <h3 className="text-4xl font-bold leading-tight whitespace-pre-line">
                {content.heroTitle}
              </h3>
              <p className="text-lg text-emerald-100">{content.heroDesc}</p>
              <div className="flex flex-wrap gap-3">
                <Button onClick={() => navigate("contact")}>
                  {content.ctaPrimary}
                </Button>
                <Button variant="white" onClick={() => navigate("contact")}>
                  {content.ctaSecondary}
                </Button>
              </div>
              <div className="flex flex-wrap gap-3 pt-1 text-xs text-emerald-100">
                {content.pillars.map((p, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-white/10 border border-white/10"
                  >
                    {p.title}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Pillars + Visual */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          <div className="lg:col-span-2 grid md:grid-cols-3 gap-4">
            {content.pillars.map((item, i) => (
              <div
                key={i}
                className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="text-emerald-600" size={18} />
                  <div className="font-bold text-slate-900">{item.title}</div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="rounded-3xl overflow-hidden shadow-xl h-full">
            <img
              src={sideImage}
              alt="Joyful Therapy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content Matrix */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <PlayCircle className="text-blue-500" />{" "}
              {content.matrixTitle || "互动内容矩阵"}
            </h4>
            <Button variant="outline" onClick={() => navigate("contact")}>
              {content.ctaPrimary}
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {content.matrix.map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-xs font-bold text-emerald-600 mb-2">
                  {item.tag}
                </div>
                <div className="font-bold text-slate-900 mb-1">{item.title}</div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Plan */}
        <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
          <h4 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <Timer className="text-orange-500" /> {content.planTitle || "方案生成与迭代"}
          </h4>
          <div className="grid md:grid-cols-4 gap-4">
            {content.plan.map((step, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <CircleDashed className="text-emerald-500" size={18} />
                </div>
                <div className="font-bold text-slate-900 mb-1">{step.title}</div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Scenarios + Metrics */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <HeartHandshake className="text-pink-500" />{" "}
              {content.scenarioTitle || "多场景适配"}
            </h4>
            <div className="grid md:grid-cols-3 gap-4">
              {content.scenarios.map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-bold text-slate-900">{item.title}</div>
                    <span className="text-xs px-2 py-1 rounded-full bg-emerald-50 text-emerald-600">
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-slate-900 text-white rounded-3xl p-6 space-y-4 shadow-xl">
            <div className="flex items-center gap-2 text-emerald-200 text-xs font-bold uppercase tracking-widest">
              <BadgeCheck size={16} /> {content.metricsTitle || "成效追踪"}
            </div>
            <div className="space-y-3">
              {content.metrics.map((m, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between bg-white/5 border border-white/10 rounded-2xl px-4 py-3"
                >
                  <div>
                    <div className="text-sm text-slate-200">{m.label}</div>
                    <div className="text-xs text-emerald-100">{m.desc}</div>
                  </div>
                  <div className="text-2xl font-bold text-white">{m.value}</div>
                </div>
              ))}
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
