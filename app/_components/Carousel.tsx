
import React, { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image, { StaticImageData } from "next/image";
import gsap from "gsap";
import "swiper/css";
import { TripleHeadings } from "./TripleHeadings";
import img1 from "@/public/Slider/img1.webp";
import img2 from "@/public/Slider/img2.webp";
import img3 from "@/public/Slider/img3.webp";
import img4 from "@/public/Slider/img4.webp";
import img5 from "@/public/Slider/img5.webp";
import img6 from "@/public/Slider/img6.webp";
import { GoDotFill } from "react-icons/go";
import { useLocale } from "../layout";

type TranslatedPoints = string[];
interface SwiperItem {
  id: number;

  img: StaticImageData;
  title: string;
  points: TranslatedPoints;
}

const Carousel: React.FC = () => {
  const t = useTranslations("carousel");
  const { currentLocale } = useLocale();
  const locale = currentLocale;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const swiperData: SwiperItem[] = [
    {
      id: 1,
      img: img1,
      title: t("title1"),
      points: [t("pont1_1"), t("pont1_2"), t("pont1_3")],
    },
    {
      id: 2,
      img: img2,
      title: t("title2"),
      points: [t("pont2_1"), t("pont2_2"), t("pont2_3")],
    },
    {
      id: 3,
      img: img3,
      title: t("title3"),
      points: [t("pont3_1"), t("pont3_2"), t("pont3_3")],
    },
    {
      id: 4,
      img: img4,
      title: t("title4"),
      points: [t("pont4_1"), t("pont4_2"), t("pont4_3")],
    },
    {
      id: 5,
      img: img5,
      title: t("title5"),
      points: [t("pont5_1"), t("pont5_2"), t("pont5_3")],
    },
    {
      id: 6,
      img: img6,
      title: t("title6"),
      points: [t("pont6_1"), t("pont6_2"), t("pont6_3")],
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
  }, [swiperData,locale]);

  return (
    <section className="text-center">
      <TripleHeadings
        title={t("special_features")}
        description={t("desc1")}
        subheading={t("subtitle")}
      />
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper.el as HTMLDivElement;
        }}
        key={locale}

        navigation={true}
        modules={[Autoplay]}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        speed={1200}
        className="mySwiper"
      >
        {swiperData.map((item) => (
          <SwiperSlide key={item.id} className="">
            <section className="grid grid-cols-1 lg:grid-cols-4 mx-8 bg-white lg:h-[260px] md:w-[60%] lg:w-[70%] md:mx-auto ">
              
              <div className={`text-content pb-6 md:pb-0 col-span-2 order-1 lg:order-2 h-full w-full flex-col justify-between `}>
                <h2 className={`text-xl sm:text-lg md:text-2xl lg:text-3xl font-bold text-primary-blue w-full text-start pt-4`}>
                  {item.title}
                </h2>
                
                <div
                  className={`w-full h-full flex-col `}
                >
                  {item.points.map((point, index) => (
                    <div key={index} className={`text-base lg:text-xl py-1 md:py-2 lg:py-4  `}>
                          <div className="flex items-center gap-2  "> 
                            <GoDotFill /> 
                            {point}
                          </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="m-auto col-span-2 order-2 lg:order-2 ">
                <Image
                  src={item.img}
                  width={500}
                  height={500}
                  alt="image"
                  className="object-cover rounded-3xl transition-transform duration-500 ease-in-out"
                />
              </div>

            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Carousel;
