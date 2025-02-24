import React from 'react'
import { useTranslations } from "next-intl";
import Image from 'next/image';
import Form from './Form';

const LandingForm = () => {
  const t = useTranslations("landing");

  return (
    <>
      <section className="container mx-auto pt-12 ">

        <div className='flex flex-col justify-center items-center m-auto '>

        <div className='flex flex-col justify-center items-center pt-10 pb-2'>
          <h1 className="text-xl font-bold md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl py-2 px-2 lg:py-8 text-primary-blue">
            {t("header_maintitle")}
          </h1>
          <h2 className="text-base md:text-sm lg:text-lg xl:text-2xl 2xl:text-3xl ">
            {t("header_subtitle")}
          </h2>
        </div>


        <div className='form-content flex flex-col-reverse lg:flex-row '>
        <Form />

          <div className='left flex justify-center items-start mb-6 lg:-m-0 '>
            <Image src="/reachme_img.webp" alt='reachme img' width={900} height={200} className='h-full' />
          </div>
          

        </div>

      </div>
    </section>
   
    </>
  )
}

export default LandingForm;