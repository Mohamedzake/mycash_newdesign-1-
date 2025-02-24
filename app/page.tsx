"use client";
import React from "react";

import Hero from "./_components/Hero";
import Solutions from "./_components/Solutions";
import Carousel from "./_components/Carousel";
import AboutMyCash from "./_components/AboutMyCash";
import Agreements from "./_components/Agreements";
import Promotion from "./_components/Promotion";
import ContactUs from "./_components/ContactUs";
import Footer from "./_components/Footer";
import WhatsApp from "./_components/WhatsApp";
export default function Home() {
  return (
    <>
      <main className="">
        <Hero />
        <WhatsApp />
        <Solutions />
        <Carousel />
        <AboutMyCash />
        <Agreements />
        <Promotion />
        <ContactUs />
        <Footer />
      </main>
    </>
  );
}
