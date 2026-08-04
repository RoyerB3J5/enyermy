import { getContent } from "@/i18n/content";
import { hasLocale } from "@/i18n/config";
import { notFound } from "next/navigation";
type PrivacyContent = (typeof import("@/content/en"))["default"]["privacy"];
export default async function page({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;

  if (!hasLocale(locale)) {
    notFound();
  }
  const { privacy: content } = await getContent<{ privacy: PrivacyContent }>(
    locale,
  );
  return (
    <main className="w-full flex flex-col justify-center items-center pt-(--header-height) ">
      <section className="container-full flex flex-col justify-center items-center gap-8 py-12 md:py-20 text-primary">
        <h1 className="title-h4 text-primary fade-up">{content.title}</h1>
        <p
          dangerouslySetInnerHTML={{ __html: content.description }}
          className="paragraph font-normal fade-up w-full md:w-1/2"
        />
      </section>
    </main>
  );
}
