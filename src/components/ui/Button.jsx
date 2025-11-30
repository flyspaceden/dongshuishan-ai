const baseStyle =
  "px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 cursor-pointer select-none";

const variants = {
  primary:
    "bg-emerald-600 text-white hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-200 active:scale-95",
  outline:
    "border border-emerald-600 text-emerald-700 hover:bg-emerald-50 bg-transparent active:scale-95",
  white: "bg-white text-slate-900 hover:bg-slate-100 shadow-md active:scale-95",
  ghost: "text-slate-600 hover:text-emerald-600 hover:bg-emerald-50",
};

export const Button = ({
  children,
  variant = "primary",
  className = "",
  onClick,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

