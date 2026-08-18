import Link from "next/link";

interface ButtonProps {
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  styleButton: "white" | "black";
  href?: string;
  paddingX?: string;
  wFull?: boolean;
  openInNewTab?: boolean;
}

export default function Button({
  label,
  onClick,
  type = "button",
  disabled,
  styleButton,
  href,
  paddingX = "px-2 md:px-6",
  wFull = false,
  openInNewTab = false,
}: ButtonProps) {
  const baseClasses = `relative overflow-hidden cursor-pointer flex justify-center items-center ${paddingX} md:py-3 rounded-full focus:outline-none transition-colors duration-300 ease-in-out text-[14px] font-medium leading-[150%] uppercase tracking-[3px] text-center z-1 w-full ${
    wFull ? "md:w-full" : "md:w-auto"
  } before:absolute before:inset-0 before:w-full before:h-full before:translate-y-[100px] hover:before:translate-y-0 before:transition-transform before:duration-300 before:ease-in-out`;

  const styleClasses =
    styleButton === "white"
      ? "bg-white text-primary hover:text-white border border-black/20 hover:border-black py-3 before:bg-primary"
      : "bg-primary text-white hover:text-white border border-primary hover:border-[#2D2D2D] py-3.5 before:bg-[#2D2D2D]";

  const clasesFinales = `${baseClasses} ${styleClasses}`;

  const buttonContent = <span className="relative z-10">{label}</span>;

  if (href) {
    return (
      <Link
        href={href}
        className={clasesFinales}
        target={openInNewTab ? "_blank" : undefined}
        rel={openInNewTab ? "noopener noreferrer" : undefined}
      >
        {buttonContent}
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
      {buttonContent}
    </button>
  );
}
