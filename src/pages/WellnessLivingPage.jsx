import { motion } from "framer-motion";
import { Coffee, Home, Stethoscope, Sun, Wifi } from "lucide-react";

import { BackButton, Button, SectionHeader } from "../components/ui";
import yogaImage from "../assets/images/核心业务/康养旅居/瑜伽.jpg";

export const WellnessLivingPage = ({ navigate, t }) => {
  const content = t.pages.living;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 bg-slate-50 min-h-screen"
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[400px] mb-16">
          <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden relative group">
            <img
              src="https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=2070&auto=format&fit=crop"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt="Main House"
            />
          </div>
          <div className="col-span-2 rounded-2xl overflow-hidden relative group">
            <img
              src="https://images.unsplash.com/photo-1540544660406-6a69dacb2804?q=80&w=2150&auto=format&fit=crop"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt="Tea Food"
            />
          </div>
          <div className="rounded-2xl overflow-hidden relative group">
            <img
              src={yogaImage}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt="Yoga"
            />
          </div>
          <div className="rounded-2xl overflow-hidden bg-slate-200 flex items-center justify-center text-slate-400 text-sm font-bold cursor-pointer hover:bg-slate-300 transition-colors flex-col gap-2">
            <Home size={32} />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-12">
            <section>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                {content.introTitle}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {content.introDesc}
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: <Wifi size={20} />, ...content.features[0] },
                  { icon: <Coffee size={20} />, ...content.features[1] },
                  { icon: <Stethoscope size={20} />, ...content.features[2] },
                  { icon: <Sun size={20} />, ...content.features[3] },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800">{item.title}</h4>
                      <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="bg-slate-900 text-white p-8 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Home size={120} />
            </div>
            <h4 className="font-bold text-xl mb-2">{content.pricingTitle}</h4>
            <p className="text-slate-400 text-sm mb-8">{content.pricingSub}</p>

            <div className="space-y-4 mb-8">
              {content.prices.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center border-b border-white/10 pb-2"
                >
                  <span>{item.name}</span>
                  <span className="font-bold text-emerald-400">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>

            <Button variant="primary" className="w-full justify-center">
              {t.common.btnBookRoom}
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

