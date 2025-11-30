import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  Brain,
  Database,
  Globe,
  Mountain,
  Play,
  Sprout,
  Users,
} from "lucide-react";

import aiHistoryVideo from "../assets/images/首页/人工智能：从历史看未来.mp4";
import aiVideo from "../assets/images/首页/ai视频.mp4";
import { Button, FeatureCard, SectionHeader } from "../components/ui";

export const HomePage = ({ navigate, t }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [historyRate, setHistoryRate] = useState(1);
  const [aiRate, setAiRate] = useState(1);
  const historyVideoRef = useRef(null);
  const aiVideoRef = useRef(null);
  const carouselData = t.carousel;
  const aiColumn = t.pages.home.aiColumn;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselData.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [carouselData.length]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Hero Carousel */}
      <section className="relative h-[92vh] overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          {carouselData.map((slide, index) => (
            <motion.div
              key={slide.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === currentSlide ? 1 : 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0"
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover opacity-70 transform scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/30 to-transparent" />
            </motion.div>
          ))}
        </div>

        <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center text-white">
          <div className="max-w-4xl mt-20">
            <motion.div
              key={`text-${currentSlide}`}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-emerald-300 text-sm font-bold mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                {carouselData[currentSlide].subtitle}
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
                {carouselData[currentSlide].title}
              </h1>
              <p className="text-xl text-slate-200 mb-10 font-light leading-relaxed max-w-2xl">
                {carouselData[currentSlide].desc}
              </p>
              <div className="flex gap-4">
                <Button
                  variant="primary"
                  onClick={() => navigate(carouselData[currentSlide].link)}
                >
                  {t.common.btnDetail} <ArrowRight size={18} />
                </Button>
                <Button variant="white" onClick={() => navigate("contact")}>
                  <Play size={18} /> {t.common.btnReserve}
                </Button>
              </div>
            </motion.div>
          </div>

          <div className="absolute bottom-12 right-6 flex gap-3">
            {carouselData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  idx === currentSlide
                    ? "bg-emerald-400 w-12"
                    : "bg-white/30 w-4 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Dashboard */}
      <section className="relative z-20 -mt-24 container mx-auto px-6 mb-24">
        <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-100">
            {[
              {
                icon: <Mountain className="text-emerald-500" />,
                ...t.pages.home.stats[0],
              },
              {
                icon: <Activity className="text-blue-500" />,
                ...t.pages.home.stats[1],
              },
              {
                icon: <Users className="text-orange-500" />,
                ...t.pages.home.stats[2],
              },
              {
                icon: <Database className="text-purple-500" />,
                ...t.pages.home.stats[3],
              },
            ].map((stat, i) => (
              <div key={i} className="pl-8 first:pl-0">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-slate-50 rounded-lg">{stat.icon}</div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    {t.common.liveData}
                  </span>
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-slate-700">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-400 mt-1">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 container mx-auto px-6 text-center">
        <SectionHeader
          title={t.pages.home.missionTitle}
          subtitle={t.pages.home.missionSub}
        />
        <p className="text-slate-600 max-w-3xl mx-auto text-lg leading-relaxed mb-12">
          {t.pages.home.missionDesc}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Brain size={32} />}
            title={t.nav.sub.vr}
            desc={t.carousel[2].desc}
            onClick={() => navigate("vr-healing")}
            btnText={t.common.btnDetail}
          />
          <FeatureCard
            icon={<Sprout size={32} />}
            title={t.nav.technology}
            desc={t.carousel[1].desc}
            onClick={() => navigate("technology")}
            btnText={t.common.btnDetail}
          />
          <FeatureCard
            icon={<Globe size={32} />}
            title={t.nav.sub.study}
            desc={t.pages.study.facDesc}
            onClick={() => navigate("global-study")}
            btnText={t.common.btnDetail}
          />
        </div>
      </section>

      {/* AI Popular Science */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <SectionHeader title={aiColumn.title} subtitle={aiColumn.sub} />
          <p className="text-slate-600 leading-relaxed max-w-3xl mb-10">
            {aiColumn.desc}
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-slate-200 shadow-sm overflow-hidden bg-white">
              <div className="px-6 py-4 flex items-center justify-between border-b border-slate-100">
                <div>
                  <h4 className="text-lg font-bold text-slate-900">
                    {aiColumn.pptTitle}
                  </h4>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  {t.common.playbackLabel}：
                  {[0.5, 1, 1.25, 1.5, 2].map((rate) => (
                    <button
                      key={rate}
                      onClick={() => {
                        setHistoryRate(rate);
                        if (historyVideoRef.current) {
                          historyVideoRef.current.playbackRate = rate;
                        }
                      }}
                      className={`px-2 py-1 rounded border text-[11px] transition-colors ${
                        historyRate === rate
                          ? "border-emerald-500 text-emerald-600 bg-emerald-50"
                          : "border-slate-200 text-slate-600 hover:border-emerald-300"
                      }`}
                      type="button"
                    >
                      {rate}x
                    </button>
                  ))}
                </div>
              </div>
              <div className="relative bg-black aspect-video">
                <video
                  ref={historyVideoRef}
                  src={aiHistoryVideo}
                  className="absolute inset-0 w-full h-full object-contain"
                  controls
                  playsInline
                  controlsList="nodownload"
                  onLoadedMetadata={() => {
                    if (historyVideoRef.current) {
                      historyVideoRef.current.playbackRate = historyRate;
                    }
                  }}
                />
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 shadow-sm overflow-hidden bg-white">
              <div className="px-6 py-4 flex items-center justify-between border-b border-slate-100">
                <div>
                  <h4 className="text-lg font-bold text-slate-900">
                    AI 技术科普视频
                  </h4>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  {t.common.playbackLabel}：
                  {[0.5, 1, 1.25, 1.5, 2].map((rate) => (
                    <button
                      key={rate}
                      onClick={() => {
                        setAiRate(rate);
                        if (aiVideoRef.current) {
                          aiVideoRef.current.playbackRate = rate;
                        }
                      }}
                      className={`px-2 py-1 rounded border text-[11px] transition-colors ${
                        aiRate === rate
                          ? "border-emerald-500 text-emerald-600 bg-emerald-50"
                          : "border-slate-200 text-slate-600 hover:border-emerald-300"
                      }`}
                      type="button"
                    >
                      {rate}x
                    </button>
                  ))}
                </div>
              </div>
              <div className="relative bg-black aspect-video">
                <video
                  ref={aiVideoRef}
                  src={aiVideo}
                  className="absolute inset-0 w-full h-full object-contain"
                  controls
                  playsInline
                  controlsList="nodownload"
                  onLoadedMetadata={() => {
                    if (aiVideoRef.current) {
                      aiVideoRef.current.playbackRate = aiRate;
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};
