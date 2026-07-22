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
      {itemsBundles.map((bundle, index) => {
        const isPar = itemsBundles.indexOf(bundle) % 2 === 0;
        return (
          <div
            className="grid grid-cols-1 md:grid-cols-2 justify-center items-center w-full"
            key={index}
          >
            <div
              className={`w-auto max-w-none md:max-w-full xl:max-w-none xl:w-full h-full xl:h-auto aspect-720/660 relative ${isPar ? "md:order-1" : "md:order-2"}`}
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
              className={`w-full py-12 md:py-4 xl:py-0 px-4 md:px-0 h-auto aspect-720/660 ${
                bundle.color
              } flex items-center ${
                isPar
                  ? "md:pr-[max(2rem,calc((100vw-1280px)/2))] order-2 "
                  : "md:pl-[max(2rem,calc((100vw-1280px)/2))] order-1"
              }`}
            >
              <div
                className={`w-full md:max-w-160 flex ${isPar ? " px-0 md:px-4 xl:pr-0 xl:pl-12 md:justify-end" : "md:justify-start"}`}
              >
                <div className="flex flex-col items-start text-primary gap-6 md:gap-2 xl:gap-8 w-full">
                  <div className="flex flex-col justify-center items-start gap-4 md:gap-2 xl:gap-4">
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
