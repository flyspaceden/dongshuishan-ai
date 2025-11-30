import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Brain } from "lucide-react";

import { Navbar } from "./components/layout/Navbar.jsx";
import { Footer } from "./components/layout/Footer.jsx";
import { DATA } from "./data/content.js";
import { AboutPage } from "./pages/AboutPage.jsx";
import { AlliancePage } from "./pages/AlliancePage.jsx";
import { ContactPage } from "./pages/ContactPage.jsx";
import { DongshuiTeaPage } from "./pages/DongshuiTeaPage.jsx";
import { EcologyPage } from "./pages/EcologyPage.jsx";
import { ExpertsPage } from "./pages/ExpertsPage.jsx";
import { GlobalStudyPage } from "./pages/GlobalStudyPage.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { MusicFestivalPage } from "./pages/MusicFestivalPage.jsx";
import { ServicesOverviewPage } from "./pages/ServicesOverviewPage.jsx";
import { TechPage } from "./pages/TechPage.jsx";
import { VRHealingPage } from "./pages/VRHealingPage.jsx";
import { WellnessLivingPage } from "./pages/WellnessLivingPage.jsx";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [lang, setLang] = useState("zh"); // 'zh' or 'en'
  const t = DATA[lang];

  const navigate = (pageId) => {
    setCurrentPage(pageId);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage navigate={navigate} t={t} />;
      case "about":
        return <AboutPage navigate={navigate} t={t} />;
      case "alliance":
        return <AlliancePage navigate={navigate} t={t} />;
      case "experts":
        return <ExpertsPage t={t} />;
      case "ecology":
        return <EcologyPage t={t} />;
      case "technology":
        return <TechPage t={t} />;
      case "services":
        return <ServicesOverviewPage navigate={navigate} t={t} />;
      case "music-festival":
        return <MusicFestivalPage navigate={navigate} t={t} />;
      case "vr-healing":
        return <VRHealingPage navigate={navigate} t={t} />;
      case "global-study":
        return <GlobalStudyPage navigate={navigate} t={t} />;
      case "wellness-living":
        return <WellnessLivingPage navigate={navigate} t={t} />;
      case "tea":
        return <DongshuiTeaPage navigate={navigate} t={t} />;
      case "contact":
        return <ContactPage t={t} />;
      default:
        return <HomePage navigate={navigate} t={t} />;
    }
  };

  return (
    <div className="bg-white min-h-screen text-slate-800 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar
        currentPage={currentPage}
        navigate={navigate}
        lang={lang}
        setLang={setLang}
        t={t}
      />
      <main>
        <AnimatePresence mode="wait">{renderPage()}</AnimatePresence>
      </main>
      <Footer navigate={navigate} t={t} />

      {/* AI Assistant Floating Button */}
      <div className="fixed bottom-8 right-8 z-40 group">
        <button className="w-14 h-14 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full shadow-lg shadow-emerald-200 text-white flex items-center justify-center hover:scale-110 transition-transform cursor-pointer relative z-10">
          <Brain size={24} />
        </button>
        <div className="absolute bottom-2 right-16 bg-white px-4 py-2 rounded-lg shadow-xl border border-slate-100 text-xs font-bold text-slate-700 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity origin-right duration-300">
          {t.common.aiAssistant}
        </div>
        <div className="absolute inset-0 bg-emerald-400 rounded-full opacity-30 animate-ping z-0"></div>
      </div>
    </div>
  );
};

export default App;

