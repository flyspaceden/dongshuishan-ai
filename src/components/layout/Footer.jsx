export const Footer = ({ navigate, t }) => (
  <footer className="bg-slate-950 text-white pt-20 pb-8 border-t border-slate-800">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center font-bold text-sm">
              AI
            </div>
            <span className="text-xl font-bold">
              {t.common.footer.companyName}
            </span>
          </div>
          <p className="text-slate-400 leading-relaxed max-w-sm mb-6 text-sm">
            {t.common.footer.slogan}
          </p>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-6 text-white">
            {t.nav.services}
          </h4>
          <ul className="space-y-3 text-slate-400 text-sm">
            <li>
              <button
                onClick={() => navigate("music-festival")}
                className="hover:text-emerald-400 transition-colors"
              >
                {t.nav.sub.festival}
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("vr-healing")}
                className="hover:text-emerald-400 transition-colors"
              >
                {t.nav.sub.vr}
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("global-study")}
                className="hover:text-emerald-400 transition-colors"
              >
                {t.nav.sub.study}
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("tea")}
                className="hover:text-emerald-400 transition-colors"
              >
                {t.nav.sub.tea}
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("wellness-living")}
                className="hover:text-emerald-400 transition-colors"
              >
                {t.nav.sub.living}
              </button>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-6 text-white">{t.nav.contact}</h4>
          <ul className="space-y-3 text-slate-400 text-sm">
            <li>
              {t.common.footer.addrLabel}: {t.common.contact.address}
            </li>
            <li>
              {t.common.footer.telLabel}: {t.common.contact.phone}
            </li>
            <li>
              {t.common.footer.emailLabel}: {t.common.contact.email}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center text-slate-600 text-xs">
        <div className="space-y-1">
          <p>{t.common.footer.copyright}</p>
          <p>{t.common.footer.support}</p>
        </div>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">
            {t.common.footer.privacy}
          </a>
          <a href="#" className="hover:text-white">
            {t.common.footer.terms}
          </a>
        </div>
      </div>
    </div>
  </footer>
);

