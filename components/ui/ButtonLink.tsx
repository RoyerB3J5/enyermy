interface ButtonLinkProps {
  content: {
    text: string;
    href: string;
  };
}
import Link from "next/link";

export default function ButtonLink({ content }: ButtonLinkProps) {
  return (
    <Link
      href={content.href}
      className="py-1  border-b border-transparent cursor-pointer hover:border-primary transition-all duration-300 ease-in-out paragraph text-primary uppercase font-medium tracking-[3px] text-center"
    >
      {content.text}
    </Link>
  );
}
