interface ButtonLinkProps {
  content: {
    text: string;
    href: string;
  };
  openInNewTab?: boolean;
}
import Link from "next/link";

export default function ButtonLink({
  content,
  openInNewTab = false,
}: ButtonLinkProps) {
  return (
    <Link
      href={content.href}
      className="relative py-1 cursor-pointer paragraph text-primary uppercase font-medium tracking-[3px] text-center after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-in-out"
      target={openInNewTab ? "_blank" : undefined}
      rel={openInNewTab ? "noopener noreferrer" : undefined}
    >
      {content.text}
    </Link>
  );
}
