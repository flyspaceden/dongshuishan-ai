import { motion } from "framer-motion";

import teaGardenImage from "../assets/images/生态基地/生态基地1.jpg";
import { Button, SectionHeader } from "../components/ui";

export const EcologyPage = ({ t }) => {
  const content = t.pages.ecology;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 min-h-screen"
    >
      <div className="container mx-auto px-6">
        <SectionHeader title={content.title} subtitle={content.sub} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[500px] mb-16">
          <div className="md:col-span-2 relative rounded-2xl overflow-hidden group cursor-pointer">
            <img
              src={teaGardenImage}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              alt="Tea"
            />
            <div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-black/80 to-transparent w-full">
              <h3 className="text-2xl font-bold text-white">
                {content.teaGarden.title}
              </h3>
              <p className="text-emerald-300">{content.teaGarden.desc}</p>
            </div>
          </div>
          <div className="grid grid-rows-2 gap-4">
            <div className="relative rounded-2xl overflow-hidden group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?q=80&w=2070&auto=format&fit=crop"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Water"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white font-bold text-lg">
                  {content.waterfall}
                </span>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden group cursor-pointer bg-emerald-900">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <h4 className="text-white font-bold text-xl mb-2">
                  {content.papermaking.title}
                </h4>
                <p className="text-emerald-200 text-sm">
                  {content.papermaking.desc}
                </p>
                <Button
                  variant="outline"
                  className="mt-4 border-white text-white hover:bg-white hover:text-emerald-900"
                >
                  {content.papermaking.btn}
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              {content.heritage}
            </h3>
            <p className="text-slate-600 leading-loose mb-6">{content.desc}</p>
            <ul className="space-y-4">
              {content.features.map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-100 p-8 rounded-3xl">
            <h4 className="font-bold text-slate-900 mb-6">
              {t.common.liveData}
            </h4>
            <div className="space-y-6">
              {content.monitor.map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-slate-600">{item.label}</span>
                    <span className="font-bold text-emerald-600">
                      {item.val}
                    </span>
                  </div>
                  <div className="h-2 bg-slate-200 rounded-full">
                    <div
                      className="h-full bg-emerald-500 rounded-full"
                      style={{ width: item.pct }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

