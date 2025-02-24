"use client";
import Image from "next/image"
import Header from "../_components/Header"
import { TripleHeadings } from "../_components/TripleHeadings"

import solutions_img from "../../public/solutions_ai.webp"
// import MyCashAdvantages from "../_components/MyCashAdvantages"
import ContactUs from "../_components/ContactUs"
import Footer from "../_components/Footer"
import WhatsApp from "../_components/WhatsApp";
import { useTranslations } from "next-intl";
import FreeTrialButton from "../_components/FreeTrialButton";
const Solutions = () => {
    const t = useTranslations("solutionsai")
    const aiData = [
        { point: t("point1"), desc: t("desc1") },
        { point: t("point2"), desc: t("desc2") },
        { point: t("point3"), desc: t("desc3") },
        { point: t("point4"), desc: t("desc4") },
        { point: t("point5"), desc: t("desc5") },
        { point: t("point6"), desc: t("desc6") },

    ]



    return (
        <section className="">
            <div className="bg-solutions_bg bg-cover bg-no-repeat bg-center w-full aspect-square h-[40vh] md:h-[60vh] ">
                <Header />
                <WhatsApp />

                <div className="flex flex-col justify-center items-center gap-y-10 w-full h-full text-center ">

                    <div className=' text-white flex flex-col gap-y-10 '>
                        <h1 className="text-2xl font-bold sm:text-2xl xl:text-4xl 2xl:text-5xl ">
                            {t("title")}
                        </h1>
                        <h2 className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl px-4">
                            {t("sub_title")}
                        </h2>
                    </div>


                    <FreeTrialButton />

                </div>


            </div>

            <div className="bg-[#FBFBFB]">
                <TripleHeadings title={t("about")} description={t("description")} subheading={t("sub_heading")} />
            </div>

            <div className="container mx-auto gap-6 ">
                <div className="flex flex-col lg:flex-row justify-center items-center gap-y-4 ">
                    <div className="text-center  flex flex-col bg-white *:!leading-10">
                        <h3 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-primary-blue">{t("mycashai_heading")}</h3>
                        <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl ">{t("mycashai_feature")}  </h4>
                    </div>

                    <div className="three w-6/12">
                        <Image className="block m-auto" src={solutions_img} alt="solutions img" />
                    </div>
                </div>

                <div className="one grid grid-cols-12 gap-4 py-6 text-center mx-6 ">
                    {aiData.map((item, index) => (
                        <div key={index} className="col-span-12 md:col-span-6 lg:col-span-4 border  shadow-[0_3px_20px_1px_rgba(0,0,0,0.10)] p-5 rounded-3xl *:!leading-10">
                            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-primary-green ">{item.point}</h3>
                            <h5 className="text-base md:text-lg lg:text-xl xl:text-2xl font-medium  ">{item.desc}</h5>
                        </div>
                    ))}

                </div>
            </div>

            {/* <MyCashAdvantages /> */}

            <ContactUs />
            <Footer />

        </section>
    )
}

export default Solutions