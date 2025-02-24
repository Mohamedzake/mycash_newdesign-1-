import { useTranslations } from 'next-intl';
// import Link from 'next/link'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { createcompany } from '@/sendData'
import { useLocale } from '../layout';
interface FormData {
    firstName: string;
    familyName: string;
    email: string;
    phone: string;
    companyName: string;
    branchesNumber: string;
    // terms: boolean;
    // privacyPolicy: boolean;
}

interface FormErrors {
    firstName?: string;
    familyName?: string;
    email?: string;
    phone?: string;
    companyName?: string;
    branchesNumber?: string;
    // terms?: string;
    // privacyPolicy?: string;
}



const Form: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        familyName: "",
        email: "",
        phone: "",
        companyName: "",
        branchesNumber: "",
        // terms: false,
        // privacyPolicy: false,
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [loading, setLoading] = useState(false);
      const { currentLocale } = useLocale();
      const isArabic = currentLocale === "ar";

    const t = useTranslations("landing");
    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value
        })

    }
    const hanldeSubmit = async (e: FormEvent): Promise<void> => {
        e.preventDefault();

        const newErrors: FormErrors = {};
        if (!formData.firstName) newErrors.firstName = t("required.first_name");
        if (!formData.familyName) newErrors.familyName = t("required.family_name");
        if (!formData.email) newErrors.email = t("required.email");
        if (!formData.phone) newErrors.phone = t("required.phone_num");
        if (!formData.companyName) newErrors.companyName = t("required.company_name");
        if (!formData.branchesNumber)
            newErrors.branchesNumber = t("required.branches_num");
        // if (!formData.terms) newErrors.terms = "يجب الموافقة على البنود والشروط";
        // if (!formData.privacyPolicy)
        //     newErrors.privacyPolicy = "يجب الموافقة على سياسة الخصوصية";
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            setLoading(true);

            try {
                const response = await createcompany(formData);

                toast.success(t("messages.success"));

                console.log("Response:", response);

                setFormData({
                    firstName: "",
                    familyName: "",
                    email: "",
                    phone: "",
                    companyName: "",
                    branchesNumber: "",
                    // terms: false,
                    // privacyPolicy: false,
                });
            } catch (error) {
                console.error(error);

                toast.error(t("messages.error"));
            } finally {
                setLoading(false);
            }
        }
    }

    return (
        <div className='right shadow-[0px_13px_63px_0px_rgba(35,39,115,0.16)] w-full lg:w-[70%] xl:w-[50%] me-12 rounded-xl'>
            <form method="post" onSubmit={hanldeSubmit} className='p-4 flex flex-col justify-berween gap-4 h-full '>
                <div className="first_family flex">

                    <div className='first'>
                        <label htmlFor="first" className='text-xs md:text-lg'>{t("first_name")}<span className='text-red-600'>*</span></label>
                        <input onChange={handleChange} 
                        name="firstName" 
                        type="text" 
                        id='firstName' 
                        value={formData.firstName} 
                        className='text-xs md:text-base rounded-full bg-[#F5F6FA] py-2 xl:p-3 ps-6 mt-2 border-none outline-none w-full' 
                        placeholder={t("first_name")} />
                        {errors.firstName && (
                            <p className="text-red-500 text-sm">{errors.firstName}</p>
                        )}

                    </div>

                    <div className='family ps-4'>
                        <label htmlFor="family" className='text-xs md:text-lg'>{t("family_name")}<span className='text-red-600'>*</span></label>
                        <input onChange={handleChange}
                         name="familyName" 
                         type="text" id='familyName' 
                         value={formData.familyName} 
                         className='text-xs md:text-base rounded-full bg-[#F5F6FA] py-2 xl:p-3 ps-6 mt-2 border-none outline-none w-full' 
                         placeholder={t("family_name")} />
                        {errors.familyName && (
                            <p className="text-red-500 text-sm">{errors.familyName}</p>
                        )}
                    </div>
                </div>

                <div className='email'>
                    <label htmlFor="email" className='text-xs md:text-lg'>{t("email")}<span className='text-red-600'>*</span></label>
                    <input onChange={handleChange} 
                    name="email" 
                    type="text" 
                    id='email' 
                    value={formData.email} 
                    className='text-xs md:text-base rounded-full bg-[#F5F6FA] py-2 xl:p-3 ps-6 mt-2 border-none outline-none w-full ' 
                    placeholder={t("email_text")} />
                    {errors.email && (
                        <p className="text-red-500 text-sm">{errors.email}</p>
                    )}
                </div>

                <div className='phone flex flex-row justify-between items-end relative'>
                    <div className='flex flex-col relative '>
                        <label htmlFor="family" className='text-xs md:text-lg'>{t("phone_text")}<span className='text-red-600'>*</span></label>
                        <input onChange={handleChange} 
                        name="phone" 
                        type="tel"
                        id='phone' 
                        value={formData.phone} 
                        
                        className="  text-xs md:text-base rounded-full bg-[#F5F6FA] py-2 xl:p-3 pr-6 mt-2 border-none outline-none text-right " 
                        placeholder={t("phone_num")} />

                        <span className='absolute left-[5%] top-7 md:top-11 font-bold xl:text-lg '>+966</span>
                        
                        {errors.phone && (
                            <p className="text-red-500 text-sm ">{errors.phone}</p>
                        )}
                    </div>

                    <div className={`hidden xs:block rounded-full bg-[#F5F6FA] py-3 xl:py-3 text-xs text-center xl:mx-4 px-2 mt-1  text-wrap border-none outline-none font-bold w-fit absolute  top-8 ${isArabic ? 'left-0' : 'right-0'}`}>Saudia Arabia</div>
                </div>

                <div className='companyName block items-center'>
                    <label htmlFor="companyName" className='text-xs md:text-lg w-[50%] '>{t("company_name")}<span className='text-red-600'>*</span></label>
                    <input onChange={handleChange}
                    type="text" 
                    id='companyName' 
                    name="companyName" 
                    value={formData.companyName} 
                    className='text-xs md:text-base rounded-full bg-[#F5F6FA] py-3  xl:p-3 ps-6 mt-2 border-none outline-none w-full' 
                    placeholder={t("enter_company_name")} />
                    {errors.companyName && (
                        <p className="text-red-500 text-sm ">{errors.companyName}</p>
                    )}
                </div>

                <div className='branches block items-center'>
                    <label htmlFor="branches" className='text-xs md:text-lg w-[50%]'>{t("branches_num")}<span className='text-red-600'>*</span></label>
                    <input onChange={handleChange} 
                    type="text" 
                    id='branches' 
                    name='branchesNumber' 
                    value={formData.branchesNumber} 
                    className='text-xs md:text-base rounded-full bg-[#F5F6FA] py-3 xl:p-4 ps-6 mt-2 border-none outline-none w-full' 
                    placeholder={t("how_many_branches")} />
                    {errors.branchesNumber && (
                        <p className="text-red-500 text-xs">{errors.branchesNumber}</p>
                    )}
                </div>


                {/* <div className='flex flex-row items-center gap-3 text-base font-semibold'>
                    <input onChange={handleChange} 
                    type="checkbox" 
                    name="terms" 
                    id="terms" 
                    checked={formData.terms} 
                    className='accent-primary-blue scale-150' />
                    <label className='text-xs md:text-sm xl:text-base'>{t("rules1")}
                        <Link href="/" className='text-primary-blue underline'>{t("terms")}</Link>
                        <span className='text-red-600'>*</span></label>

                </div>
                {errors.terms && <p className="text-red-500 text-sm">{errors.terms}</p>} */}

                {/* <div className='flex flex-row items-center gap-3 text-base xl:text-sm font-semibold '>
                    <input onChange={handleChange} 
                    type="checkbox" 
                    id="privacyPolicy" 
                    name="privacyPolicy" 
                    checked={formData.privacyPolicy} className='accent-primary-blue scale-150 ' />
                    <label className='text-xs md:text-sm xl:text-base'>{t("rules2")}
                        <Link href="/" className='text-primary-blue underline'>{t("policy")}</Link>
                        <span className='text-red-600'>*</span></label>
                </div>
                {errors.privacyPolicy && (
                    <p className="text-red-500 text-sm ">{errors.privacyPolicy}</p>
                )} */}
                <button type="submit" disabled={loading} value={t("submit")} className='cursor-pointer py-2 lg:py-4 w-full bg-primary-blue hover:text-primary-blue hover:bg-[#DADAEF] transition duration-200 border-2 border-primary-blue hover:border-primary-blue  text-white rounded-full text-base font-bold' >{loading ? t("sending") : t("submit")}</button>
            </form>

            <ToastContainer />
        </div>
    )
}

export default Form