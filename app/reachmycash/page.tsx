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

const LandingPage = () => {
  return (
    <section className=" ">
      <Header />
      <WhatsApp />
      <LandingForm />
      <WhyMyCash />
      <WhyChooseMyCash />
      <div className=" flex justify-center items-center flex-col ">
        <CompanyLogos />
        <CompanyLogos2 />
        <CompanyLogos3 />
      </div>
    </section>
  );
};

export default LandingPage;
