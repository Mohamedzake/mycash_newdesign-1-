import React from "react";
import Header from "./Header";
import { useTranslations } from "next-intl";
// import Link from 'next/link';
import Image from "next/image";

import ar_hero_web from "../../public/ar_her_web.webp";
import en_hero_web from "../../public/en_hero_web.webp";
import hero_mobile from "../../public/hero_mobile.webp";
// import Brands from "./Brands";
import FreeTrialButton from "./FreeTrialButton";
import { useLocale } from "../layout";
// import CompanyLogos from "./CompanyLogos";
import { InfiniteMovingCardsDemo } from "./InfiniteMovingCardsDemo";

const Hero = () => {
  const t = useTranslations("mainpage");
  const { currentLocale } = useLocale();
  const isArabic = currentLocale === "ar";

  return (
    <div className="flex justify-between items-center text-center ">
      <div className="flex flex-col items-center justify-between w-screen  h-auto overflow-hidden ">
        <div className="h-20 ">
          <Header />
        </div>
        <div className="text-balance md:w-[95%] lg:w-[90%] xl:w-[70%] 2xl:w-[60%] flex flex-col md:*:!leading-[2.2] lg:*:!leading-[1.9] pt-4 md:pt-10 xxs:mt-[8px] xs:mt-auto">
          <h2 className="text-2xl  text-primary-blue font-bold text-center sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-4xl">
            {/* <h2 className="text-base md:text-sm lg:text-6xl xl:text-2xl 2xl:text-3xl text-primary-blue font-bold text-center"> */}
            {t("description_title")}
          </h2>
          <h1 className="text-base sm:text-xl lg:text-4xl xl:text-2xl 2xl:text-3xl flex flex-col items-center justify-center py-2 px-2 lg:pt-8  text-primary-grey-grey w-[70%] m-auto">
            {/* <h1 className="text-xl flex flex-col items-center justify-center  font-bold md:text-xl lg:text-3xl xl:text-3xl 2xl:text-4xl py-4 px-2 lg:pt-8 text-primary-grey-grey "> */}
            {t("main_title1")}
          </h1>
        </div>
        {/* <div className="flex flex-row justify-center pb-8 xl:pt-[1.3rem]">
                    <Link
                        href="https://play.google.com/store/apps/details?id=com.codeIn.myCash&hl=ar"
                        className="block text-white py-3 px-4 text-xs xs:px-12 col-span-5 lg:text-3xl border-2 border-primary-green bg-primary-green hover:bg-white hover:text-primary-green transition rounded-full ">
                        {t("get_trial")}
                    </Link>
                </div> */}
        <FreeTrialButton />
        <div className="img-container w-[95%] pb-10 xl:w-[70%] xl:pt-10 h-[20rem] md:h-auto">
          <Image
            src={isArabic ? ar_hero_web : en_hero_web}
            alt="Hero Image"
            className="w-full h-full hidden md:block"
          />
          <Image
            src={hero_mobile}
            alt="Hero Image"
            className="w-full h-full  md:hidden"
          />{" "}
        </div>
        {/* <CompanyLogos /> */}
        {/* <Brands /> */}
        <InfiniteMovingCardsDemo />
      </div>
    </div>
  );
};

export default Hero;
