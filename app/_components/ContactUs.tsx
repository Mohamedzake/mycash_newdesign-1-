import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const ContactUs = () => {
  const t = useTranslations("contact");
  return (
    // bg-[#f6f6f6]
    <section className=" bg-[#f6f6f6] py-4">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center  lg:py-12 px-6 text-center">


      <div className="py-6 flex flex-col gap-6">
        <h2 className="text-1xl sm:text-2xl md:text-4xl font-bold">{t("contact_title")}</h2>
        <h3 className="text-md sm:text-lg md:text-2xl">{t("contact_description")}</h3>
      </div>
      <Link href="/contactus" className="bg-primary-green py-2 px-12 md:px-12 md:py-2 md:text-lg hover:text-green border-2 border-primary-green hover:bg-white text-white rounded-full">{t("get_in_touch")}</Link>
      </div>
    </section>
  );
};

export default ContactUs;
