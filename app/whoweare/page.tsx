"use client";
import React from "react";
import OurVisionIntro from "../_components/OurVisionIntro";
import Footer from "../_components/Footer";
import ContactUs from "../_components/ContactUs";
import OurVisionBody from "../_components/OurVisionBody";

const page = () => {
  return <section>
    <OurVisionIntro /> 
    <OurVisionBody />
    <ContactUs />
    <Footer />

  </section>;
};

export default page;
