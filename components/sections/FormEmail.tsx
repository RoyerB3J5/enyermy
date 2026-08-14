"use client";

import { useState } from "react";
import Script from "next/script";

export default function FormEmail() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full max-w-md md:max-w-lg fade-up">
      {isLoading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-white">
          <div className="w-8 h-8 border-4 border-gray-200 border-t-gray-500 rounded-full animate-spin" />
        </div>
      )}

      <div className="w-full flex flex-col justify-center items-start">
        <iframe
          src="https://link.enyermyhairstudio.com/widget/form/YzGaoVms3EU66naMf3Tn"
          className="w-full h-full border-none relative z-40"
          id="inline-YzGaoVms3EU66naMf3Tn"
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Forms suscribe"
          data-height="400"
          data-layout-iframe-id="inline-YzGaoVms3EU66naMf3Tn"
          data-form-id="YzGaoVms3EU66naMf3Tn"
          title="Forms suscribe"
          onLoad={() => setIsLoading(false)}
          sandbox="allow-forms allow-scripts allow-popups allow-same-origin"
          loading="eager"
        />
      </div>

      <Script
        src="https://link.enyermyhairstudio.com/js/form_embed.js"
        strategy="lazyOnload"
      />
    </div>
  );
}
