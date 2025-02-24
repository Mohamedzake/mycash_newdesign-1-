"use client";
import React from "react";
import Header from "../_components/Header";

import WhyMyCash from "../_components/WhyMyCash";
import LandingForm from "../_components/LandingForm";
import WhyChooseMyCash from "../_components/WhyChooseMyCash";
import CompanyLogos from "../_components/CompanyLogos";
import CompanyLogos2 from "../_components/CompanyLogos2";
import CompanyLogos3 from "../_components/CompanyLogos3";
import WhatsApp from "../_components/WhatsApp";
import { InfiniteMovingCards } from "../_components/ui/infinite-moving-cards";

const LandingPage = () => {
  return (
    <section className=" ">
      <Header />
      <WhatsApp />
      <LandingForm />
      <WhyMyCash />
      <WhyChooseMyCash />{" "}
      <div
        dir="ltr"
        className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center"
      >
        <InfiniteMovingCards items={slides} direction="right" speed="fast" />
        <InfiniteMovingCards items={slides} direction="left" speed="fast" />
        <InfiniteMovingCards items={slides} direction="right" speed="fast" />
      </div>
      {/* <div className=" flex justify-center items-center flex-col ">
        <CompanyLogos />
        <CompanyLogos2 />
        <CompanyLogos3 />
      </div> */}
    </section>
  );
};

export default LandingPage;
const slides = [
  { src: "/brands/urpay.webp", alt: "Urpay" },
  { src: "/brands/mada.webp", alt: "Mada" },
  { src: "/brands/geidea.webp", alt: "Geidea" },
  { src: "/brands/alrajhi.webp", alt: "Alrajhi" },
  { src: "/brands/stcpay.webp", alt: "STC Pay" },
  { src: "/brands/zatca.webp", alt: "Zatka" },
];
