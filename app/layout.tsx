/* eslint-disable @next/next/inline-script-id */
/* eslint-disable @next/next/no-script-component-in-head */

"use client";
import "./globals.css";
import { IBM_Plex_Sans_Arabic, IBM_Plex_Sans } from "next/font/google";
import { IntlProvider } from "next-intl";
import enMessages from "@/public/dictionaries/en.json";
import arMessages from "@/public/dictionaries/ar.json";
import React, {
  useState,
  useEffect,
  ReactNode,
  createContext,
  useContext,
} from "react";
// import Head from "next/head";
import Script from "next/script";

type Messages = Record<string, string>;

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: "400",
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

interface LocaleContextType {
  currentLocale: string | null;
  setLocale: (locale: string) => void;
}

const LocaleContext = createContext<LocaleContextType>({
  currentLocale: "ar",
  setLocale: () => { },
});

export const useLocale = () => useContext(LocaleContext);

export default function RootLayout({ children }: { children: ReactNode }) {
  const [currentLocale, setLocale] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLocale = localStorage.getItem("locale") || "ar";
      setLocale(savedLocale);
    }
  }, []);

  const updateLocale = (locale: string) => {
    setLocale(locale);
    localStorage.setItem("locale", locale);
  };

  const messages: Messages =
    currentLocale === "en"
      ? (enMessages as unknown as Messages)
      : (arMessages as unknown as Messages);

  const fontClass =
    currentLocale === "en" ? ibmPlexSans.className : ibmPlexArabic.className;

  return (
    <LocaleContext.Provider value={{ currentLocale, setLocale: updateLocale }}>
      <html
        lang={currentLocale || "ar"}
        dir={currentLocale === "ar" ? "rtl" : "ltr"}
        suppressHydrationWarning={false}
      >
        <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

          <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                            })(window,document,'script','dataLayer','GTM-T7X9PV2W');
          `,
            }}
          />






        <meta httpEquiv="cache-control" content="no-cache" />
        <meta httpEquiv="pragma" content="no-cache" />
        <meta httpEquiv="expires" content="0" />

          <meta
            name="facebook-domain-verification"
            content="kkrd506y1ao3crgzgm7wxpi08nhfsv"
          />


            <title>My Cash For POS Service</title>
        </head>



        <body className={`${fontClass} text-sm ...`}>


          <noscript>
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T7X9PV2W"
                  height="0" width="0" style={{display:"none",visibility:"hidden"}}>
            </iframe>          
          </noscript>

    
          <IntlProvider locale={currentLocale || "ar"} messages={messages}>
            {currentLocale ? children : ""}
          </IntlProvider>
        </body>
      </html>
    </LocaleContext.Provider>
  );
}



