import { motion } from "framer-motion";
import { Brain, Cpu, Database, Microscope, ShieldCheck, Sprout } from "lucide-react";

import { SectionHeader } from "../components/ui";

export const TechPage = ({ t }) => {
  const content = t.pages.tech;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 bg-slate-900 text-white min-h-screen"
    >
      <div className="container mx-auto px-6">
        <SectionHeader
          title={content.title}
          subtitle={content.sub}
          light={true}
        />
        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <div className="space-y-8">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <Cpu className="text-cyan-400" size={32} />
                <h3 className="text-xl font-bold">{content.archTitle}</h3>
              </div>
              <p className="text-slate-400 leading-relaxed">
                {content.archDesc}
              </p>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <Brain className="text-purple-400" size={32} />
                <h3 className="text-xl font-bold">{content.algoTitle}</h3>
              </div>
              <p className="text-slate-400 leading-relaxed">
                {content.algoDesc}
              </p>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full"></div>
            <img
              src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop"
              alt="AI Brain"
              className="relative z-10 rounded-2xl border border-white/20 shadow-2xl"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-emerald-900/50 to-slate-900 p-10 rounded-3xl border border-emerald-500/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-20">
              <Database size={120} />
            </div>
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <ShieldCheck className="text-emerald-400" /> {content.chainTitle}
            </h3>
            <p className="text-slate-300 mb-6">{content.chainDesc}</p>
            <div className="bg-black/30 p-4 rounded-lg font-mono text-xs text-emerald-400 border border-emerald-500/20">
              <div>Hash: 0x7f...3a2b</div>
              <div>Block Height: 1402391</div>
              <div>Status: Verified (SGS)</div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-900/50 to-slate-900 p-10 rounded-3xl border border-blue-500/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-20">
              <Sprout size={120} />
            </div>
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Microscope className="text-blue-400" /> {content.bioTitle}
            </h3>
            <p className="text-slate-300 mb-6">{content.bioDesc}</p>
            <ul className="grid grid-cols-2 gap-4 text-sm text-blue-200">
              {content.bioList.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

