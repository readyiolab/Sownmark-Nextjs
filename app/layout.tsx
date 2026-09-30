import type { Metadata } from "next";
import { Poppins, Open_Sans } from "next/font/google";
import GA4Tracker from "@/analytics/GA4Tracker";
import ThirdPartyScripts from "@/analytics/ThirdPartyScripts";
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
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var c=localStorage.getItem('sownmark-cookie-consent');if(c)document.documentElement.dataset.cookieConsent=c}catch(e){}`,
          }}
        />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
      </head>
      <body className="bg-background text-foreground antialiased min-h-screen">
        <GA4Tracker />
        {children}

        <ThirdPartyScripts />
      </body>
    </html>
  );
}
