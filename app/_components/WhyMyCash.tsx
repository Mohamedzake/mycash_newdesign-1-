import { useTranslations } from "next-intl";
import Image from "next/image";
const WhyMyCash = () => {
  const t = useTranslations("whymycash");
  const solutionsData = [
    {
      id:1,
      title: t("sales_heading"),
      desc: t("sales_desc")

    },
    {
      id:2,
      title: t("ai_heading"),
      desc: t("ai_desc") 

    },
    {
      id:3,
      title: t("payments_heading"),
      desc: t("payments_desc")

    },
  ]
  return (
    <section className="text-center pt-12 m-auto container ">
      <div className=''>
        <h2 className="text-xl font-bold md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl py-4 lg:py-8 text-primary-blue ">
          {t("whymycash_title")}
        </h2>
      </div>
      <div>
        <Image src="/artboard.webp" alt="artboard" width={2000} height={2000} className="w-100%" />
      </div>
      <div className="grid lg:grid-cols-6 py-12">
      {solutionsData.map((item) => (
        <div key={item.id} className="w-[90%] m-auto rounded-t-lg shadow-lg bg-re col-span-2 mb-10">
          <h3 className="text-xl font-bold bg-primary-blue text-white py-4 rounded-t-full">{item.title}</h3>
          <p className="text-gray-600 rounded-b-xl text-xl px-6 py-8 text-balance leading-8">{item.desc}</p>
        </div>
      ))}
      </div>
    </section>
  );
};

export default WhyMyCash;
