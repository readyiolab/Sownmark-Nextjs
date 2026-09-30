import type { Metadata } from "next";
import { Poppins, Open_Sans } from "next/font/google";
import Script from "next/script";
import GA4Tracker from "@/analytics/GA4Tracker";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const openSans = Open_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Sownmark | India's Leading Digital Marketing & Software Agency",
    template: "%s | Sownmark",
  },
  description:
    "India's leading full-service digital marketing and custom software agency. Specialising in GEO, AEO, SEO, display ads, web development, and tech recruitment.",
  authors: [{ name: "Sownmark" }],
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    siteName: "Sownmark",
    images: [{ url: "https://sownmark.com/og-image.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://sownmark.com/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${openSans.variable} ${poppins.variable} font-sans`}
    >
      <head>
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body className="bg-background text-foreground antialiased min-h-screen">
        <GA4Tracker />
        {children}

        {/* Global Google Tag Manager & delayed analytics scripts matching original */}
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17005532217');
            `,
          }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17005532217"
          strategy="lazyOnload"
        />
        <Script
          id="fb-pixel"
          strategy="lazyOnload"
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
          strategy="lazyOnload"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
