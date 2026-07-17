export type LocalizedLink = {
  label: string;
  href: string;
};

export type HeaderContent = {
  changePage: LocalizedLink[];
  nav: LocalizedLink[];
  navBundles: LocalizedLink[];
  store: string;
};

export type FooterContent = {
  quickLinks: {
    title: string;
    links: LocalizedLink[];
  };
  products: {
    title: string;
    links: LocalizedLink[];
  };
  servicesArea: {
    title: string;
    areas: string[];
  };
  aboutUs: {
    title: string;
    description: string;
  };
};

export type ContentDictionary = {
  header?: HeaderContent;
  footer?: FooterContent;
  [section: string]: unknown;
};
