import { useTranslations } from 'next-intl'
import React from 'react'
import { useLocale } from "../layout";

const ContactUsForm = () => {
  const t = useTranslations("contactustoday")
    const { currentLocale } = useLocale();
    const isArabic = currentLocale === "ar";
  return (
    <div className='border rounded-3xl h-full  text-sm p-4 bg-[#FCFEFF] '>
        <form action="" className='flex flex-col gap-4 '>
          
          <div className='flex flex-col gap-4 '>

          <div className='email flex flex-col bg-red'>
              <label htmlFor="email" className='pb-2 '>{t("email")}</label>
              <input type="email" placeholder={t("email_text")} id='email' className='py-2 rounded-xl outline-none border ps-4'/>
            </div>


            <div className='your_name flex flex-col'>
              <label htmlFor="name" className='pb-2'>{t("name")}</label>
              <input type="text" placeholder={t("name_text")} id='name' className='py-2 rounded-xl outline-none border ps-4' />
            </div>

          </div>

          <div className=' flex flex-col gap-4'>
            <div className='phone flex flex-col bg-red'>
                <label htmlFor="tel" className='pb-2'>{t("phone")}</label>
                <input type="tel" placeholder={t("phone_text")} id='tel' className={` py-2 rounded-xl outline-none border ${isArabic ? " text-right pr-4" : "pl-4" }`}/>
              </div>

              <div className='company_name flex flex-col '>
                <label htmlFor="company_name" className='pb-2'>{t("company_name")}</label>
                <input type="text" placeholder={t("company_name_text")} id='company_name' className='py-2 rounded-xl outline-none border ps-4'/>
              </div>
          </div>

            <div className='message flex flex-col'>
              <label htmlFor="msg" className='pb-2'>{t("your_msg")}</label>
              <textarea cols={20} rows={6} placeholder={t("your_msg_area")} id='msg' className='py-2 rounded-xl outline-none border ps-4'/>
            </div>
            <button className='bg-primary-blue text-white w-full py-2 rounded-full border-primary-blue border-2 hover:bg-white hover:text-primary-blue transition'>{t("send")}</button>
        </form>
    </div>
  )
}

export default ContactUsForm