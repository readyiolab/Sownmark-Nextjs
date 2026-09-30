"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const INTERACTION_EVENTS = [
  "scroll",
  "pointerdown",
  "keydown",
  "touchstart",
  "mousemove",
] as const;

// Analytics and ad tags cost ~1-2s of main-thread time on mobile, so they load
// only after the first user interaction instead of competing with page load.
export default function ThirdPartyScripts() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const load = () => {
      setShouldLoad(true);
      INTERACTION_EVENTS.forEach((event) =>
        window.removeEventListener(event, load)
      );
    };
    INTERACTION_EVENTS.forEach((event) =>
      window.addEventListener(event, load, { passive: true })
    );
    return () =>
      INTERACTION_EVENTS.forEach((event) =>
        window.removeEventListener(event, load)
      );
  }, []);

  if (!shouldLoad) return null;

  return (
    <>
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17005532217');
            gtag('config', 'G-V24YGWR2D9', { page_path: location.pathname + location.search });
          `,
        }}
      />
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-17005532217"
        strategy="afterInteractive"
      />
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1486668442357854');
            fbq('track', 'PageView');
          `,
        }}
      />
      <Script
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8506322018386318"
        strategy="afterInteractive"
        crossOrigin="anonymous"
      />
    </>
  );
}
