import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useLocale } from "../layout";
const Brands: React.FC = () => {
  const { currentLocale } = useLocale();

  const slides = [
    { src: "/brands/urpay.webp", alt: "Urpay" },
    { src: "/brands/mada.webp", alt: "Mada" },
    { src: "/brands/geidea.webp", alt: "Geidea" },
    { src: "/brands/alrajhi.webp", alt: "Alrajhi" },
    { src: "/brands/stcpay.webp", alt: "STC Pay" },
    { src: "/brands/zatca.webp", alt: "Zatka" },
  ];

  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(2);
      } else if (window.innerWidth < 770) {
        setVisibleCount(3);
      } else {
        setVisibleCount(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const slideWidth = 100 / visibleCount;
  const repeatCount = 20;

  return (
    <div
      className="relative w-[95%] overflow-hidden bg-primary-10 shadow-[rgba(0,0,0,0.2)_0px_4px_12px] "
      style={{
        maskImage:
          "linear-gradient(var(--mask-direction, to right), hsl(0 0% 0% / 0), hsl(0 0% 0% / 1) 20%, hsl(0 0% 0% / 1) 80%, hsl(0 0% 0% / 0))",
        WebkitMaskImage:
          "linear-gradient(var(--mask-direction, to right), hsl(0 0% 0% / 0), hsl(0 0% 0% / 1) 20%, hsl(0 0% 0% / 1) 80%, hsl(0 0% 0% / 0))",
      }}
    >
      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(${currentLocale === "ar" ? "300%" : "0"});
          }
          100% {
            transform: translateX(${currentLocale === "ar" ? "0" : "-300%"});
          }
        }

        // .slider-track {
        //   display: flex;
        //   width: calc(40%);
        //   animation: slide 17s linear infinite;
        //   column-gap: 8px;
        //   margin-bottom: 30px;
        //   margin-top: 100px;
        // }

        @media (max-width: 640px) {
          .slider-track {
            display: flex;
            width: calc(80%);
            animation: slide 17s linear infinite;
            column-gap: 8px;
            margin-bottom: 30px;
          }
        }

        @media (min-width: 640px) {
          .slider-track {
            display: flex;
            width: calc(80%);
            animation: slide 17s linear infinite;
            column-gap: 8px;
            margin-bottom: 30px;
          }
        }

        @media (min-width: 768) {
          .slider-track {
            display: flex;
            width: calc(90%);
            animation: slide 27s linear infinite;
            column-gap: 8px;
            margin-bottom: 30px;
          }
        }

        @media (min-width: 1024) and (max-width: 3000px) {
          .slider-track {
            display: flex;
            width: calc(20%);
            animation: slide 27s linear infinite
            column-gap: 8px;
            margin-bottom: 30px;
            background-color: red;
          }
        }

        .slide {
          width: calc(${slideWidth}% - 8px);
          flex-shrink: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0 4px;
        }

        img {
          object-fit: contain;
        }
      `}</style>

      <div className="slider-track py-2">
        {[...Array(repeatCount)].map((_, i) => (
          <div key={`original-${i}`} className="slide">
            <Image
              src={slides[i % slides.length].src}
              alt={slides[i % slides.length].alt}
              width={150}
              height={150}
              className="object-contain bg-primary-10 p-2"
              priority={i < visibleCount}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
