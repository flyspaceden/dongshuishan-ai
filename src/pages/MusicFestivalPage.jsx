import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarRange,
  Camera,
  MapPin,
  Music,
  Palette,
  PartyPopper,
  Sparkles,
  Star,
  Ticket,
  Waves,
} from "lucide-react";

import { BackButton, Button, SectionHeader } from "../components/ui";

export const MusicFestivalPage = ({ navigate, t }) => {
  const content = t.pages.festival;
  const highlightIcons = [
    <Sparkles size={20} key="sparkles" />,
    <Music size={20} key="music" />,
    <Waves size={20} key="waves" />,
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 bg-slate-950 text-white min-h-screen"
    >
      <div className="container mx-auto px-6">
        <BackButton
          onClick={() => navigate("services")}
          text={t.common.btnBack}
        />

        {/* Hero */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-900 via-slate-900 to-emerald-900 p-10 md:p-14 mb-12 shadow-2xl border border-white/10">
          <img
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop"
            alt={content.title}
            className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/50 to-emerald-900/60"></div>
          <div className="relative z-10 max-w-3xl">
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold tracking-widest">
                {content.sub}
              </span>
              <span className="px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-300/40 text-emerald-100 text-xs font-semibold">
                {content.heroNote}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-3">
              {content.title}
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-emerald-200 mb-4">
              {content.heroTitle}
            </h2>
            <p className="text-lg text-slate-200 leading-relaxed mb-6">
              {content.heroDesc}
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              <div className="px-4 py-2 rounded-full bg-white/10 border border-white/20 flex items-center gap-2">
                <CalendarRange size={18} />
                {content.date}
              </div>
              <div className="px-4 py-2 rounded-full bg-white/10 border border-white/20 flex items-center gap-2">
                <MapPin size={18} />
                {content.location}
              </div>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {content.highlights.map((item, i) => (
            <div
              key={item.label}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-xl hover:border-emerald-300/40 transition-all backdrop-blur-sm"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-emerald-200 border border-white/10">
                  {highlightIcons[i % highlightIcons.length]}
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-300">
                    {item.label}
                  </p>
                  <h4 className="text-xl font-bold text-white">{item.value}</h4>
                </div>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Fashion & Music */}
        <div className="grid lg:grid-cols-2 gap-10 mb-14">
          <div className="bg-gradient-to-br from-emerald-900/60 to-slate-900 border border-emerald-500/20 p-8 rounded-3xl shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <Palette className="text-emerald-300" />
              <h3 className="text-2xl font-bold">{content.fashionTitle}</h3>
            </div>
            <p className="text-slate-200 leading-relaxed">
              {content.fashionDesc}
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-900/60 to-slate-900 border border-purple-500/30 p-8 rounded-3xl shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <Music className="text-purple-200" />
              <h3 className="text-2xl font-bold">{content.musicTitle}</h3>
            </div>
            <p className="text-slate-200 leading-relaxed">
              {content.musicDesc}
            </p>
          </div>
        </div>

        {/* Scene & Stages */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <Star className="text-amber-300" />
            <h3 className="text-2xl font-bold">{content.sceneTitle}</h3>
          </div>
          <p className="text-slate-200 leading-relaxed mb-8">
            {content.sceneDesc}
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {content.stages.map((stage, i) => (
              <div
                key={stage.name}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-3 hover:border-emerald-300/40 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="text-xs font-bold text-emerald-200 uppercase tracking-widest">
                    {stage.vibe}
                  </div>
                  <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] text-slate-200">
                    {i + 1}/3
                  </div>
                </div>
                <h4 className="text-lg font-bold text-white">{stage.name}</h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {stage.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {content.experiences.map((exp) => (
            <div
              key={exp.title}
              className="bg-white text-slate-900 rounded-2xl p-6 shadow-lg border border-emerald-50"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                  {exp.tag}
                </span>
                <PartyPopper className="text-emerald-500" size={18} />
              </div>
              <h4 className="text-lg font-bold mb-2">{exp.title}</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                {exp.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Closing CTA */}
        <div className="bg-white rounded-3xl p-10 shadow-2xl border border-emerald-100">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                {content.ctaTitle}
              </h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                {content.ctaDesc}
              </p>
              <p className="text-emerald-700 font-semibold">
                {content.closing}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 justify-end">
              <Button
                variant="primary"
                className="justify-center"
                onClick={() => navigate("contact")}
              >
                <Ticket size={18} />
                {content.ctaBtnPrimary}
              </Button>
              <Button
                variant="outline"
                className="justify-center"
                onClick={() => navigate("contact")}
              >
                <Camera size={18} />
                {content.ctaBtnSecondary}
              </Button>
              <Button
                variant="ghost"
                className="text-emerald-700"
                onClick={() => navigate("services")}
              >
                {t.common.btnBack} <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

