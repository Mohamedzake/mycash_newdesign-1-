"use client";

import { useTranslations } from "next-intl";
import Header from "./Header"

const OurVisionIntro = () => {
    const t = useTranslations("ourvisionintro")
    return (
        <section className="">
            <div className="bg-herobg bg-cover bg-no-repeat bg-center w-full aspect-[1.3/1] xl:h-[488px]">
                <Header />
                <div className="flex flex-col justify-center items-center gap-6 w-full h-full text-center">

                    <div className='text-2xl text-white flex flex-col gap-y-4 xl:-mt-30 '>
                        <h2 className="text-2xl font-bold md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl ">
                        {t("title")}

                        </h2>
                        <p className="w-[95%] lg:w-[50%] m-auto text-xs xs:text-base sm:text-lg leading-6 lg:text-xl sm:leading-10 lg:leading-10">
                            {t("desc")}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurVisionIntro