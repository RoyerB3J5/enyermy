"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import FormPopup from "./FormPopup";

const DISMISSAL_KEY = "enyermy-popup-dismissed";

interface PopupProps {
  content?: {
    title: string;
    description: string;
    button: string;
  };
}
export default function Popup({ content }: PopupProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(DISMISSAL_KEY)) return;

    const openTimer = window.setTimeout(() => setIsOpen(true), 0);
    return () => window.clearTimeout(openTimer);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        sessionStorage.setItem(DISMISSAL_KEY, "true");
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleClose = () => {
    sessionStorage.setItem(DISMISSAL_KEY, "true");
    setIsOpen(false);
  };

  if (!isOpen || !content) return null;

  return (
    <section
      className="fixed inset-0 z-[100] flex h-screen w-screen items-center justify-center overflow-y-auto bg-black/50 px-5 py-5 md:px-0"
      role="dialog"
      aria-modal="true"
      aria-labelledby="popup-title"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center w-full max-w-[832px]">
        <div className="w-full h-full relative overflow-hidden">
          <img
            src="/images/popup.webp"
            alt="Popup"
            className="w-full h-full object-cover"
            decoding="async"
            loading="eager"
          />
        </div>
        <div className="w-full h-auto bg-white p-6 flex flex-col gap-4 justify-center items-center relative ">
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close popup"
            className="absolute top-6 right-6 text-[#151515] hover:text-black transition-colors cursor-pointer"
          >
            X
          </button>
          <Link href="/">
            <img
              src="/images/logo.svg"
              alt="Enyermy Studio Pro"
              width={158}
              height={48}
              className="w-[118px] h-auto"
              decoding="async"
              loading="eager"
            />
          </Link>
          <p
            id="popup-title"
            className="text-[17px] font-medium leading-[150%] tracking-[-0.5px] uppercase text-start w-full"
          >
            {content.title}
          </p>
          <p className="text-[17px] font-normal leading-[150%] tracking-[-0.5px] text-left">
            {content.description}
          </p>
          <FormPopup />
        </div>
      </div>
    </section>
  );
}
