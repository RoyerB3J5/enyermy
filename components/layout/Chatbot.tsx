"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";

declare global {
  interface Window {
    LC_API?: {
      open_chat?: () => void;
      toggle?: () => void;
    };
    leadconnector?: {
      open?: () => void;
    };
  }
}

const WIDGET_ID = "6a7b2b3d187766e8c29e5e3c";
const RES_URL = "https://widgets.leadconnectorhq.com/chat-widget/loader.js";
const SRC = "https://widgets.leadconnectorhq.com/loader.js";

export default function ChatbotWidget() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const loadedRef = useRef(false);
  const scrollDetectedRef = useRef(false);
  const idleTimerRef = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );
  const [shouldLoadScript, setShouldLoadScript] = useState(false);

  useEffect(() => {
    if (!wrapperRef.current || !buttonRef.current) return;

    const wrapper: HTMLDivElement = wrapperRef.current;
    const btn: HTMLButtonElement = buttonRef.current;
    const isMobile = window.innerWidth <= 640;

    // Delega la inyección real del <script> a next/script (dedupe,
    // no-bloqueante y limpieza automática); aquí solo marcamos el trigger.
    function insertScript() {
      if (loadedRef.current) return;
      loadedRef.current = true;
      setShouldLoadScript(true);
    }

    function triggerAnimation() {
      if (wrapper && !wrapper.classList.contains("animate-button")) {
        wrapper.classList.add("animate-button");
      }
    }

    function onFirstInteraction() {
      clearTimeout(idleTimerRef.current);
      triggerAnimation();
      insertScript();
      removeInteractionListeners();
    }

    function removeInteractionListeners() {
      window.removeEventListener("pointerdown", onFirstInteraction);
      window.removeEventListener("keydown", onFirstInteraction);
    }

    function onScroll() {
      const currentScroll =
        window.pageYOffset || document.documentElement.scrollTop;

      if (isMobile && !scrollDetectedRef.current && currentScroll > 200) {
        scrollDetectedRef.current = true;
        wrapper.classList.remove("hidden-mobile");
        wrapper.classList.add("visible-mobile");
        triggerAnimation();
        insertScript();
        window.removeEventListener("scroll", onScroll);
      }
    }

    function onButtonClick(e: MouseEvent) {
      e.preventDefault();
      if (!loadedRef.current) {
        clearTimeout(idleTimerRef.current);
        triggerAnimation();
        insertScript();
        return;
      }
      try {
        if (window.LC_API && typeof window.LC_API.open_chat === "function") {
          window.LC_API.open_chat();
        } else if (
          window.LC_API &&
          typeof window.LC_API.toggle === "function"
        ) {
          window.LC_API.toggle();
        } else if (
          window.leadconnector &&
          typeof window.leadconnector.open === "function"
        ) {
          window.leadconnector.open();
        }
      } catch {
        /* no-op */
      }
    }

    if (isMobile) {
      wrapper.classList.add("hidden-mobile");
      window.addEventListener("scroll", onScroll, { passive: true });
    } else {
      idleTimerRef.current = setTimeout(() => {
        triggerAnimation();
        insertScript();
      }, 3000);

      window.addEventListener("pointerdown", onFirstInteraction, {
        once: true,
      });
      window.addEventListener("keydown", onFirstInteraction, { once: true });
    }

    btn.addEventListener("click", onButtonClick);

    return () => {
      clearTimeout(idleTimerRef.current);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointerdown", onFirstInteraction);
      window.removeEventListener("keydown", onFirstInteraction);
      btn.removeEventListener("click", onButtonClick);
    };
  }, []);

  return (
    <>
      {shouldLoadScript && (
        <Script
          src={SRC}
          data-resources-url={RES_URL}
          data-widget-id={WIDGET_ID}
          strategy="lazyOnload"
        />
      )}

      <div className="chatbot-wrapper" ref={wrapperRef} aria-hidden="false">
        <button
          id="chatbot-toggle"
          ref={buttonRef}
          aria-label="Abrir chat"
          className="chatbot-button"
          style={{ opacity: 0, pointerEvents: "none" }}
        >
          💬
        </button>
      </div>

      <noscript>
        <a href="/connect/" className="chatbot-noscript">
          Contacta con nosotros
        </a>
      </noscript>

      <style jsx global>{`
        .chatbot-wrapper,
        #chat-widget-container,
        .lc_chat-widget,
        div[id*="chat-widget"] {
          z-index: 40 !important;
        }

        @keyframes slideInUp {
          from {
            transform: translateY(80px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .chatbot-wrapper {
          position: fixed;
          right: 20px;
          bottom: 20px;
          z-index: 20;
        }

        .chatbot-button {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: #151515;
          color: #fff;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition:
            opacity 0.4s ease,
            transform 0.4s ease;
        }

        .chatbot-wrapper.animate-button .chatbot-button {
          animation: slideInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          pointer-events: auto !important;
        }

        .chatbot-wrapper.hidden-mobile {
          display: none;
        }

        @media (max-width: 640px) {
          .chatbot-wrapper {
            display: none;
          }

          .chatbot-wrapper.visible-mobile {
            display: block;
          }
        }

        .chatbot-noscript {
          position: fixed;
          right: 20px;
          bottom: 20px;
          background: #151515;
          color: #fff;
          padding: 8px 12px;
          border-radius: 8px;
          text-decoration: none;
        }
      `}</style>
    </>
  );
}
