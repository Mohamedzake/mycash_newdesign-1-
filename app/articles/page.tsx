"use client";
import React from "react";
import Header from "../_components/Header";
import WhatsApp from "../_components/WhatsApp";
import { useTranslations } from "next-intl";
import { articles } from "@/app/articles/articles";
// import Image from "next/image";
import ContactUs from "../_components/ContactUs";
import Footer from "../_components/Footer";


const Articles = () => {
  const t = useTranslations("Articles");
  console.log(articles);
  return (
    <section>
      <div className="bg-articles_bg bg-cover bg-no-repeat bg-center w-full aspect-square h-[40vh] md:h-[60vh] relative  ">
        <Header />
        <WhatsApp />

      <div className="flex flex-col justify-center items-center gap-10 w-full h-full text-center ">
        <div className="text-2xl text-white flex flex-col gap-y-10  items-center">
          <h1 className="text-2xl font-bold sm:text-2xl xl:text-4xl 2xl:text-5xl ">
            {t("title")}
          </h1>
          <h2 className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl px-4 w-8/12 text-center">
            {t("sub_title")}
          </h2>
        </div>
      </div>
      </div>

      <div className=" bottom-60 w-full m-auto ">
        <div className=" m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {articles.map((article) => (
          <div key={article.id} className="w-10/12 p-4 text-center m-4 rounded-2xl shadow-[rgba(0,0,0,0.2)_0px_4px_12px] bg-white">
              {/* <Image src={article.imgSrc} alt={article.title} width={100} height={100} className="w-[500px] h-[200px]"/> */}
            <h3 className="text-xl font-bold text-primary-blue">{article.title}</h3>
            <p>{article.description}</p>
          </div>
        ))}

        </div>
      </div>
        <ContactUs />
        <Footer />

    </section>
  );
};

export default Articles;
