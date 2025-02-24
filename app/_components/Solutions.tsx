import Image from "next/image";
import React from "react";
import Link from "next/link";
import { useTranslations } from "use-intl";
import { TripleHeadings } from "./TripleHeadings";
import { FaArrowLeft,FaArrowRight } from "react-icons/fa6";
import { useLocale } from "../layout";

// import locale from "next-intl/locale";
const Solutions = () => {
  const t = useTranslations("solutions");
  const solutionsData = [
    {
      id: 1,
      title: t("ai_solutions"),
      desc: t("ai_solutions_desc"),
      imgSrcAr: "solutions/ai_ar.webp",
      imgSrcEn: "solutions/ai_en.webp",
      link:"/solutionsai"
    },
    {
      id: 2,
      title: t("sales_solutions"),
      desc: t("sales_solutions_desc"),
      imgSrcAr: "solutions/sales_ar.webp",
      imgSrcEn: "solutions/sales_en.webp",
      link:"/sales"

    },
    {
      id: 3,
      title: t("pos_solutions"),
      desc: t("pos_solutions_desc"),
      imgSrcAr: "solutions/pos_ar.webp",
      imgSrcEn: "solutions/pos_en.webp",
      link:"/pos"

    }
  ]
  const { currentLocale } = useLocale();
  const isArabic = currentLocale === "ar";

  return (
    <section className="py-10">
      <TripleHeadings title={t("discover_our_solutions")} description={t("control_your_payment")} />
      <div className="container m-auto flex flex-col md:flex-row gap-y-4 xl:px-8">

        {/* content 1*/}


        <div className=" mx-2 flex flex-col md:flex-row gap-6 ">
          {solutionsData.map((item) => (
            <div key={item.id} className="flex flex-col rounded-2xl w-full shadow-[0px_0px_31px_-5px_rgba(0,_0,_0,_0.35)]">
              <div className="p-4">
                <Image
                  src={isArabic ? item.imgSrcAr : item.imgSrcEn}
                  width={1000}
                  height={500}
                  alt="Solutions image"
                  className="rounded-2xl w-3/3"
                />
              </div>
              <div  className="">
                <h3 className="text-lg text-center font-medium my-auto py-4 xs:text-xl md:py-2 lg:text-3xl lg:font-bold lg:pt-6 lg:text-[28.16px]">
                  {item.title}
                </h3>
                <p className="text-sm leading-5 px-4 mb-5 text-center xs:text-base lg:font-normal lg:text-base lg:pt-4 ">
                  {item.desc}
                </p>
              </div>

              <div className="order-3 flex flex-row md:flex-row-reverse items-end justify-end md:justify-normal pe-4 h-full ml-4 mb-4">
              <Link
                href={item.link}
                className="bg-primary-green px-6 py-2 rounded-full text-white  hover:bg-white hover:text-primary-green  hover:font-bold border-2 border-primary-green transition"
              >
                {isArabic ? <FaArrowLeft href={item.link} className="text-base "/> : <FaArrowRight href={item.link} className="text-base "/>}
               
              </Link>

          </div>

          </div>
          ))}
        </div>

      </div>

      <div className="flex flex-row justify-center py-6 ">
        <Link
          href="https://play.google.com/store/apps/details?id=com.codeIn.myCash&hl=ar"
          className="block text-white py-3 px-12 text-xs sm:px-20 md:px-28 lg:px-32 col-span-5 lg:text-lg border-2 border-primary-green bg-primary-green hover:bg-white hover:text-primary-green transition rounded-full font-bold">
          {t("get_trial")}
        </Link>
      </div>
    </section>
  );
};

export default Solutions;
