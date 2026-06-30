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
      className="py-1 border-b border-primary cursor-pointer hover:-translate-y-1 transition-all duration-300 ease-in-out paragraph text-primary uppercase font-medium tracking-[3px] text-center"
    >
      {content.text}
    </Link>
  );
}
