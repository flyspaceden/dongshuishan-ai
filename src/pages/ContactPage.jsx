import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

import { Button, SectionHeader } from "../components/ui";

export const ContactPage = ({ t }) => {
  const content = t.common.contact;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 container mx-auto px-6 min-h-screen"
    >
      <SectionHeader title={t.nav.contact} subtitle={content.sub} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-slate-900 text-white rounded-3xl p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-12 opacity-10">
            <MapPin size={200} />
          </div>
          <h3 className="text-2xl font-bold mb-8">
            {t.common.footer.companyName}
          </h3>
          <div className="space-y-8 relative z-10">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/10 rounded-lg text-emerald-400">
                <MapPin />
              </div>
              <div>
                <p className="text-slate-400 text-sm mb-1">{t.nav.contact}</p>
                <p className="font-medium">{content.address}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/10 rounded-lg text-blue-400">
                <Phone />
              </div>
              <div>
                <p className="text-slate-400 text-sm mb-1">
                  {t.common.footer.telLabel}
                </p>
                <p className="font-medium">{content.phone}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/10 rounded-lg text-orange-400">
                <Mail />
              </div>
              <div>
                <p className="text-slate-400 text-sm mb-1">
                  {t.common.footer.emailLabel}
                </p>
                <p className="font-medium">{content.email}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-10 rounded-3xl shadow-lg border border-slate-100">
          <h3 className="text-xl font-bold mb-6 text-slate-900">
            {t.common.btnSubmit}
          </h3>
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  {content.formName}
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all bg-slate-50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  {content.formPhone}
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all bg-slate-50"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                {content.formType}
              </label>
              <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all bg-slate-50">
                {content.types.map((type, i) => (
                  <option key={i}>{type}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                {content.formDesc}
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all bg-slate-50"
              ></textarea>
            </div>
            <Button
              variant="primary"
              className="w-full justify-center font-bold text-lg"
            >
              {t.common.btnSubmit}
            </Button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

