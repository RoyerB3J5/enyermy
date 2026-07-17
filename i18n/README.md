# Localized Content

`content/en.ts` and `content/es.ts` are the content dictionaries. They intentionally start empty. Add the same shape to both files; arrays are normal TypeScript values.

```ts
const content = {
  home: {
    title: "Welcome",
    benefits: ["First benefit", "Second benefit"],
  },
};

export default content;
```

Every public page is under `app/[locale]`. The proxy redirects a URL without a locale to English, so `/products` becomes `/en/products`. The current locale is the `locale` route parameter and is the only value used to choose content.

Use the content in an async Server Component page:

```tsx
import { notFound } from "next/navigation";
import { getContent } from "@/i18n/content";
import { hasLocale } from "@/i18n/config";

type HomeContent = {
  home: {
    title: string;
    benefits: string[];
  };
};

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(locale)) notFound();

  const content = await getContent<HomeContent>(locale);

  return (
    <main lang={locale}>
      <h1>{content.home.title}</h1>
      <ul>
        {content.home.benefits.map((benefit) => (
          <li key={benefit}>{benefit}</li>
        ))}
      </ul>
    </main>
  );
}
```

The shared `app/[locale]/(site)/layout.tsx` already validates the locale, loads the dictionary once, sets `<html lang>`, and passes `content.header` and `content.footer` into the corresponding components. Header and footer fall back to their existing text until those sections are added to both dictionaries.

`getContent(locale)` is server-only. For Client Components such as the header, footer, or a page section, load the dictionary in the nearest Server Component and pass only the required object as a prop. `Header` and `Footer` already follow this pattern. A client-side `Hero` should receive `<Hero content={content.home.hero} />`; it must not import `getContent` itself.
