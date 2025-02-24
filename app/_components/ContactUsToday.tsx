import { useTranslations } from 'next-intl'
import React from 'react'

import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoMdPin } from "react-icons/io";

import ContactUsForm from './ContactUsForm';

const ContactUsToday = () => {
    const t = useTranslations("contactustoday")

    const contactData = [{
        "text": t("phone_number"),
        "icon": <FaPhoneAlt />,
        "info": "966920031014+"
    }, 
    {
        "text": t("email"),
        "icon": <MdOutlineMailOutline />,
        "info": "sales@mycash.sa"
    }, 
    {
        "text": t("address"),
        "icon": <IoMdPin />,
        "info": t("address_text"),

    }]


    return (
        <section >
            <div className='container mx-auto my-6 flex flex-col  lg:grid lg:grid-cols-10 '>
                <div className='right-content col-span-4 text-center lg:text-start '>
                    <h2 className='text-primary-blue text-2xl font-bold lg:text-3xl xl:text-4xl '>{t('contactustoday')}</h2>
                    {contactData.map((item, index) => (
                            <div key={index} className='flex flex-col mb-8 text-primary-green text-xl lg:text-xl pt-4 '>
                                <div className="flex flex-col lg:flex-row gap-3 py-3 rounded-3xl ">                            
                                    <div className="text-white bg-primary-green py-1 px-1 sm:py-2 sm:px-2 rounded-full mx-auto lg:mx-0 ">{item.icon}</div>
                                    <h3 className=''>{item.text}</h3>
                                </div>

                                <p className="text-primary-grey-grey text-base px-6 font-semibold lg:text-xl">{item.info}</p>
                            </div>                        
                    ))}

                </div>
                <div className='left-content col-span-6'>
                    <ContactUsForm />
                </div>

            </div>
            
        </section>
    )
}

export default ContactUsToday