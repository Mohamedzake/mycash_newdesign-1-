import Image from "next/image";
import React from "react";
import { useTranslations } from "use-intl";

import google_app from "@/public/google_app.webp";
import logo_white from "@/public/logo_white.webp";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { RiSnapchatLine } from "react-icons/ri";
import { AiOutlineTikTok } from "react-icons/ai";

import Copyright from "./Copyright";
import Link from "next/link";

const Footer = () => {
  const t = useTranslations("footer");
  const footerData = [{
    href:"https://www.facebook.com/Mycash360",
    icon:<FaFacebook />
  },
  {
    href:"https://www.linkedin.com/company/mycashsa",
    icon: <FaLinkedin />
  },
  {
    href:"https://x.com/mycash360",
    icon:<FaXTwitter />
  },
  {
    href:"https://www.instagram.com/mycash360/",
    icon:<BsInstagram />
  },
  {
    href:"https://www.snapchat.com/add/mycash360",
    icon:<RiSnapchatLine />
  },{
    href:"http://www.tiktok.com/@mycash360",
    icon:<AiOutlineTikTok />
  }]
  const mycashData = [
    {href:"/whoweare", text:t("about_us")},
    {href:"/package", text:t("packages")},
    {href:"/articles", text:t("our_articles")},
    {href:"/contactus", text:t("contact_us")},
  ]
  const solutionsData = [
    {href:"/solutionsai", text:t("ai_solutions")},
    {href:"/sales", text:t("sales_solutions")},
    {href:"/pos", text:t("pos_solutions")},
  ]

  return (
    <>
    
    <section className="bg-primary-blue">
      <div className="m-auto container flex flex-col gap-y-6 lg:flex lg:flex-row text-base lg:justify-around py-10 text-white text-center lg:text-start">


      <div className="lg:w-4/12  flex flex-col items-center lg:items-start justify-between">
        <Link href="/">
          <Image src={logo_white} alt="White MyCash Logo" className=" pb-6 " />
        </Link>

        <p className="text-1xl w-[80%] lg:me-auto pb-4 ">{t("footer_title")}</p>

        <div className="flex justify-center lg:justify-end gap-4 ">
          {footerData.map((item,index)=><Link key={index} href={item.href} className="border-2 border-white p-1.5 rounded-md hover:border-primary-green transition duration-100 ">
            {item.icon}
          </Link>)}
        </div>
      </div>

      <div className="flex flex-col gap-y-2 ">
        <h2 className="text-primary-green font-bold pb-2">{t("mycash")}</h2>
        {mycashData.map((item,index)=><Link key={index} href={item.href} className="hover:text-primary-green hover:font-bold duration-100 transition">{item.text}</Link>)}
      </div>

      <div className="flex flex-col gap-y-2 ">
        <h2 className="text-primary-green font-bold pb-2">{t("solutions")}</h2>
        {solutionsData.map((item,index)=><Link key={index} href={item.href} className="hover:text-primary-green hover:font-bold duration-100 transition">{item.text}</Link>)}
      </div>





      <div className="flex flex-col gap-y-4 ">
        <p className=" lg:text-start">{t("download_app")}</p>
        <Link href="https://play.google.com/store/apps/details?id=com.codeIn.myCash&hl=ar">
          <Image src={google_app} alt="google icon" className="m-auto lg:m-0 lg:me-auto"/>
        </Link>
      </div>
      </div>



    </section>
      <Copyright />
    </>
  );
};

export default Footer;
