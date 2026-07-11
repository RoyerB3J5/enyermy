import Link from "next/link"; // 1. Importamos el Link de Next.js

interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  styleButton: "white" | "black";
  href?: string;
  paddingX?: string;
  wFull?: boolean;
}

export default function Button({
  label,
  onClick,
  type = "button",
  disabled,
  styleButton,
  href,
  paddingX = "px-6",
  wFull = false,
}: ButtonProps) {
  const baseClasses = `cursor-pointer flex justify-center items-center ${paddingX} md:py-4 rounded-full focus:outline-none transition-all duration-300 ease-in-out text-[14px] font-medium leading-[150%] uppercase tracking-[3px] text-center tokens-clase z-1 w-full ${wFull ? "w-full" : "md:w-auto"}`;
  const styleClasses =
    styleButton === "white"
      ? "bg-white text-primary hover:bg-primary hover:text-white border border-black/20 hover:border-black py-3"
      : "bg-primary text-white hover:bg-[#2D2D2D] hover:text-white border border-primary py-3.5";

  const clasesFinales = `${baseClasses} ${styleClasses}`;

  if (href) {
    return (
      <Link href={href} className={clasesFinales}>
        {label}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={clasesFinales}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
