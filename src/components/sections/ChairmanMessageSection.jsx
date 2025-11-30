import { Quote } from "lucide-react";

export const ChairmanMessageSection = ({ t }) => {
  const content = t.pages.home.chairman;
  return (
    <div className="mb-20">
      <div className="relative bg-emerald-900 rounded-3xl p-8 md:p-12 overflow-hidden text-white shadow-2xl">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute right-0 top-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute left-0 bottom-0 w-64 h-64 bg-emerald-400 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-start">
          <div className="lg:w-1/3">
            <div className="w-16 h-1 bg-emerald-400 mb-6"></div>
            <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
              {content.title}
            </h3>
            <h3 className="text-xl md:text-2xl font-bold leading-tight mb-4 whitespace-pre-line">
              {content.subTitle}
            </h3>
            <div className="mt-8">
              <Quote className="text-emerald-500/30 w-20 h-20" />
            </div>
          </div>

          <div className="lg:w-2/3 space-y-6 text-emerald-50 leading-relaxed font-light text-justify">
            <p>{content.msg1}</p>
            <p>{content.msg2}</p>
            <p>{content.msg3}</p>
            <p>{content.msg4}</p>

            <div className="pt-8 flex flex-col items-end">
              <div className="text-xl font-bold text-white mb-1">
                {content.name}
              </div>
              <div className="text-sm text-emerald-300 mb-2">
                {content.role}
              </div>
              <div className="text-xs text-emerald-400/60 font-mono">
                {content.date}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

