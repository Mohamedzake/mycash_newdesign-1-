import Image from 'next/image'
import React from 'react'
import vision from "@/public/vision.webp"
import mission from "@/public/mission.webp"
import { PiLightbulbFilamentLight } from "react-icons/pi";

import { TripleHeadings } from './TripleHeadings'
import { useTranslations } from 'next-intl';
const OurVisionBody = () => {
    const t = useTranslations("OurVisionBody")
    return (
        <div className='w-[90%] m-auto pb-20'>
            <TripleHeadings description={t("heading")} />
            {/* Feature Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-14 lg:gap-y-8 ">
                {/* Feature Image */}


                {/* Feature Content */}
                <div className="flex flex-col justify-center items-center lg:items-start p-2 sm:p-8 md:order-1 -mt-9">
                    <div className="bg-primary-green px-2 py-2 lg:px-2 lg:py-2 rounded-full text-white text-3xl md:text-4xl font-bold mb-4">
                        <PiLightbulbFilamentLight />
                    </div>

                    <h3 className="text-center text-2xl lg:text-3xl xl:text-4xl lg:text-start font-semibold mb-4 flex flex-col md:flex-row md:items-center gap-x-4 text-primary-green ">{t("our_vision")}</h3>


                    <p className="text-[#202020] text-base md:text-lg lg:text-xl xl:text-2xl font-medium text-center lg:text-start">
                    {t("our_vision_desc")}
                    </p>
                </div>


                <div className="flex justify-center items-center  rounded-2xl md:order-2 mb-20 lg:mb-0">
                    <div className="relative w-full max-w-2xl ">
                        <Image
                            src={mission}
                            alt="System View"
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-14">

                {/* Feature Image */}
                <div className="flex justify-center items-center rounded-2xl order-2 lg:order-1">
                    <div className="relative w-full max-w-2xl">
                        <Image
                            src={vision}
                            alt="System View"
                            className="w-full h-auto"
                        />
                    </div>
                </div>

                {/* Feature Content */}
                <div className="flex flex-col justify-center items-center lg:items-start p-2 sm:p-8 md:order-1 lg:order-1">
                    <div className="bg-primary-green px-2 py-2 lg:px-2 lg:py-2 rounded-full text-white text-3xl md:text-4xl font-bold mb-4">
                        <PiLightbulbFilamentLight />
                    </div>
                    <h3 className="text-center text-2xl lg:text-3xl xl:text-4xl lg:text-start font-semibold mb-4 flex flex-col md:flex-row md:items-center gap-x-4 text-primary-green ">{t("our_mission")}</h3>
                    <p className="text-[#202020] text-base md:text-lg lg:text-xl xl:text-2xl font-medium text-center lg:text-start">
                    {t("our_mission_desc")}
                    </p>
                </div>

            </div>



            {/* Feature 2 */}



        </div>
    )
}

export default OurVisionBody