import { useTranslations } from 'next-intl'
import React from 'react'

const WhyChooseMyCash = () => {
    const t = useTranslations("whychoosemycash")
    const descData = [{
        id: 1,
        title: t("title1"),
    }, {
        id: 2,
        title: t("title2"),

    }, {
        id: 3,
        title: t("title3"),
    }, {
        id: 4,
        title: t("title4"),

    },{
        id: 5,
        title: t("title5"),
    },{
        id: 6,
        title: t("title6"),

    }]
    return (

        <section className='text-center text-primary-blue m-auto container '>
            <div className='py-2 sm:py-4 md:py-6 lg:py-2 px-6'>
                <h2 className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold pb-4'>{t("title")}</h2>
            </div>

            <div className='desc grid  lg:grid-cols-2 '>
                {descData.map((item, index) => (
                    <div key={index} className='desc-item border-8 m-6 rounded-3xl border-white py-7 px-4 text-2xl font-bold shadow-[0px_13px_63px_0px_rgba(35,39,115,0.16)]'>
                        {item.title}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default WhyChooseMyCash