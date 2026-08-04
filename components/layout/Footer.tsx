"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { getLocalizedPath } from "@/i18n/navigation";
import type { FooterContent } from "@/i18n/types";

const cards = [
  "amazon",
  "amex",
  "apple",
  "azul",
  "discover",
  "google",
  "jcb",
  "mastercard-2",
  "mastercard",
  "paypal",
  "shop",
  "union",
  "visa",
];

const socialMedia = [
  {
    icon: "facebook",
    href: "#",
  },
  {
    icon: "instagram",
    href: "https://www.instagram.com/enyermystudiopro/",
  },
];

export default function Footer({
  locale,
  content,
}: {
  locale: Locale;
  content?: FooterContent;
}) {
  const localizedPath = (href: string) => getLocalizedPath(locale, href);
  const [openSections, setOpenSections] = useState({
    quickLinks: false,
    products: false,
    servicesArea: false,
    aboutUs: false,
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((current) => ({
      ...current,
      [section]: !current[section],
    }));
  };

  return (
    <footer className="flex flex-col justify-center items-center w-full">
      <div className="bg-primary w-full flex flex-col justify-center items-center py-14 text-white gap-10 ">
        <div className="container-full flex flex-col justify-center  items-center md:items-end gap-10 md:gap-6">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 justify-center items-center">
            <div className="flex flex-col justify-between items-start md:items-center lg:items-start gap-10 self-start w-full lg:w-auto pt-5 h-full">
              <div className="flex flex-col justify-center items-start md:items-center lg:items-start gap-4 ">
                <img
                  src="/images/logo-white.svg"
                  alt="Logo"
                  className="w-[248px] h-auto block  "
                  decoding="async"
                  loading="lazy"
                />
                <p className="text-start md:text-center lg:text-start">
                  {content?.description}
                </p>
                <a
                  href={localizedPath("#")}
                  className="relative py-1 cursor-pointer paragraph text-white uppercase font-medium tracking-[3px] text-center after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-in-out"
                >
                  {content?.button}
                </a>
              </div>

              <div className="flex justify-start items-center gap-4">
                {socialMedia.map((item, index) => (
                  <Link href={item.href} key={index}>
                    <Image
                      src={`/images/${item.icon}.svg`}
                      width={24}
                      height={24}
                      className="w-7 h-7"
                      decoding="async"
                      loading="lazy"
                      alt={item.icon}
                    />
                  </Link>
                ))}
              </div>
            </div>
            {/* Quick Links Section */}
            <div className="flex flex-col justify-between items-center lg:items-start self-start w-full lg:w-auto pt-5 h-full border-b border-[#414141] md:border-0">
              <button
                type="button"
                onClick={() => toggleSection("quickLinks")}
                aria-expanded={openSections.quickLinks}
                className="flex md:hidden w-full items-center justify-between pb-5 text-start"
              >
                <span className="text-[21.3px] font-normal leading-[119%] font-title">
                  {content?.quickLinks.title}
                </span>
                <span aria-hidden="true" className="text-2xl leading-none">
                  {openSections.quickLinks ? "-" : "+"}
                </span>
              </button>
              <div
                className={`${openSections.quickLinks ? "flex" : "hidden"} md:flex flex-col justify-center items-start md:items-center lg:items-start gap-7 w-full pb-5 md:pb-0`}
              >
                <h3 className="hidden md:block text-[21.3px] font-normal leading-[119%] font-title">
                  {content?.quickLinks.title}
                </h3>
                <ul className="flex flex-col justify-center items-start md:items-center lg:items-start gap-2">
                  {content?.quickLinks.links.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="paragraph text-white hover:text-secondary transition-all duration-300 ease-in-out font-normal"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Services Section */}
            <div className="flex flex-col justify-center items-start md:items-center lg:items-start self-start w-full lg:w-auto pt-5 border-b border-[#414141] md:border-0">
              <button
                type="button"
                onClick={() => toggleSection("products")}
                aria-expanded={openSections.products}
                className="flex md:hidden w-full items-center justify-between pb-5 text-start"
              >
                <span className="text-[21.3px] font-normal leading-[119%] font-title">
                  {content?.products.title}
                </span>
                <span aria-hidden="true" className="text-2xl leading-none">
                  {openSections.products ? "-" : "+"}
                </span>
              </button>
              <div
                className={`${openSections.products ? "flex" : "hidden"} md:flex flex-col justify-center items-start md:items-center lg:items-start gap-7 w-full pb-5 md:pb-0`}
              >
                <h3 className="hidden md:block text-[21.3px] font-normal leading-[119%] font-title">
                  {content?.products.title}
                </h3>
                <ul className="flex flex-col justify-center items-start md:items-center lg:items-start gap-2">
                  {content?.products.links.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="paragraph text-white hover:text-secondary transition-all duration-300 ease-in-out font-normal"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Service Area Section */}
            <div className="flex flex-col justify-center items-start md:items-center lg:items-start self-start w-full lg:w-auto pt-5 border-b border-[#414141] md:border-0">
              <button
                type="button"
                onClick={() => toggleSection("servicesArea")}
                aria-expanded={openSections.servicesArea}
                className="flex md:hidden w-full items-center justify-between pb-5 text-start"
              >
                <span className="text-[21.3px] font-normal leading-[119%] font-title">
                  {content?.servicesArea.title}
                </span>
                <span aria-hidden="true" className="text-2xl leading-none">
                  {openSections.servicesArea ? "-" : "+"}
                </span>
              </button>
              <div
                className={`${openSections.servicesArea ? "flex" : "hidden"} md:flex flex-col justify-center items-start md:items-center lg:items-start gap-7 w-full pb-5 md:pb-0`}
              >
                <h3 className="hidden md:block text-[21.3px] font-normal leading-[119%] font-title">
                  {content?.servicesArea.title}
                </h3>
                <ul className="flex flex-col justify-center items-start md:items-center lg:items-start gap-2">
                  {content?.servicesArea.areas.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={localizedPath("/locations")}
                        className="paragraph text-white hover:text-secondary transition-all duration-300 ease-in-out font-normal"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact / Get in Touch Section */}
            <div className="flex flex-col justify-between items-start md:items-center lg:items-start self-start w-full lg:w-auto pt-5 h-full border-b border-[#414141] md:border-0">
              <button
                type="button"
                onClick={() => toggleSection("aboutUs")}
                aria-expanded={openSections.aboutUs}
                className="flex md:hidden w-full items-center justify-between pb-5 text-start"
              >
                <span className="text-[21.3px] font-normal leading-[119%] font-title">
                  {content?.aboutUs.title}
                </span>
                <span aria-hidden="true" className="text-2xl leading-none">
                  {openSections.aboutUs ? "-" : "+"}
                </span>
              </button>
              <div
                className={`${openSections.aboutUs ? "flex" : "hidden"} md:flex flex-col justify-center items-start md:items-center lg:items-start gap-7 w-full pb-5 md:pb-0`}
              >
                <h3 className="hidden md:block text-[21.3px] font-normal leading-[119%] font-title">
                  {content?.aboutUs.title}
                </h3>
                <p
                  className="paragraph text-white font-normal text-start md:text-center lg:text-start"
                  dangerouslySetInnerHTML={{
                    __html: content?.aboutUs.description || "",
                  }}
                ></p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end items-center gap-2  max-w-120">
            {cards.map((card) => (
              <img
                key={card}
                alt={card}
                src={`/images/cards/${card}.svg`}
                width={56}
                height={40}
                className="w-12 md:w-14 h-auto"
                decoding="async"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[#E5E5E5] w-full py-3.5 lg:py-4.5 flex justify-center items-center px-5 xl:px-0">
        <div className="w-full max-w-screen lg:max-w-7xl flex flex-col lg:flex-row justify-center items-center gap-2 lg:gap-6">
          <Link
            href="https://inkshapegroup.com/en/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/inkshape.svg"
              alt="Logo de Inkshape Group"
              width="208"
              height="40"
              decoding="async"
              loading="lazy"
              className="w-27.5 lg:w-34 h-auto block "
            />
          </Link>
          <p className="text-[10px] lg:text-[12px] lg:text-[13px] leading-[170%] lg:leading-[120%] text-[#404040]  font-normal text-center">
            Copyright © 2026 by{" "}
            <Link
              href="https://inkshapegroup.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Inkshape Group
            </Link>{" "}
            | Privacy |{" "}
            <Link href={localizedPath("/")}>Enyermy Studio Pro</Link> |
            Greenville & Charlotte | Call Now:{" "}
            <Link href="tel:+19804679337">(980) 467-9337</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
