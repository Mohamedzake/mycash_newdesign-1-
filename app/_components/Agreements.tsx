
import React, { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image, { StaticImageData } from "next/image";
import gsap from "gsap";
import "swiper/css";

import snb from "@/public/agreement/snb.webp";
import mycash_snb from "@/public/agreement/mycash_snb.webp";
import paymob from "@/public/agreement/Paymob.webp";
import mycash_paymob from "@/public/agreement/mycash_paymob.webp";
import { useLocale } from "../layout";

interface SwiperItem {
  id: number;
  rightImg: StaticImageData;
  leftImg: StaticImageData;
  title: string;
}

const Agreements: React.FC = () => {
  const t = useTranslations("agreements");
  const { currentLocale } = useLocale();
  const locale = currentLocale;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const swiperData: SwiperItem[] = [
    {
      id: 1,
      rightImg: paymob,
      leftImg: mycash_paymob,
      title: t("title1"),
    },
    {
      id: 2,
      rightImg: snb,
      leftImg: mycash_snb,
      title: t("title2"),
    },
  ];

  const swiperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (swiperRef.current) {
      const swiperEl = swiperRef.current.querySelector(".swiper-slide-active");

      if (swiperEl) {
        const rightImg = swiperEl.querySelector(".right img");
        const leftImg = swiperEl.querySelector(".left img");
        const text = swiperEl.querySelector("p");

        if (rightImg && leftImg && text) {
          gsap.fromTo(
            [rightImg, leftImg, text],
            { x: 100, autoAlpha: 0 },
            {
              x: 0,
              autoAlpha: 1,
              duration: 0.8,
              stagger: 0.2,
              ease: "power2.out",
            }
          );
        }
      }
    }
  }, [swiperData]);

  return (
    <section className="text-center mt-6">
      <h1 className="text-lg font-bold md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl mb-10 py-4 px-2 lg:py-8 text-primary-blue">
        {t("heading")}
      </h1>

      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper.el as HTMLDivElement;
        }}
        navigation={true}
        modules={[Autoplay]}
        loop={true}
        key={locale}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        speed={1200}
        className="mySwiper"
      >
        {swiperData.map((item) => (
          <SwiperSlide key={item.id} className="bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 mx-8 bg-white">
              <div className="flex flex-col *:!leading-[3]">
                <div className="right flex flex-col w-full justify-around items-center md:pr-8 ">
                  <Image
                    src={item.rightImg}
                    alt={item.title}
                    width={200}
                    height={200}
                    className="w-3/4 md:w-1/2 lg:w-1/3"
                  />
                </div>

                <p className="text-sm lg:text-lg xl:text-2xl font-semibold text-primary mt-4 text-center mx-4">
                  {item.title}
                </p>
              </div>

              <div className="left w-full flex justify-center items-center">
                <Image
                  src={item.leftImg}
                  alt={item.title}
                  width={500}
                  height={500}
                  className="rounded-3xl shadow-lg"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Agreements;
