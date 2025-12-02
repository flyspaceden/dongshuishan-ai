import { useEffect, useState } from "react";
import { Brain, ChevronDown, Home, Menu, ShieldCheck, Smile, Sparkles, X } from "lucide-react";

import { Button } from "../ui";

export const Navbar = ({ currentPage, navigate, lang, setLang, t }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [hoverSub, setHoverSub] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
        setMobileDropdown(null);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileDropdown(null);
  }, [currentPage]);

  const navItems = [
    { id: "home", label: t.nav.home },
    {
      id: "about",
      label: t.nav.about,
      hasDropdown: true,
      dropdownType: "about",
      subItems: [
        { id: "about", label: t.nav.aboutSub },
        { id: "alliance", label: t.nav.alliance },
      ],
    },
    { id: "ecology", label: t.nav.ecology },
    { id: "technology", label: t.nav.technology },
    {
      id: "services",
      label: t.nav.services,
      hasDropdown: true,
      dropdownType: "services",
      subItems: [
        { id: "music-festival", label: t.nav.sub.festival },
        { id: "vr-healing", label: t.nav.sub.vr },
        { id: "global-study", label: t.nav.sub.study },
        { id: "wellness-living", label: t.nav.sub.living },
        { id: "tea", label: t.nav.sub.tea },
      ],
    },
    { id: "experts", label: t.nav.experts },
    { id: "contact", label: t.nav.contact },
  ];
  const vrSubItems = [
    {
      id: "vr-assessment",
      label: t.nav.sub.vrAssessment,
      desc: t.pages.vrAssessment.heroDesc,
      tag: t.pages.vrAssessment.sub,
      icon: <Sparkles size={16} className="text-emerald-500" />,
    },
    {
      id: "vr-happy",
      label: t.nav.sub.vrHappy,
      desc: t.pages.vrHappy.heroDesc,
      tag: t.pages.vrHappy.sub,
      icon: <Smile size={16} className="text-orange-500" />,
    },
    {
      id: "vr-modules",
      label: t.nav.sub.vrModules,
      desc: t.pages.vrModules.heroDesc,
      tag: t.pages.vrModules.sub,
      icon: <ShieldCheck size={16} className="text-blue-500" />,
    },
  ];
  const livingSubItems = [
    {
      id: "wellness-estate",
      label: t.nav.sub.estate,
      desc: t.pages.estate.heroDesc,
      tag: t.pages.estate.sub,
      icon: <Home size={16} className="text-emerald-500" />,
    },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || (currentPage !== "home" && currentPage !== "technology")
          ? "bg-white/90 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between gap-4">
          <div
            className="flex items-center gap-3 cursor-pointer group flex-shrink-0"
            onClick={() => navigate("home")}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform">
              <Brain size={20} />
            </div>
            <div className="flex flex-col">
              <span
                className={`font-bold text-lg leading-none tracking-wide ${
                  isScrolled ||
                  (currentPage !== "home" && currentPage !== "technology")
                    ? "text-slate-900"
                    : "text-white"
                }`}
              >
                东水山
              </span>
              <span
                className={`text-[10px] uppercase tracking-widest mt-1 ${
                  isScrolled ||
                  (currentPage !== "home" && currentPage !== "technology")
                    ? "text-slate-500"
                    : "text-emerald-200"
                }`}
              >
                AI Wellness Valley
              </span>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center gap-2 px-4 hidden lg:flex">
            <div className="flex gap-6">
              {navItems.map((item) => {
                const isOpen =
                  item.dropdownType === "about"
                    ? aboutOpen
                    : item.dropdownType === "services"
                    ? servicesOpen
                    : false;
                const setOpen =
                  item.dropdownType === "about"
                    ? setAboutOpen
                    : item.dropdownType === "services"
                    ? setServicesOpen
                    : () => {};
                const activeSubPages =
                  item.dropdownType === "services"
                    ? [
                        "music-festival",
                        "vr-healing",
                        "vr-assessment",
                        "vr-happy",
                        "vr-modules",
                        "global-study",
                        "wellness-living",
                        "wellness-estate",
                        "tea",
                      ]
                    : item.dropdownType === "about"
                  ? ["about", "alliance"]
                  : [];

                return (
                  <div
                    key={item.id}
                    className="relative group"
                    onMouseEnter={() => item.hasDropdown && setOpen(true)}
                    onMouseLeave={() => item.hasDropdown && setOpen(false)}
                  >
                    <button
                      onClick={() => navigate(item.id)}
                      className={`text-sm font-medium whitespace-nowrap transition-colors hover:text-emerald-500 relative py-2 flex items-center gap-1 ${
                        currentPage === item.id ||
                        (item.hasDropdown &&
                          activeSubPages.includes(currentPage))
                          ? "text-emerald-500"
                          : isScrolled ||
                            (currentPage !== "home" &&
                              currentPage !== "technology")
                          ? "text-slate-600"
                          : "text-slate-200"
                      }`}
                    >
                      {item.label}
                      {item.hasDropdown && (
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-200 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      )}
                      <span
                        className={`absolute -bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-emerald-500 transition-all duration-300 ${
                          currentPage === item.id ||
                          (item.hasDropdown &&
                            activeSubPages.includes(currentPage))
                            ? "opacity-100"
                            : "opacity-0 group-hover:opacity-100"
                        }`}
                      ></span>
                    </button>

                    {item.hasDropdown && (
                      <div
                        className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 w-48 transition-all duration-200 ${
                          isOpen
                            ? "opacity-100 translate-y-0 visible"
                            : "opacity-0 translate-y-2 invisible"
                        }`}
                      >
                        <div className="bg-white rounded-xl shadow-2xl border border-emerald-100/50 p-2 relative overflow-visible">
                          {item.subItems.map((sub) => {
                            const isVR = sub.id === "vr-healing";
                            const isLiving = sub.id === "wellness-living";
                            const isActiveSub =
                              currentPage === sub.id ||
                              (isLiving && currentPage === "wellness-estate");
                            return (
                              <div
                                key={sub.id}
                                className="relative group/sub"
                                onMouseEnter={() =>
                                  (isVR || isLiving) &&
                                  setHoverSub(isVR ? "vr" : "living")
                                }
                                onMouseLeave={() =>
                                  (isVR || isLiving) && setHoverSub(null)
                                }
                              >
                                <button
                                  onClick={() => {
                                    navigate(sub.id);
                                    setOpen(false);
                                  }}
                                  className={`w-full text-left px-4 py-2 text-sm rounded-lg hover:bg-emerald-50 hover:text-emerald-600 transition-colors ${
                                    isActiveSub
                                      ? "text-emerald-600 bg-emerald-50 font-medium"
                                      : "text-slate-600"
                                  }`}
                                >
                                  <div className="flex items-center justify-between gap-2">
                                    <span>{sub.label}</span>
                                    {(isVR || isLiving) && (
                                      <ChevronDown
                                        size={14}
                                        className="text-slate-400 transition-transform duration-200 -rotate-90 group-hover/sub:rotate-0"
                                      />
                                    )}
                                  </div>
                                </button>
                                {isVR && (
                                  <div
                                    className={`absolute top-0 left-full ml-2 w-80 bg-white rounded-xl shadow-2xl border border-slate-100 p-3 transition-all duration-200 ${
                                      hoverSub === "vr"
                                        ? "opacity-100 translate-x-0 visible"
                                        : "opacity-0 translate-x-2 invisible"
                                    }`}
                                    onMouseEnter={() => setHoverSub("vr")}
                                    onMouseLeave={() => setHoverSub(null)}
                                  >
                                    <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold px-1 mb-2">
                                      {t.nav.sub.vr}
                                    </div>
                                    <div className="space-y-2">
                                      {vrSubItems.map((vr) => (
                                        <button
                                          key={vr.id}
                                          onClick={() => {
                                            navigate(vr.id);
                                            setOpen(false);
                                          }}
                                          className={`w-full text-left px-3 py-2 rounded-lg border border-slate-100 hover:border-emerald-200 hover:bg-emerald-50 transition-colors ${
                                            currentPage === vr.id
                                              ? "border-emerald-300 bg-emerald-50"
                                              : ""
                                          }`}
                                        >
                                          <div className="flex items-center gap-2 text-xs text-emerald-600 font-semibold">
                                            {vr.icon}
                                            <span>{vr.tag}</span>
                                          </div>
                                          <div className="font-bold text-slate-900 text-sm leading-tight mt-1">
                                            {vr.label}
                                          </div>
                                        </button>
                                      ))}
                                    </div>
                                  </div>
                                )}
                                {isLiving && (
                                  <div
                                    className={`absolute top-0 left-full ml-2 w-72 bg-white rounded-xl shadow-2xl border border-slate-100 p-3 transition-all duration-200 ${
                                      hoverSub === "living"
                                        ? "opacity-100 translate-x-0 visible"
                                        : "opacity-0 translate-x-2 invisible"
                                    }`}
                                    onMouseEnter={() => setHoverSub("living")}
                                    onMouseLeave={() => setHoverSub(null)}
                                  >
                                    <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold px-1 mb-2">
                                      {t.nav.sub.living}
                                    </div>
                                    <div className="space-y-2">
                                      {livingSubItems.map((item) => (
                                        <button
                                          key={item.id}
                                          onClick={() => {
                                            navigate(item.id);
                                            setOpen(false);
                                          }}
                                          className={`w-full text-left px-3 py-2 rounded-lg border border-slate-100 hover:border-emerald-200 hover:bg-emerald-50 transition-colors ${
                                            currentPage === item.id
                                              ? "border-emerald-300 bg-emerald-50"
                                              : ""
                                          }`}
                                        >
                                          <div className="flex items-center gap-2 text-xs text-emerald-600 font-semibold">
                                            {item.icon}
                                            <span>{item.tag}</span>
                                          </div>
                                          <div className="font-bold text-slate-900 text-sm leading-tight mt-1">
                                            {item.label}
                                          </div>
                                          <div className="text-xs text-slate-500 mt-1 leading-snug">
                                            {item.desc}
                                          </div>
                                        </button>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <button
              onClick={() => setLang((l) => (l === "zh" ? "en" : "zh"))}
              className={`px-3 py-1 rounded border text-xs font-bold transition-all ${
                isScrolled ||
                (currentPage !== "home" && currentPage !== "technology")
                  ? "border-slate-300 text-slate-600 hover:border-emerald-500 hover:text-emerald-500"
                  : "border-white/30 text-white hover:bg-white/10"
              }`}
            >
              {lang === "zh" ? "EN" : "中文"}
            </button>

            <Button
              variant="primary"
              className="px-5 py-2 text-sm shadow-emerald-200/50 flex-shrink-0 hidden xl:flex"
              onClick={() => navigate("contact")}
            >
              {t.nav.cooperation}
            </Button>

            <button
              className={`lg:hidden p-2 rounded-lg border transition-all ${
                isScrolled ||
                (currentPage !== "home" && currentPage !== "technology")
                  ? "border-slate-200 text-slate-700 hover:border-emerald-500 hover:text-emerald-500"
                  : "border-white/30 text-white hover:bg-white/10"
              }`}
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        <div className="lg:hidden mt-4">
          <div
            className={`overflow-hidden transition-all duration-300 ${
              mobileMenuOpen
                ? "max-h-[80vh] opacity-100 translate-y-0"
                : "max-h-0 opacity-0 -translate-y-2 pointer-events-none"
            }`}
          >
            <div className="bg-white/95 backdrop-blur-md border border-emerald-50 rounded-2xl shadow-xl p-4 space-y-1">
              {navItems.map((item) => {
                const isExpanded = mobileDropdown === item.id;
                const isActive =
                  currentPage === item.id ||
                  (item.id === "services" &&
                    [
                      "music-festival",
                      "vr-healing",
                      "vr-assessment",
                      "vr-happy",
                      "vr-modules",
                      "global-study",
                      "wellness-living",
                      "wellness-estate",
                      "tea",
                    ].includes(currentPage)) ||
                  (item.id === "about" && ["about", "alliance"].includes(currentPage));

                return (
                  <div
                    key={item.id}
                    className="border-b border-slate-100 last:border-none"
                  >
                    <button
                      onClick={() => {
                        if (item.hasDropdown) {
                          setMobileDropdown((prev) =>
                            prev === item.id ? null : item.id
                          );
                        } else {
                          navigate(item.id);
                          setMobileMenuOpen(false);
                        }
                      }}
                      className={`w-full flex items-center justify-between py-3 text-left px-2 rounded-lg font-semibold transition-colors ${
                        isActive
                          ? "text-emerald-600 bg-emerald-50"
                          : "text-slate-800 hover:bg-emerald-50"
                      }`}
                    >
                      <span>{item.label}</span>
                      {item.hasDropdown && (
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${
                            isExpanded ? "rotate-180 text-emerald-600" : ""
                          }`}
                        />
                      )}
                    </button>

                    {item.hasDropdown && isExpanded && (
                      <div className="flex flex-col gap-2 pb-3 pl-3">
                        {item.subItems.map((sub) => {
                          const isLiving = sub.id === "wellness-living";
                          const isActiveSub =
                            currentPage === sub.id ||
                            (isLiving && currentPage === "wellness-estate");
                          return (
                            <div key={sub.id} className="flex flex-col gap-1">
                              <button
                                onClick={() => {
                                  navigate(sub.id);
                                  setMobileMenuOpen(false);
                                }}
                                className={`text-left text-sm px-3 py-2 rounded-lg transition-colors ${
                                  isActiveSub
                                    ? "bg-emerald-50 text-emerald-600 font-medium"
                                    : "text-slate-700 hover:bg-emerald-50"
                                }`}
                              >
                                {sub.label}
                              </button>
                              {isLiving &&
                                livingSubItems.map((child) => {
                                  const isActiveChild = currentPage === child.id;
                                  return (
                                    <button
                                      key={child.id}
                                      onClick={() => {
                                        navigate(child.id);
                                        setMobileMenuOpen(false);
                                      }}
                                      className={`text-left text-sm px-4 py-2 rounded-lg transition-colors border border-transparent ${
                                        isActiveChild
                                          ? "bg-emerald-50 text-emerald-600 font-medium border-emerald-100"
                                          : "text-slate-700 hover:bg-emerald-50"
                                      }`}
                                    >
                                      {child.label}
                                    </button>
                                  );
                                })}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}

              <div className="pt-2 flex flex-col gap-2">
                <Button
                  variant="primary"
                  className="w-full justify-center"
                  onClick={() => {
                    navigate("contact");
                    setMobileMenuOpen(false);
                  }}
                >
                  {t.nav.cooperation}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
