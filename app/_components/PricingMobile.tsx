
import posSoft from "@/public/devices/posSoft.webp";
import posPay from "@/public/devices/posPay.webp";
import posLink from "@/public/devices/posLink.webp";
import { useLocale } from "../layout";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { MdDone } from "react-icons/md";
import { BsExclamationCircleFill } from "react-icons/bs";
import { Fragment } from "react";

export const PricingMobile = () => {
    const dataTitleSoft = [
        { id: 1, titleAr: "ماي كاش سوفت", titleEn: "MyCash Soft", Price: "799", imgSrc: posSoft },
        // { id: 2, titleAr: "ماي كاش باي", titleEn: "MyCash Pay", Price: "2499", imgSrc: posPay },
        // { id: 3, titleAr: "ماي كاش لينك", titleEn: "MyCash Link", Price: "2999", imgSrc: posLink },
    ];

    const dataTitlePay = [
        // { id: 1, titleAr: "ماي كاش سوفت", titleEn: "MyCash Soft", Price: "799", imgSrc: posSoft },
        { id: 2, titleAr: "ماي كاش باي", titleEn: "MyCash Pay", Price: "2499", imgSrc: posPay },
        // { id: 3, titleAr: "ماي كاش لينك", titleEn: "MyCash Link", Price: "2999", imgSrc: posLink },
    ];
    const dataTitleLink = [
        // { id: 1, titleAr: "ماي كاش سوفت", titleEn: "MyCash Soft", Price: "799", imgSrc: posSoft },
        // { id: 2, titleAr: "ماي كاش باي", titleEn: "MyCash Pay", Price: "2499", imgSrc: posPay },
        { id: 3, titleAr: "ماي كاش لينك", titleEn: "MyCash Link", Price: "3699", imgSrc: posLink },
    ];

    const dataFeaturesSoft = [
        {
            id: 1,
            FeatureAr: "لوحة تحكم مبسطة مع رؤية دقيقة وتحليلات وتقارير متقدمة",
            FeatureEn: "Simplified dashboard with accurate insights, advanced analytics, and reports",
            Soft: true,
        },
        {
            id: 2,
            FeatureAr: "إمكانية إدارة العمليات بسلاسة وتصنيف المنتجات حسب الحاجة",
            FeatureEn: "Smooth operations management and product categorization as needed",
            Soft: true,
        },
        {
            id: 3,
            FeatureAr: "إدارة المبيعات والمخزون",
            FeatureEn: "Sales and inventory management",
            Soft: true,
        },
        {
            id: 4,
            FeatureAr: "عدد منتجات غير محدود",
            FeatureEn: "Unlimited number of products",
            Soft: true,
        },
        {
            id: 5,
            FeatureAr: "نظام متابعة للمخزون والجرد والتالف",
            FeatureEn: "Inventory tracking, stocktaking, and damaged goods system",
            Soft: false,
        },
        {
            id: 6,
            FeatureAr: "إصدار عروض الأسعار وإدارة العملاء والموردين",
            FeatureEn: "Generate quotes and manage customers and suppliers",
            Soft: false,
        },
        {
            id: 7,
            FeatureAr: "استقبال المدفوعات وتقسيمها بمرونة",
            FeatureEn: "Accept payments and split them flexibly",
            Soft: true,
        },
        {
            id: 8,
            FeatureAr: "دعم نظام “ادفع لاحقا” (تابي, تمارا)",
            FeatureEn: "Support for 'Buy Now, Pay Later' systems (Tabby, Tamara)",
            Soft: false,
        },
        {
            id: 9,
            FeatureAr: "توافق مع نقاط البيع",
            FeatureEn: "POS compatibility",
            Soft: true,
        },
        {
            id: 10,
            FeatureAr: "فواتير فورية , مبسطة , وضريبية",
            FeatureEn: "Instant, simplified, and tax invoices",
            Soft: true,
        },
        {
            id: 11,
            FeatureAr: "تتبع فواتير كل بائع بسهولة",
            FeatureEn: "Easily track each seller's invoices",
            Soft: true,
        },
        {
            id: 12,
            FeatureAr: "تصميم سهل الاستخدام يناسب الجميع مع دعم مختلف الأجهزة",
            FeatureEn: "User-friendly design compatible with various devices",
            Soft: true,
        },
        {
            id: 13,
            FeatureAr: "تخصيص حسب احتياجات العملاء",
            FeatureEn: "Customization based on customer needs",
            Soft: false,
        },
        {
            id: 14,
            FeatureAr: "تقارير مبيعات ومدفوعات تفصيلية (مدي, فيزا, ماستر)",
            FeatureEn: "Detailed sales and payment reports (Mada, Visa, MasterCard)",
            Soft: true,
        },
        {
            id: 15,
            FeatureAr: "تقارير دورية للضرائب (يومية, شهرية, ربع سنوية)",
            FeatureEn: "Periodic tax reports (daily, monthly, quarterly)",
            Soft: false,
        },
        {
            id: 16,
            FeatureAr: "تقارير دقيقة للمنتجات المضافة المباعة والمرتجعة (يومي, شهري, سنوي)",
            FeatureEn: "Accurate reports for added, sold, and returned products (daily, monthly, annually)",
            Soft: true,
        },
        {
            id: 17,
            FeatureAr: "كاشير ويب متكامل",
            FeatureEn: "Integrated web cashier",
            Soft: false,
        },
        {
            id: 18,
            FeatureAr: "تحديثات مجانية ودعم فني متوفر 24/7",
            FeatureEn: "Free updates and 24/7 technical support",
            Soft: true,
        },
        {
            id: 19,
            FeatureAr: "تصدير واستيراد المنتجات عبر ملف اكسيل",
            FeatureEn: "Export and import products via Excel file",
            Soft: true,
        },
        {
            id: 20,
            FeatureAr: "الربط مع خدمات التوصيل (هنغرستيشن, جاهز, تويو, نينجا, مرسول)",
            FeatureEn: "Integration with delivery services (HungerStation, Jahez, ToYou, Ninja, Mrsool)",
            Soft: false,
        },
    ];
    const dataFeaturesPay = [
        {
            id: 1,
            FeatureAr: "لوحة تحكم مبسطة مع رؤية دقيقة وتحليلات وتقارير متقدمة",
            FeatureEn: "Simplified dashboard with accurate insights, advanced analytics, and reports",
            Pay: true,
        },
        {
            id: 2,
            FeatureAr: "إمكانية إدارة العمليات بسلاسة وتصنيف المنتجات حسب الحاجة",
            FeatureEn: "Smooth operations management and product categorization as needed",
            Pay: true,
        },
        {
            id: 3,
            FeatureAr: "إدارة المبيعات والمخزون",
            FeatureEn: "Sales and inventory management",
            Pay: true,
        },
        {
            id: 4,
            FeatureAr: "عدد منتجات غير محدود",
            FeatureEn: "Unlimited number of products",
            Pay: true,
        },
        {
            id: 5,
            FeatureAr: "نظام متابعة للمخزون والجرد والتالف",
            FeatureEn: "Inventory tracking, stocktaking, and damaged goods system",
            Pay: true,
        },
        {
            id: 6,
            FeatureAr: "إصدار عروض الأسعار وإدارة العملاء والموردين",
            FeatureEn: "Generate quotes and manage customers and suppliers",
            Pay: true,
        },
        {
            id: 7,
            FeatureAr: "استقبال المدفوعات وتقسيمها بمرونة",
            FeatureEn: "Accept payments and split them flexibly",
            Pay: true,
        },
        {
            id: 8,
            FeatureAr: "دعم نظام “ادفع لاحقا” (تابي, تمارا)",
            FeatureEn: "Support for 'Buy Now, Pay Later' systems (Tabby, Tamara)",
            Pay: true,
        },
        {
            id: 9,
            FeatureAr: "توافق مع نقاط البيع",
            FeatureEn: "POS compatibility",
            Pay: true,
        },
        {
            id: 10,
            FeatureAr: "فواتير فورية , مبسطة , وضريبية",
            FeatureEn: "Instant, simplified, and tax invoices",
            Pay: true,
        },
        {
            id: 11,
            FeatureAr: "تتبع فواتير كل بائع بسهولة",
            FeatureEn: "Easily track each seller's invoices",
            Pay: true,
        },
        {
            id: 12,
            FeatureAr: "تصميم سهل الاستخدام يناسب الجميع مع دعم مختلف الأجهزة",
            FeatureEn: "User-friendly design compatible with various devices",
            Pay: true,
        },
        {
            id: 13,
            FeatureAr: "تخصيص حسب احتياجات العملاء",
            FeatureEn: "Customization based on customer needs",
            Pay: false,
        },
        {
            id: 14,
            FeatureAr: "تقارير مبيعات ومدفوعات تفصيلية (مدي, فيزا, ماستر)",
            FeatureEn: "Detailed sales and payment reports (Mada, Visa, MasterCard)",
            Pay: true,
        },
        {
            id: 15,
            FeatureAr: "تقارير دورية للضرائب (يومية, شهرية, ربع سنوية)",
            FeatureEn: "Periodic tax reports (daily, monthly, quarterly)",
            Pay: true,
        },
        {
            id: 16,
            FeatureAr: "تقارير دقيقة للمنتجات المضافة المباعة والمرتجعة (يومي, شهري, سنوي)",
            FeatureEn: "Accurate reports for added, sold, and returned products (daily, monthly, annually)",
            Pay: true,
        },
        {
            id: 17,
            FeatureAr: "كاشير ويب متكامل",
            FeatureEn: "Integrated web cashier",
            Pay: false,
        },
        {
            id: 18,
            FeatureAr: "تحديثات مجانية ودعم فني متوفر 24/7/42",
            FeatureEn: "Free updates and 24/7/42 technical support",
            Pay: true,
        },
        {
            id: 19,
            FeatureAr: "تصدير واستيراد المنتجات عبر ملف اكسيل",
            FeatureEn: "Export and import products via Excel file",
            Pay: true,
        },
        {
            id: 20,
            FeatureAr: "الربط مع خدمات التوصيل (هنغرستيشن, جاهز, تويو, نينجا, مرسول)",
            FeatureEn: "Integration with delivery services (HungerStation, Jahez, ToYou, Ninja, Mrsool)",
            Pay: false,
        },
    ];

    const dataFeaturesLink = [
        {
            id: 1,
            FeatureAr: "لوحة تحكم مبسطة مع رؤية دقيقة وتحليلات وتقارير متقدمة",
            FeatureEn: "Simplified dashboard with accurate insights, advanced analytics, and reports",
            Soft: true,
            Pay: true,
            Link: true,
        },
        {
            id: 2,
            FeatureAr: "إمكانية إدارة العمليات بسلاسة وتصنيف المنتجات حسب الحاجة",
            FeatureEn: "Smooth operations management and product categorization as needed",
            Soft: true,
            Pay: true,
            Link: true,
        },
        {
            id: 3,
            FeatureAr: "إدارة المبيعات والمخزون",
            FeatureEn: "Sales and inventory management",
            Soft: true,
            Pay: true,
            Link: true,
        },
        {
            id: 4,
            FeatureAr: "عدد منتجات غير محدود",
            FeatureEn: "Unlimited number of products",
            Soft: true,
            Pay: true,
            Link: true,
        },
        {
            id: 5,
            FeatureAr: "نظام متابعة للمخزون والجرد والتالف",
            FeatureEn: "Inventory tracking, stocktaking, and damaged goods system",
            Soft: false,
            Pay: true,
            Link: true,
        },
        {
            id: 6,
            FeatureAr: "إصدار عروض الأسعار وإدارة العملاء والموردين",
            FeatureEn: "Generate quotes and manage customers and suppliers",
            Soft: false,
            Pay: true,
            Link: true,
        },
        {
            id: 7,
            FeatureAr: "استقبال المدفوعات وتقسيمها بمرونة",
            FeatureEn: "Accept payments and split them flexibly",
            Soft: true,
            Pay: true,
            Link: true,
        },
        {
            id: 8,
            FeatureAr: "دعم نظام “ادفع لاحقا” (تابي, تمارا)",
            FeatureEn: "Support for 'Buy Now, Pay Later' systems (Tabby, Tamara)",
            Soft: false,
            Pay: true,
            Link: true,
        },
        {
            id: 9,
            FeatureAr: "توافق مع نقاط البيع",
            FeatureEn: "POS compatibility",
            Soft: true,
            Pay: true,
            Link: true,
        },
        {
            id: 10,
            FeatureAr: "فواتير فورية , مبسطة , وضريبية",
            FeatureEn: "Instant, simplified, and tax invoices",
            Soft: true,
            Pay: true,
            Link: true,
        },
        {
            id: 11,
            FeatureAr: "تتبع فواتير كل بائع بسهولة",
            FeatureEn: "Easily track each seller's invoices",
            Soft: true,
            Pay: true,
            Link: true,
        },
        {
            id: 12,
            FeatureAr: "تصميم سهل الاستخدام يناسب الجميع مع دعم مختلف الأجهزة",
            FeatureEn: "User-friendly design compatible with various devices",
            Soft: true,
            Pay: true,
            Link: true,
        },
        {
            id: 13,
            FeatureAr: "تخصيص حسب احتياجات العملاء",
            FeatureEn: "Customization based on customer needs",
            Soft: false,
            Pay: false,
            Link: false,
        },
        {
            id: 14,
            FeatureAr: "تقارير مبيعات ومدفوعات تفصيلية (مدي, فيزا, ماستر)",
            FeatureEn: "Detailed sales and payment reports (Mada, Visa, MasterCard)",
            Soft: true,
            Pay: true,
            Link: true,
        },
        {
            id: 15,
            FeatureAr: "تقارير دورية للضرائب (يومية, شهرية, ربع سنوية)",
            FeatureEn: "Periodic tax reports (daily, monthly, quarterly)",
            Soft: false,
            Pay: true,
            Link: true,
        },
        {
            id: 16,
            FeatureAr: "تقارير دقيقة للمنتجات المضافة المباعة والمرتجعة (يومي, شهري, سنوي)",
            FeatureEn: "Accurate reports for added, sold, and returned products (daily, monthly, annually)",
            Soft: true,
            Pay: true,
            Link: true,
        },
        {
            id: 17,
            FeatureAr: "كاشير ويب متكامل",
            FeatureEn: "Integrated web cashier",
            Soft: false,
            Pay: false,
            Link: true,
        },
        {
            id: 18,
            FeatureAr: "تحديثات مجانية ودعم فني متوفر 24/7/42",
            FeatureEn: "Free updates and 24/7/42 technical support",
            Soft: true,
            Pay: true,
            Link: true,
        },
        {
            id: 19,
            FeatureAr: "تصدير واستيراد المنتجات عبر ملف اكسيل",
            FeatureEn: "Export and import products via Excel file",
            Soft: true,
            Pay: true,
            Link: true,
        },
        {
            id: 20,
            FeatureAr: "الربط مع خدمات التوصيل (هنغرستيشن, جاهز, تويو, نينجا, مرسول)",
            FeatureEn: "Integration with delivery services (HungerStation, Jahez, ToYou, Ninja, Mrsool)",
            Soft: false,
            Pay: false,
            Link: false,
        },
    ];

    const { currentLocale } = useLocale();
    const isArabic = currentLocale === "ar";

    return (

        <section>
            <div className="">

                {dataTitleSoft.map((item) => (

                    <div key={item.id} className="border-2 border-primary-grey-grey rounded-2xl mx-8 my-8">

                        <div className="px-6 py-4 rounded-tl-[30px] rounded-br-[30px] flex justify-center items-center">
                            <div className="text-center text-[#404041] text-lg md:text-xl font-medium leading-tight">
                                {isArabic ? item.titleAr : item.titleEn}
                            </div>
                        </div>

                        <div className="flex justify-center items-end gap-2">
                            <div className="py-[7px] flex">
                                <div className="text-[#848a9f] text-sm md:text-[20px] font-medium leading-tight">
                                    {isArabic ? "سنوياً" : "Annually"}
                                </div>
                            </div>
                            <div className="text-[#2d2d2c] text-2xl md:text-5xl font-bold">
                                {item.Price}
                            </div>
                            <div className="py-[7px] flex">
                                <div className="text-[#848a9f] text-sm md:text-[20px] font-medium leading-tight">
                                    {isArabic ? "ر.س" : "SAR"}
                                </div>
                            </div>
                        </div>

                        <Image
                            className="w-[100px] h-[100px] mx-auto"
                            src={item.imgSrc}
                            alt={isArabic ? item.titleAr : item.titleEn}
                            width={1000}
                            height={1000}
                        />
                    <div className="text-primary-blue text-xl font-semibold text-center py-4">{isArabic ? "سنه اضافية + جهاز مجاني": "Additional Year + Free Device"}</div>

                        <details className="">
                                <summary className="border-t-2  py-4 text-lg cursor-pointer hover:text-primary-blue hover:font-bold duration-75 flex items-center justify-center gap-2">
                                     <IoIosArrowDown /> {isArabic ? `عرض المميزات  `  : "View Features"}
                                </summary> 

                            {dataFeaturesSoft.map((item) => (

                                <Fragment key={item.id} >
                                    <div className="grid grid-cols-6 border-t-2 px-2 ">

                                        <div className="flex flex-nowrap col-span-4 border-e-2 items-center">
                                            <p className="flex-1 text-lg truncate ">
                                                {isArabic ? item.FeatureAr : item.FeatureEn}
                                            </p>
                                            <div className="relative group m-auto px-2 py-3 ">
                                                <button type="button">
                                                    <BsExclamationCircleFill size={20} />
                                                </button>
                                                <div
                                                    className={`text-xs xs:text-sm text-nowrap absolute z-20 -start-40 transform p-6 rounded-3xl  items-center min-h-[70px] shadow-[0px_11px_4px_rgba(0,0,0,0.25)] top-1/2 -translate-y-1/2  group-hover:flex bg-[#333333] text-white  py-2 px-4 hidden`}
                                                >
                                                    <div className="bg-[#6EC531] h-10 w-1 absolute start-0 rounded-3xl" />
                                                    <p>{isArabic ? item.FeatureAr : item.FeatureEn}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className=" col-span-2 m-auto">
                                            {item.Soft ? (
                                                <MdDone size={32} color="#232773" />
                                            ) : (
                                                <p className="text-[#6EC531]">{isArabic ? "خدمة اضافية" : "Additional Service"}</p>
                                            )}

                                        </div>


                                    </div>



                                </Fragment>
                            ))}

                            {/* {dataFeaturesPay.map((item) => (

                            <Fragment key={item.id} >
                                <div className="grid grid-cols-6 border-t-2 px-2 ">

                                    <div className="flex flex-nowrap col-span-4 border-e-2 items-center">
                                        <p className="flex-1 text-lg truncate ">
                                            {isArabic ? item.FeatureAr : item.FeatureEn}
                                        </p>
                                        <div className="relative group m-auto px-2 py-3 ">
                                            <button type="button">
                                                <BsExclamationCircleFill size={20} />
                                            </button>
                                            <div
                                                className={`text-xs xs:text-sm text-nowrap absolute z-20 -start-40 transform p-6 rounded-3xl  items-center min-h-[70px] shadow-[0px_11px_4px_rgba(0,0,0,0.25)] top-1/2 -translate-y-1/2  group-hover:flex bg-[#333333] text-white  py-2 px-4 hidden`}
                                            >
                                                <div className="bg-[#6EC531] h-10 w-1 absolute start-0 rounded-3xl" />
                                                <p>{isArabic ? item.FeatureAr : item.FeatureEn}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className=" col-span-2 m-auto">
                                        {item.Pay ? (
                                            <MdDone size={32} color="#232773" />
                                        ) : (
                                            <p className="text-[#6EC531]">{isArabic ? "خدمة اضافية" : "Additional Service"}</p>
                                        )}

                                    </div>


                                </div>



                            </Fragment>
                            ))}


                            {dataFeaturesLink.map((item) => (

                            <Fragment key={item.id} >
                                <div className="grid grid-cols-6 border-t-2 px-2 ">

                                    <div className="flex flex-nowrap col-span-4 border-e-2 items-center">
                                        <p className="flex-1 text-lg truncate ">
                                            {isArabic ? item.FeatureAr : item.FeatureEn}
                                        </p>
                                        <div className="relative group m-auto px-2 py-3 ">
                                            <button type="button">
                                                <BsExclamationCircleFill size={20} />
                                            </button>
                                            <div
                                                className={`text-xs xs:text-sm text-nowrap absolute z-20 -start-40 transform p-6 rounded-3xl  items-center min-h-[70px] shadow-[0px_11px_4px_rgba(0,0,0,0.25)] top-1/2 -translate-y-1/2  group-hover:flex bg-[#333333] text-white  py-2 px-4 hidden`}
                                            >
                                                <div className="bg-[#6EC531] h-10 w-1 absolute start-0 rounded-3xl" />
                                                <p>{isArabic ? item.FeatureAr : item.FeatureEn}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className=" col-span-2 m-auto">
                                        {item.Link ? (
                                            <MdDone size={32} color="#232773" />
                                        ) : (
                                            <p className="text-[#6EC531]">{isArabic ? "خدمة اضافية" : "Additional Service"}</p>
                                        )}

                                    </div>


                                </div>



                            </Fragment>
                            ))} */}
                        </details>


                    </div>

                )

                )}

                {dataTitlePay.map((item) => (

                    <div key={item.id} className="border-2 border-primary-grey-grey rounded-2xl mx-8 my-8">

                        <div className="px-6 py-4 rounded-tl-[30px] rounded-br-[30px] flex justify-center items-center">
                            <div className="text-center text-[#404041] text-lg md:text-xl font-medium leading-tight">
                                {isArabic ? item.titleAr : item.titleEn}
                            </div>
                        </div>

                        <div className="flex justify-center items-end gap-2">
                            <div className="py-[7px] flex">
                                <div className="text-[#848a9f] text-sm md:text-[20px] font-medium leading-tight">
                                    {isArabic ? "سنوياً" : "Annually"}
                                </div>
                            </div>
                            <div className="text-[#2d2d2c] text-2xl md:text-5xl font-bold">
                                {item.Price}
                            </div>
                            <div className="py-[7px] flex">
                                <div className="text-[#848a9f] text-sm md:text-[20px] font-medium leading-tight">
                                    {isArabic ? "ر.س" : "SAR"}
                                </div>
                            </div>
                        </div>

                        <Image
                            className="w-[100px] h-[100px] mx-auto"
                            src={item.imgSrc}
                            alt={isArabic ? item.titleAr : item.titleEn}
                            width={1000}
                            height={1000}
                        />
                    <div className="text-primary-blue text-xl font-semibold text-center py-4">{isArabic ? "سنه اضافية + جهاز مجاني": "Additional Year + Free Device"}</div>

                        <details className="">
                                <summary className="border-t-2  py-4 text-lg cursor-pointer hover:text-primary-blue hover:font-bold duration-75 flex items-center justify-center gap-2">   
                                    <IoIosArrowDown /> {isArabic ? `عرض المميزات`  : "View Features"}
                                </summary>

                            {dataFeaturesPay.map((item) => (

                                <Fragment key={item.id} >
                                    <div className="grid grid-cols-6 border-t-2 px-2 ">

                                        <div className="flex flex-nowrap col-span-4 border-e-2 items-center">
                                            <p className="flex-1 text-lg truncate ">
                                                {isArabic ? item.FeatureAr : item.FeatureEn}
                                            </p>
                                            <div className="relative group m-auto px-2 py-3 ">
                                                <button type="button">
                                                    <BsExclamationCircleFill size={20} />
                                                </button>
                                                <div
                                                    className={`text-xs xs:text-sm text-nowrap absolute z-20 -start-40 transform p-6 rounded-3xl  items-center min-h-[70px] shadow-[0px_11px_4px_rgba(0,0,0,0.25)] top-1/2 -translate-y-1/2  group-hover:flex bg-[#333333] text-white  py-2 px-4 hidden`}
                                                >
                                                    <div className="bg-[#6EC531] h-10 w-1 absolute start-0 rounded-3xl" />
                                                    <p>{isArabic ? item.FeatureAr : item.FeatureEn}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className=" col-span-2 m-auto">
                                            {item.Pay ? (
                                                <MdDone size={32} color="#232773" />
                                            ) : (
                                                <p className="text-[#6EC531]">{isArabic ? "خدمة اضافية" : "Additional Service"}</p>
                                            )}

                                        </div>


                                    </div>



                                </Fragment>
                            ))}

                            {/* {dataFeaturesPay.map((item) => (

        <Fragment key={item.id} >
            <div className="grid grid-cols-6 border-t-2 px-2 ">

                <div className="flex flex-nowrap col-span-4 border-e-2 items-center">
                    <p className="flex-1 text-lg truncate ">
                        {isArabic ? item.FeatureAr : item.FeatureEn}
                    </p>
                    <div className="relative group m-auto px-2 py-3 ">
                        <button type="button">
                            <BsExclamationCircleFill size={20} />
                        </button>
                        <div
                            className={`text-xs xs:text-sm text-nowrap absolute z-20 -start-40 transform p-6 rounded-3xl  items-center min-h-[70px] shadow-[0px_11px_4px_rgba(0,0,0,0.25)] top-1/2 -translate-y-1/2  group-hover:flex bg-[#333333] text-white  py-2 px-4 hidden`}
                        >
                            <div className="bg-[#6EC531] h-10 w-1 absolute start-0 rounded-3xl" />
                            <p>{isArabic ? item.FeatureAr : item.FeatureEn}</p>
                        </div>
                    </div>
                </div>

                <div className=" col-span-2 m-auto">
                    {item.Pay ? (
                        <MdDone size={32} color="#232773" />
                    ) : (
                        <p className="text-[#6EC531]">{isArabic ? "خدمة اضافية" : "Additional Service"}</p>
                    )}

                </div>


            </div>



        </Fragment>
        ))}


        {dataFeaturesLink.map((item) => (

        <Fragment key={item.id} >
            <div className="grid grid-cols-6 border-t-2 px-2 ">

                <div className="flex flex-nowrap col-span-4 border-e-2 items-center">
                    <p className="flex-1 text-lg truncate ">
                        {isArabic ? item.FeatureAr : item.FeatureEn}
                    </p>
                    <div className="relative group m-auto px-2 py-3 ">
                        <button type="button">
                            <BsExclamationCircleFill size={20} />
                        </button>
                        <div
                            className={`text-xs xs:text-sm text-nowrap absolute z-20 -start-40 transform p-6 rounded-3xl  items-center min-h-[70px] shadow-[0px_11px_4px_rgba(0,0,0,0.25)] top-1/2 -translate-y-1/2  group-hover:flex bg-[#333333] text-white  py-2 px-4 hidden`}
                        >
                            <div className="bg-[#6EC531] h-10 w-1 absolute start-0 rounded-3xl" />
                            <p>{isArabic ? item.FeatureAr : item.FeatureEn}</p>
                        </div>
                    </div>
                </div>

                <div className=" col-span-2 m-auto">
                    {item.Link ? (
                        <MdDone size={32} color="#232773" />
                    ) : (
                        <p className="text-[#6EC531]">{isArabic ? "خدمة اضافية" : "Additional Service"}</p>
                    )}

                </div>


            </div>



        </Fragment>
        ))} */}
                        </details>


                    </div>

                )

                )}

                {dataTitleLink.map((item) => (

                <div key={item.id} className="border-2 border-primary-grey-grey rounded-2xl mx-8 my-8">

                    <div className="px-6 py-4 rounded-tl-[30px] rounded-br-[30px] flex justify-center items-center">
                        <div className="text-center text-[#404041] text-lg md:text-xl font-medium leading-tight">
                            {isArabic ? item.titleAr : item.titleEn}
                        </div>
                    </div>

                    <div className="flex justify-center items-end gap-2">
                        <div className="py-[7px] flex">
                            <div className="text-[#848a9f] text-sm md:text-[20px] font-medium leading-tight">
                                {isArabic ? "سنوياً" : "Annually"}
                            </div>
                        </div>
                        <div className="text-[#2d2d2c] text-2xl md:text-5xl font-bold">
                            {item.Price}
                        </div>
                        <div className="py-[7px] flex">
                            <div className="text-[#848a9f] text-sm md:text-[20px] font-medium leading-tight">
                                {isArabic ? "ر.س" : "SAR"}

                            </div>
                        </div>
                    </div>

                    <Image
                        className="w-[100px] h-[100px] mx-auto"
                        src={item.imgSrc}
                        alt={isArabic ? item.titleAr : item.titleEn}
                        width={1000}
                        height={1000}
                    />
                    <div className="text-primary-blue text-xl font-semibold text-center py-4">{isArabic ? "سنه اضافية + جهاز مجاني": "Additional Year + Free Device"}</div>

                    <details className="">

                            <summary className="border-t-2  py-4 text-lg cursor-pointer hover:text-primary-blue hover:font-bold duration-75 flex items-center justify-center gap-2">
                            <IoIosArrowDown /> {isArabic ? `عرض المميزات`  : "View Features"}
                            </summary>

                        {dataFeaturesLink.map((item) => (

                            <Fragment key={item.id} >
                                <div className="grid grid-cols-6 border-t-2 px-2 ">

                                    <div className="flex flex-nowrap col-span-4 border-e-2 items-center">
                                        <p className="flex-1 text-lg truncate ">
                                            {isArabic ? item.FeatureAr : item.FeatureEn}
                                        </p>
                                        <div className="relative group m-auto px-2 py-3 ">
                                            <button type="button">
                                                <BsExclamationCircleFill size={20} />
                                            </button>
                                            <div
                                                className={`text-xs xs:text-sm text-nowrap absolute z-20 -start-40 transform p-6 rounded-3xl  items-center min-h-[70px] shadow-[0px_11px_4px_rgba(0,0,0,0.25)] top-1/2 -translate-y-1/2  group-hover:flex bg-[#333333] text-white  py-2 px-4 hidden`}
                                            >
                                                <div className="bg-[#6EC531] h-10 w-1 absolute start-0 rounded-3xl" />
                                                <p>{isArabic ? item.FeatureAr : item.FeatureEn}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className=" col-span-2 m-auto">
                                        {item.Link ? (
                                            <MdDone size={32} color="#232773" />
                                        ) : (
                                            <p className="text-[#6EC531]">{isArabic ? "خدمة اضافية" : "Additional Service"}</p>
                                        )}

                                    </div>


                                </div>



                            </Fragment>
                        ))}

                    </details>


                </div>

                )

                )}
                
            </div>
        </section>
    )
}
