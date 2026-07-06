import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

function Button({
  children,
  variant = "primary",
  onClick,
  type = "button",
}: ButtonProps) {
  const baseStyle =
    "inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold transition-all duration-300 hover:scale-105 active:scale-95";

  const variants = {
    primary:
      "bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20 hover:bg-cyan-400 hover:shadow-cyan-400/40",

    secondary:
      "border border-slate-600 bg-transparent text-white hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-400",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]}`}
    >
      {children}
    </button>
  );
}

export default Button;