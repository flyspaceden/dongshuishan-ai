import { motion } from "framer-motion";
import { Building2, Coffee, Home, Stethoscope, Sun, Wifi } from "lucide-react";

import { BackButton, Button, SectionHeader } from "../components/ui";
import yogaImage from "../assets/images/核心业务/康养旅居/瑜伽.jpg";
import livingImage from "../assets/images/核心业务/康养旅居/康养旅居1.jpg";

export const WellnessLivingPage = ({ navigate, t }) => {
  const content = t.pages.living;
  const estate = t.pages.estate;
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
          <div className="rounded-2xl overflow-hidden relative group">
            <img
              src={livingImage}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt="Wellness Residence"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-12">
            <section className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm flex flex-col md:flex-row gap-6 items-center">
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                <Building2 size={28} />
              </div>
              <div className="flex-1 space-y-2">
                <div className="text-xs uppercase tracking-widest text-slate-400 font-bold">
                  {estate.sub}
                </div>
                <h3 className="text-2xl font-bold text-slate-900">{estate.title}</h3>
                <p className="text-slate-600 leading-relaxed">{estate.heroDesc}</p>
                <div className="flex flex-wrap gap-2 text-xs text-emerald-700">
                  {estate.stats?.slice(0, 3).map((s, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100"
                    >
                      {s.value} · {s.label}
                    </span>
                  ))}
                </div>
              </div>
              <Button variant="primary" className="flex-shrink-0" onClick={() => navigate("wellness-estate")}>
                {t.common.btnDetail}
              </Button>
            </section>
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
