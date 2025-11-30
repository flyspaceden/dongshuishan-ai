import { motion } from "framer-motion";
import { Award, Clock, Leaf, Trophy } from "lucide-react";

import { BackButton, SectionHeader } from "../components/ui";
import teaProcessVideo from "../assets/images/核心业务/东水茶/绿茶制作工艺视频生成.mp4";
import teaProductImage from "../assets/images/核心业务/东水茶/东水茶1.jpg";
import teaProductImage2 from "../assets/images/核心业务/东水茶/东水茶2.jpg";

export const DongshuiTeaPage = ({ navigate, t }) => {
  const content = t.pages.tea;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 bg-stone-50 min-h-screen"
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

        {/* Hero Banner */}
        <div className="relative rounded-3xl overflow-hidden h-[450px] mb-16 shadow-2xl group">
          <img
            src={teaProductImage}
            alt="Tea Garden"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-transparent to-transparent flex flex-col justify-end p-12">
            <h3 className="text-4xl font-bold text-white mb-4">
              {content.envTitle}
            </h3>
            <p className="text-stone-200 text-lg max-w-2xl">
              {content.envDesc}
            </p>
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-3xl p-10 shadow-sm border border-stone-200 mb-16 flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-2/3">
            <h3 className="text-2xl font-bold text-stone-800 mb-4">
              {content.intro}
            </h3>
            <div className="h-1 w-20 bg-emerald-500 mb-6"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {content.featList.map((feat, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-800">{feat.label}</h4>
                    <p className="text-sm text-stone-500">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/3">
            <img
              src={teaProductImage2}
              className="rounded-2xl shadow-lg w-full"
              alt="Tea Cup"
            />
          </div>
        </div>

        {/* History & Craft */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div className="bg-stone-100 p-8 rounded-3xl">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="text-amber-600" size={32} />
                <h3 className="text-2xl font-bold text-stone-800">
                  {content.historyTitle}
                </h3>
              </div>
              <p className="text-stone-600 leading-relaxed">
                {content.historyDesc}
              </p>
            </div>
            <div className="bg-emerald-50 p-8 rounded-3xl">
              <div className="flex items-center gap-3 mb-4">
                <Leaf className="text-emerald-600" size={32} />
                <h3 className="text-2xl font-bold text-stone-800">
                  {content.craftTitle}
                </h3>
              </div>
              <p className="text-stone-600 leading-relaxed">
                {content.craftDesc}
              </p>
            </div>
          </div>
          <div className="h-full min-h-[300px] rounded-3xl overflow-hidden relative">
            <video
              src={teaProcessVideo}
              className="w-full h-full object-cover"
              controls
              playsInline
              preload="metadata"
              title="Tea Processing Video"
            />
            <div className="absolute top-4 right-4 bg-amber-50/95 border border-amber-200 backdrop-blur px-4 py-2 rounded-full text-xs font-bold text-amber-800 shadow-xl pointer-events-none flex items-center gap-2">
              <Trophy className="text-amber-500" size={14} />
              <span>{content.honorTitle}</span>
            </div>
          </div>
        </div>

        {/* Honors Grid */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-stone-400 uppercase tracking-widest mb-8">
            {content.honorTitle}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {content.honors.map((honor, i) => (
              <div
                key={i}
                className="border border-stone-200 p-6 rounded-xl hover:border-amber-400 hover:bg-amber-50 transition-all cursor-default"
              >
                <Award className="mx-auto text-amber-500 mb-3" size={32} />
                <div className="font-bold text-stone-700 text-sm">{honor}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

