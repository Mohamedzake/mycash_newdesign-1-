

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import cashaicams from "@/public/cashaicams.png";
import cashaicamswide from "@/public/cashaicamswide.png";
import mycashaismall from "@/public/mycashaismall.png";

import { useLocale } from "../layout";

function AboutSection() {
  const { currentLocale } = useLocale();
  console.log(currentLocale);
  const t = useTranslations("mycashai");

  return (
    <section className="relative bg-primary-30 h-auto">
      <div className="absolute hidden lg:block bg-primary-30 inset-0">
        <Image
          src={cashaicamswide}
          layout="fill"
          placeholder="blur"
          quality={80}
          className={`object-cover bg-primary-30 ${
            currentLocale === "en" ? "transform scale-x-[-1]" : ""
          }`}
          alt="bgAlt"
        />
      </div>
      <div className="absolute block lg:hidden bg-primary-30 inset-0">
        <Image
          src={mycashaismall}
          layout="fill"
          placeholder="blur"
          quality={80}
          className={`object-cover bg-primary-30 ${
            currentLocale === "en" ? "transform scale-x-[-1]" : ""
          }`}
          alt="mycashai"
        />
      </div>

      {/* Content Section */}
      <div className="relative mx-auto flex flex-col-reverse lg:flex-row items-center justify-between lg:h-[78vh]">
        {/* Text Section */}
        <div
          className={`w-full lg:w-1/2 text-center lg:text-right z-40 text-black flex flex-col justify-center lg:py-24 py-10 px-2 sm:px-10
         order-2 lg:order-2`}
        >
          <div className="flex flex-col justify-center lg:justify-end items-center lg:items-end text-center lg:text-end">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4">
              {t("title")}
            </h2>
            <p
              className={`text-lg sm:text-xl lg:text-lg ${
                currentLocale === "en" ? "pr-14" : "pl-14"
              }  mb-6 leading-relaxed`}
            >
              {t("description_title_l1")}
              {t("description_title_l2")}
              {t("description_title_l3")}
              {t("description_title_l4")}
            </p>
          </div>
          <div className="flex flex-col mx-10 md:mx-16 lg:mx-0 gap-4 mb-8">
            <div className="flex items-center justify-end gap-4 text-end sm:text-end">
              <p className="text-lg sm:text-xl lg:text-lg leading-relaxed">
                {t("point1")}
              </p>
              <div className="w-4 h-4 rounded-full bg-green-500"></div>
            </div>
            <div className="flex items-center justify-end gap-4 text-end sm:text-start">
              <p className="text-lg sm:text-xl lg:text-lg leading-relaxed">
                {t("point2")}
              </p>
              <div className="w-4 h-4 rounded-full bg-green-500"></div>
            </div>
            <div className="flex items-center justify-end gap-4 text-end sm:text-start">
              <p className="text-lg sm:text-xl lg:text-lg leading-relaxed">
                {t("point3")}
              </p>
              <div className="w-4 h-4 rounded-full bg-green-500"></div>
            </div>
          </div>

          <div className="flex flex-row sm:w-full sm:flex-col lg:flex-row justify-center items-center lg:justify-end gap-2 sm:gap-4 mb-6">
            <a className="border border-primary-green cursor-pointer text-primary-green font-bold text-lg px-2 sm:px-4 py-2 rounded-full hover:bg-primary-green transition hover:text-white w-32 sm:w-60 lg:w-auto text-center">
            {t("learn_more")}
            </a>
            <a className="bg-primary-green hidden cursor-pointer md:block text-lg text-white px-4 py-2 rounded-full hover:bg-white hover:text-primary-green hover:border hover:border-primary-green transition w-32 sm:w-60 lg:w-auto text-center">
            {t("get_trial")}
            </a>
          </div>
        </div>
        <div></div>
        {/* Background Image */}
        <div className="w-full bg-primary-30  lg:w-1/2 h-64 sm:h-80 md:h-96 lg:h-full relative order-1 lg:order-1">
          <Image
            src={cashaicams}
            placeholder="blur"
            quality={80}
            layout="fill"
            alt="bgAlt"
            className="bg-primary-30"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
