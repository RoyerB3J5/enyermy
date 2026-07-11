import Image from "next/image";
import Button from "../ui/Button";
interface InfoProductCardProps {
  information: {
    image: string;
    title: string;
    href: string;
    position: string;
    colorText: string;
    labelButton: string;
  };
}

export default function InfoProductCard({ information }: InfoProductCardProps) {
  return (
    <div
      className={`relative w-full h-full rounded-lg md:rounded-2xl overflow-hidden flex flex-col justify-end gap-2.5 md:gap-5 p-4 md:p-8 ${information.position === "left" ? "items-start" : "items-end"}`}
    >
      <Image
        src={`/images/${information.image}.webp`}
        alt={information.title}
        width="326"
        height="410"
        className="w-full h-full object-cover absolute object-center inset-0 z-0 image-scale"
      />
      <p
        className={`text-${information.colorText} text-[20px] md:text-[32px] z-1 font-title tracking-[-0.5px] font-normal leading-[120%] ${information.position === "left" ? "text-left" : "text-right"}`}
        dangerouslySetInnerHTML={{ __html: information.title }}
      />
      <Button
        href={information.href}
        label={information.labelButton}
        styleButton="white"
      />
    </div>
  );
}
