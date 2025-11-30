import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Award, Users, X, ZoomIn } from "lucide-react";

import { SectionHeader } from "../components/ui";

export const ExpertsPage = ({ t }) => {
  const [lightboxImage, setLightboxImage] = useState(null);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="pt-32 pb-20 bg-slate-50 min-h-screen"
      >
        <div className="container mx-auto px-6">
          <SectionHeader title={t.nav.experts} subtitle={t.nav.expertsSub} />
          <div className="space-y-20">
            {t.experts.map((group, groupIndex) => (
              <div key={groupIndex}>
                <div className="flex items-center justify-center gap-4 mb-8">
                  <div className="h-8 w-1.5 bg-emerald-500 rounded-full"></div>
                  <h3 className="text-2xl font-bold text-slate-800">
                    {group.title}
                  </h3>
                </div>

                {/* 仅首席顾问与院士用特殊展示，其余都用标准卡片 */}
                {group.featured ? (
                  <div className="flex justify-center">
                    {group.members.map((expert, i) => (
                      <div
                        key={i}
                        className="bg-gradient-to-br from-amber-50 via-white to-emerald-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-amber-200 hover:border-amber-300 group max-w-xl w-full relative overflow-hidden"
                      >
                        {/* 装饰背景 */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-100 to-transparent rounded-full -translate-y-1/2 translate-x-1/2 opacity-50"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-emerald-100 to-transparent rounded-full translate-y-1/2 -translate-x-1/2 opacity-50"></div>

                        {/* 院士徽章 */}
                        <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-3 py-1.5 rounded-full shadow-lg">
                          <Award size={14} />
                          <span className="text-xs font-bold">院士</span>
                        </div>

                        <div className="relative z-10 flex flex-col items-center text-center">
                          {/* 大头像 */}
                          <div className="w-24 h-24 rounded-full bg-slate-100 overflow-hidden border-4 border-amber-200 shadow-xl mb-4 group-hover:border-amber-300 transition-colors">
                            {expert.image ? (
                              <img
                                src={expert.image}
                                alt={expert.name}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center text-slate-400">
                                <Users size={44} />
                              </div>
                            )}
                          </div>

                          <div className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold mb-3">
                            {expert.title}
                          </div>

                          <h4 className="text-xl font-bold text-slate-900 mb-1">
                            {expert.name}
                          </h4>
                          <p className="text-emerald-600 text-sm font-medium mb-4">
                            {expert.org}
                          </p>

                          <div className="h-px w-20 bg-amber-200 mb-4"></div>

                          <p className="text-slate-600 text-sm leading-relaxed mb-5 max-w-md">
                            {expert.desc}
                          </p>

                          <div className="flex flex-wrap justify-center gap-2">
                            {expert.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1 bg-white text-slate-600 text-xs rounded-full border border-amber-200 shadow-sm"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  /* 多人普通展示 */
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {group.members.map((expert, i) => (
                      <div
                        key={i}
                        className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-emerald-200 group"
                      >
                        <div className="flex justify-between items-start mb-6">
                          <div className="w-20 h-20 rounded-full bg-slate-100 overflow-hidden border-2 border-white shadow-md group-hover:border-emerald-200 transition-colors">
                            {expert.image ? (
                              <img
                                src={expert.image}
                                alt={expert.name}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center text-slate-400">
                                <Users size={40} />
                              </div>
                            )}
                          </div>
                          <div className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide text-right max-w-[50%]">
                            {expert.title}
                          </div>
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 mb-1">
                          {expert.name}
                        </h4>
                        <p className="text-sm text-emerald-600 font-medium mb-4">
                          {expert.org}
                        </p>
                        <div className="h-px w-full bg-slate-100 mb-4"></div>
                        <p className="text-slate-600 text-sm leading-relaxed mb-6 min-h-[80px]">
                          {expert.desc}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {expert.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-1 bg-slate-50 text-slate-500 text-xs rounded-md border border-slate-100"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        {expert.honorImage && (
                          <div className="mt-6 pt-6 border-t border-slate-100">
                            <div
                              className="relative rounded-xl overflow-hidden cursor-pointer group/honor"
                              onClick={() =>
                                setLightboxImage({
                                  src: expert.honorImage,
                                  caption: expert.honorCaption,
                                })
                              }
                            >
                              <img
                                src={expert.honorImage}
                                alt={expert.honorCaption}
                                className="w-full h-auto object-cover rounded-xl transition-transform duration-500 group-hover/honor:scale-105"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                              <div className="absolute bottom-0 left-0 right-0 p-3 flex items-center justify-between">
                                <p className="text-white text-xs font-medium drop-shadow-lg">
                                  {expert.honorCaption}
                                </p>
                                <span className="text-white/80 text-xs flex items-center gap-1">
                                  <ZoomIn size={14} /> 点击放大
                                </span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Image Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 cursor-pointer"
            onClick={() => setLightboxImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-6xl max-h-[90vh] cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxImage.src}
                alt={lightboxImage.caption}
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <p className="text-white text-lg font-medium">
                  {lightboxImage.caption}
                </p>
              </div>
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute -top-4 -right-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-slate-600 hover:text-slate-900 hover:scale-110 transition-all"
              >
                <X size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

