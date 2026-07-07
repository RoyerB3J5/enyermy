import Button from "@/components/ui/Button";

interface BundleSectionProps {
  content: {
    get: string;
    PerfectFor: string;
    results: string;
    button: string;
  };
  itemsBundles: {
    id: string;
    image: string;
    tag: string;
    title: string;
    list: string[];
    perfectFor: string;
    results: string;
    color: string;
  }[];
}
export default function BundleSection({
  content,
  itemsBundles,
}: BundleSectionProps) {
  return (
    <section className="w-full grid grid-cols-1 justify-center items-center">
      {itemsBundles.map((bundle) => {
        const isPar = itemsBundles.indexOf(bundle) % 2 === 0;
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center w-full">
            <div
              className={`w-full h-auto aspect-720/660 relative ${isPar ? "md:order-1" : "md:order-2"}`}
            >
              <img
                className={`w-full h-full object-cover object-center absolute inset-0`}
                src={bundle.image}
                decoding="async"
                loading="lazy"
                alt={bundle.title}
                width={720}
                height={660}
              />
            </div>

            <div
              className={`w-full h-auto aspect-720/660 ${
                bundle.color
              } flex items-center ${
                isPar
                  ? "pr-[max(2rem,calc((100vw-1280px)/2))] order-2"
                  : "pl-[max(2rem,calc((100vw-1280px)/2))] order-1"
              }`}
            >
              <div
                className={`w-full max-w-160 flex ${isPar ? "justify-end" : "justify-start"}`}
              >
                <div className="flex flex-col items-start text-primary gap-8">
                  <div className="flex flex-col justify-center items-start gap-4">
                    <p className="paragraph-x-large tracking-[-0.5px]">
                      {bundle.tag}
                    </p>
                    <h2
                      className="title-h4"
                      dangerouslySetInnerHTML={{ __html: bundle.title }}
                    />
                    <div className="flex flex-col justify-center items-start gap-2">
                      <p className="paragraph tracking-[-0.5px] font-normal">
                        {content.get}
                      </p>
                      <ul className="flex flex-col justify-center items-start gap-1 list-disc pl-4">
                        {bundle.list.map((item, index) => (
                          <li
                            key={index}
                            className="paragraph font-normal tracking-[-0.5px]"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p className="paragraph tracking-[-0.5px] font-normal">
                      {content.PerfectFor} {bundle.perfectFor}
                    </p>
                    <p className="paragraph tracking-[-0.5px] font-normal">
                      {content.results} {bundle.results}
                    </p>
                  </div>
                  <Button
                    label={content.button}
                    href="#"
                    styleButton="black"
                    paddingX="px-6"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
