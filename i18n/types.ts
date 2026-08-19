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
  description: string;
  button: string;
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
    areas: {
      label: string;
      href: string;
    }[];
  };
  aboutUs: {
    title: string;
    description: string;
  };
};

export type ContentDictionary = {
  header?: HeaderContent;
  footer?: FooterContent;
  popup?: {
    title: string;
    description: string;
    button: string;
  };
  [section: string]: unknown;
};
