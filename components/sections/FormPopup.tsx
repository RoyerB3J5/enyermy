"use client";

import { useState } from "react";
import Script from "next/script";

export default function FormPopup() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full">
      {isLoading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-white">
          <div className="w-8 h-8 border-4 border-gray-200 border-t-gray-500 rounded-full animate-spin" />
        </div>
      )}

      <div className="w-full flex flex-col justify-center items-start">
        <iframe
          src="https://link.enyermyhairstudio.com/widget/form/8bxZfo2KzzDxOQGohYK1"
          className="w-full h-full border-none relative z-40"
          id="inline-8bxZfo2KzzDxOQGohYK1"
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Sign Up"
          data-height="400"
          data-layout-iframe-id="inline-8bxZfo2KzzDxOQGohYK1"
          data-form-id="8bxZfo2KzzDxOQGohYK1"
          title="Sign Up"
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
