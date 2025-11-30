import { ArrowLeft } from "lucide-react";

export const BackButton = ({ onClick, text }) => (
  <button
    onClick={onClick}
    className="flex items-center gap-2 text-slate-500 hover:text-emerald-600 transition-colors mb-8 font-medium group"
  >
    <div className="p-2 rounded-full bg-slate-100 group-hover:bg-emerald-100 transition-colors">
      <ArrowLeft size={20} />
    </div>
    {text}
  </button>
);

