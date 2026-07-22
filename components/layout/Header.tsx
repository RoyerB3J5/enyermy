"use client";

import Image from "next/image";
import logo from "@/public/images/logo.svg";
import logoWhite from "@/public/images/logo-white.svg";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";
import ChangeLanguage from "@/components/ui/ChangeLanguage";
import CartIconHeader from "../ui/CartIconHeader";
import { ChevronRight, MapPin, Menu, Search, User, X } from "lucide-react";
import type { Locale } from "@/i18n/config";
import { getLocalizedPath } from "@/i18n/navigation";
import type { HeaderContent } from "@/i18n/types";

export default function Header({
  locale,
  content,
}: {
  locale: Locale;
  content?: HeaderContent;
}) {
  const pathname = usePathname() || "/";
  const headerRef = useRef<HTMLElement>(null);
  const topBarRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isThresholdReached, setIsThresholdReached] = useState(false);

  // Normalize: remove language prefix (en/es) and trailing slash
  const normalized =
    pathname.replace(/^\/(en|es)/, "").replace(/\/$/, "") || "/";

  const headerClasses =
    normalized === "/"
      ? isThresholdReached
        ? "lg:bg-white text-primary"
        : "lg:bg-transparent text-primary"
      : ["/salon-experience", "/about", "/about-us"].includes(normalized)
        ? isThresholdReached
          ? "lg:bg-black text-primary lg:text-white"
          : "lg:bg-transparent text-primary lg:text-white"
        : "lg:bg-white text-primary";

  const isSalonExperience = normalized.startsWith("/salon-experience");
  const currentNav = isSalonExperience ? content?.navBundles : content?.nav;
  const localizedPath = (href: string) => getLocalizedPath(locale, href);

  useEffect(() => {
    const header = headerRef.current;
    const topBar = topBarRef.current;
    if (!header) return;

    const updateHeaderStyle = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const firstSection =
        document.querySelector(".hero-main-section") ||
        document.querySelector("main > section");
      const threshold = firstSection
        ? (firstSection as HTMLElement).offsetHeight
        : window.innerHeight;

      // Handle hiding/showing on scroll direction (replaces GSAP ScrollTrigger)
      if (scrollY > lastScrollY.current && scrollY > 0) {
        header.style.transform = "translateY(-120%)";
      } else {
        header.style.transform = "translateY(0)";
      }

      setIsThresholdReached(scrollY >= threshold);

      lastScrollY.current = scrollY;
    };

    const updateHeaderHeight = () => {
      const height = header.offsetHeight;
      const heightTopBar = topBar ? topBar.offsetHeight : 0;
      document.documentElement.style.setProperty(
        "--header-height",
        `${height}px`,
      );
      document.documentElement.style.setProperty(
        "--top-bar-height",
        `${heightTopBar}px`,
      );
    };

    window.addEventListener("scroll", updateHeaderStyle, { passive: true });
    window.addEventListener("resize", updateHeaderHeight);

    // Run initial adjustments
    updateHeaderStyle();
    updateHeaderHeight();

    return () => {
      window.removeEventListener("scroll", updateHeaderStyle);
      window.removeEventListener("resize", updateHeaderHeight);
    };
  }, []);

  // Sync body scroll lock with mobile menu state
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const headerElement = document.getElementById("main-header");
    const topBarElement = document.getElementById("top-header");
    if (headerElement) {
      const height = headerElement.offsetHeight;
      const heightTopBar = topBarElement ? topBarElement.offsetHeight : 0;
      // Guardamos el valor directamente en la raíz de la página como variable CSS
      document.documentElement.style.setProperty(
        "--header-height",
        `${height}px`,
      );
      document.documentElement.style.setProperty(
        "--top-bar-height",
        `${heightTopBar}px`,
      );
    }
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className="fixed left-0 right-0 z-50 w-full flex flex-col justify-center items-center top-0 transition-[background-color,transform] duration-300 ease-out"
        id="main-header"
        style={{ backgroundColor: "transparent" }}
      >
        <div
          ref={topBarRef}
          id="top-header"
          className="hidden w-full lg:flex justify-center items-center pt-2 bg-black"
        >
          <div className="container-full flex justify-start items-center">
            {content?.changePage?.map((item, index) => {
              const isActive =
                item.href === "/" ? !isSalonExperience : isSalonExperience;

              return (
                <Link
                  key={index}
                  href={localizedPath(item.href)}
                  className={`px-4 py-1 rounded-t-lg transition-all duration-300 ease-in-out ${
                    isActive
                      ? "bg-white text-primary"
                      : "bg-transparent text-white"
                  }`}
                >
                  <p className="paragraph-small">{item.label}</p>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div
          className={`w-full flex justify-center items-center transition-colors duration-300 bg-white  ${
            headerClasses
          }`}
        >
          <div className="container-full flex justify-between items-center py-4">
            <div className="hidden relative lg:flex  bg-transparent  flex-row justify-center items-center h-auto w-auto z-10 transform translate-x-0 transition-transform duration-300 ease-out">
              <nav>
                <ul className=" relative flex items-center flex-row justify-center w-auto">
                  {currentNav?.map((item, index) => {
                    const itemPathWithoutHash = item.href.split("#")[0];
                    const isActive = normalized === itemPathWithoutHash;
                    return (
                      <li
                        key={index}
                        className={`flex flex-row items-center justify-center group  w-auto text-center px-4 py-2`}
                      >
                        <Link
                          href={localizedPath(item.href)}
                          className="relative transition-colors duration-300 flex justify-center items-center"
                        >
                          <p
                            className={`paragraph transition-all duration-300 ease-in-out ${headerClasses.includes("text-white") ? "text-primary lg:text-white" : "text-primary"} font-normal`}
                          >
                            {item.label}
                          </p>
                          <span
                            className={`absolute -bottom-2 left-1/2 h-0.5 ${headerClasses.includes("text-white") ? "bg-white" : "bg-primary"} transition-all duration-300 ease-out -translate-x-1/2 ${
                              isActive
                                ? "w-8"
                                : "w-0 group-hover:w-8 group-hover:bg-primary"
                            }`}
                          />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
            <div className=" flex justify-center items-center gap-3">
              <button
                type="button"
                aria-label="Abrir menú de navegación"
                title="Abrir menú"
                className="flex items-center justify-center cursor-pointer w-8 h-8 rounded-sm lg:hidden "
                id="hamburger-btn"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu
                  className={`w-5.5 md:w-4 h-auto block ${headerClasses.includes("text-white") ? "text-primary lg:text-white" : "text-primary"}`}
                />
              </button>
              <div className="w-auto md:w-10.5 h-auto md:h-10.5 flex justify-center items-center cursor-pointer md:hidden ">
                <Search
                  className={`w-5.5 md:w-4 h-auto block ${headerClasses.includes("text-white") ? "text-primary lg:text-white" : "text-primary"}`}
                />
              </div>
            </div>
            <Link
              className="hidden lg:block translate-x-[-50%]"
              href={localizedPath(
                isSalonExperience ? "/salon-experience" : "/",
              )}
              aria-label={
                isSalonExperience
                  ? "Ir a la página principal de Salon Experience"
                  : "Ir a la página principal"
              }
              title={
                isSalonExperience
                  ? "Enyermy Studio Pro - Salon Experience"
                  : "Enyermy Studio Pro - Init"
              }
            >
              <Image
                src={headerClasses.includes("text-white") ? logoWhite : logo}
                alt="Logo Enyermy Studio Pro"
                width={158}
                height={48}
                className="w-[89px] lg:w-[158px] h-auto block"
                priority
              />
            </Link>
            <Link
              className="lg:hidden block"
              href={localizedPath(
                isSalonExperience ? "/salon-experience" : "/",
              )}
              aria-label={
                isSalonExperience
                  ? "Ir a la página principal de Salon Experience"
                  : "Ir a la página principal"
              }
              title={
                isSalonExperience
                  ? "Enyermy Studio Pro - Salon Experience"
                  : "Enyermy Studio Pro - Init"
              }
            >
              <Image
                src={logo}
                alt="Logo Enyermy Studio Pro"
                width={158}
                height={48}
                className="w-[89px] lg:w-[158px] h-auto block"
                priority
              />
            </Link>
            <div className="flex justify-center items-center gap-4 md:gap-0">
              <div className="md:flex justify-center items-center p-2 gap-2.5 hidden ">
                <MapPin
                  className={`w-4 h-auto block ${headerClasses.includes("text-white") ? "text-primary lg:text-white" : "text-primary"}`}
                />

                <Link href={localizedPath("/store-locations")}>
                  <p
                    className={`paragraph font-normal ${headerClasses.includes("text-white") ? "text-primary lg:text-white" : "text-primary"}`}
                  >
                    {content?.store}
                  </p>
                </Link>
              </div>
              <div className="w-10.5 h-10.5 hidden md:flex justify-center items-center cursor-pointer">
                <Search
                  className={`w-4 h-auto block ${headerClasses.includes("text-white") ? "text-primary lg:text-white" : "text-primary"}`}
                />
              </div>
              <Link
                href="#"
                className="w-auto md:w-10.5 h-auto md:h-10.5 flex justify-center items-center "
              >
                <User
                  className={`w-5.5 md:w-4 h-auto block ${headerClasses.includes("text-white") ? "text-primary lg:text-white" : "text-primary"}`}
                />
              </Link>

               <CartIconHeader
                 differentStyles={headerClasses.includes("text-white")}
               />
               <ChangeLanguage locale={locale} />
             </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 lg:hidden flex items-start bg-white text-primary flex-col justify-center h-[85%] z-[60] py-6 gap-12 transition-transform duration-300 ease-out w-full ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        id="mobile-menu"
      >
        <div className="w-full flex justify-between items-center relative px-4">
          <Link
            href={localizedPath("/")}
            aria-label="Ir a la página principal"
            title="Enerymy Studio Pro - Init"
          >
            <Image
              src={logo}
              alt="Logo Enyermy Studio Pro"
              width={158}
              height={48}
              className="w-[158px] h-auto block"
              priority
            />
          </Link>
          <X
            width="24"
            height="24"
            className="w-6 h-6 cursor-pointer text-primary"
            id="close-btn"
            aria-label="Cerrar menú de navegación"
            role="button"
            tabIndex={0}
            onClick={() => setIsMobileMenuOpen(false)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setIsMobileMenuOpen(false);
              }
            }}
          />
        </div>

        <div className="w-full flex justify-between items-center bg-primary px-4 py-5">
          <p className="paragraph font-normal leading-[150%] text-white">
            {isSalonExperience ? "Hair Care" : "Salon Experience"}
          </p>
          <div className="flex justify-center items-center bg-white rounded-full w-5 h-5">
            <ChevronRight className="text-primary w-3.5 h-3.5" />
          </div>
        </div>
        <nav className="w-full px-4">
          <ul className="relative flex items-start flex-col justify-center w-full">
            {currentNav?.map((item, index) => {
              const itemPathWithoutHash = item.href.split("#")[0];
              const isActive = normalized === itemPathWithoutHash;
              return (
                <li
                  key={index}
                  className={`flex flex-col items-start justify-center group gap-3.5 px-0 w-full py-9 text-start border-t border-[#E7E7E7] text-primary ${isActive ? "bg-accent text-primary uppercase px-4" : ""}`}
                >
                  <div className="w-full flex items-center justify-between">
                    <Link
                      href={localizedPath(item.href)}
                      className="relative transition-colors duration-300 flex justify-center items-center"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <p className="font-paragraph font-semibold text-[15px] leading-[150%]">
                        {item.label}
                      </p>
                    </Link>
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="flex justify-center items-center p-2 gap-2.5  ">
          <MapPin
            className={`w-4 h-auto block ${headerClasses.includes("text-white") ? "text-primary lg:text-white" : "text-primary"}`}
          />

          <Link href={localizedPath("/store-locations")}>
            <p
              className={`paragraph font-normal ${headerClasses.includes("text-white") ? "text-primary lg:text-white" : "text-primary"}`}
            >
              {content?.store}
            </p>
          </Link>
        </div>
        {/*<div className="flex flex-col justify-center items-center gap-5 w-full px-4">
          <Button />
        </div>*/}
      </div>
    </>
  );
}
