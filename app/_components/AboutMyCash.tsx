import React from "react";

import mycashlogo from "../../public/feature_logo.webp";
import ar_ai from "../../public/ar_mycash_ai.webp";
import en_ai from "../../public/en_mycash_ai.webp";

import ar_mycashscreen from "../../public/ar_mycashscreen.webp";
import en_mycashscreen from "../../public/en_mycashscreen.webp";

import Image from "next/image";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useLocale } from "../layout";

function AboutMyCash() {
      const { currentLocale } = useLocale();
      const isArabic = currentLocale === "ar";
      const t = useTranslations("mycashai")
  return (
    <section className=" m-auto container mx-auto mt-12">
        <Image src={mycashlogo} alt="Logo" className="w-40 block m-auto h-full" width={50} height={50}/>

        <h2 className="w-[100%] lg:w-[80%] m-auto text-xl  md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl py-4 px-2 lg:py-8">
            <div className="leading-[2] text-center text-balance ">
              {t("description_title_l1")}
            </div>
        </h2>
        <Image src={isArabic ? ar_ai : en_ai} alt="Logo" className="w-100% lg:w-[95%] block m-auto " width={2000} height={2000}/>
        <Image src={isArabic ? ar_mycashscreen : en_mycashscreen} alt="Logo" className="w-[70%] block m-auto" width={2000} height={2000}/>
        <div className="flex flex-col sm:flex-row gap-6 justify-ce items-center w-[80%] sm:w-[90%] lg:w-[60%] m-auto text-base sm:text-lg md:text-xl">
            <Link className="bg-primary-green text-white border-2 border-primary-green shadow-[0px_0px_31px_-5px_rgba(0,_0,_0,_0.35)] rounded-3xl text-center hover:bg-white hover:text-primary-green hover:shadow-lg transition px-4 text-nowrap py-2 w-full" href="https://play.google.com/store/apps/details?id=com.codeIn.myCash&hl=ar">{t("get_trial")}</Link>
            <Link className="bg-white text-primary-green border-2 border-primary-green shadow-[0px_0px_31px_-5px_rgba(0,_0,_0,_0.35)] rounded-3xl text-center hover:bg-primary-green hover:text-white hover:shadow-lg transition px-4 py-2 w-full" href="/solutionsai">{t("learn_more")}</Link>
        </div>
    </section>
  );
}

export default AboutMyCash;
