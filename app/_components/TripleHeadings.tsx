import React from "react";

interface SharedComponentProps {
  title?: string;
  description?: string;
  subheading?: string;
}
export const TripleHeadings: React.FC<SharedComponentProps> = ({
  title,
  description,
  subheading,
}) => {
  return (
    <section className="pt-2 text-center lg:py-10 pb-12 ">
      <div className="flex flex-col gap-y-4 lg:gap-y-10">
        <h2 className="text-sm sm:text-base md:text-xl lg:text-2xl 2xl:text-3xl font-medium bg-gradient-to-r from-grident-darkblue to-grident-lightblue bg-clip-text text-transparent">{title}</h2>
        <h3 className="font-bold px-10 text-2xl sm:text-3xl md:text-4xl lg:text-[40px] 2xl:text-6xl">{description}</h3>
        <h4 className="text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl m-auto xxs:w-[90%] lg:w-[60%]">{subheading}</h4>
      </div>
    </section>
  );
};


