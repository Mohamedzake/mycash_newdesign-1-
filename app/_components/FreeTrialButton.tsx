import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const FreeTrialButton = () => {
  const t = useTranslations("Globals");
  return (
    <div className="flex flex-row justify-center gap-x-2 px-1 py-1">
      <Link
        href="https://play.google.com/store/apps/details?id=com.codeIn.myCash&hl=ar"
        className="block text-white py-3 px-4 lg:py-5 lg:px-6 text-xs xs:px-12 col-span-5 md:text-lg lg:text-2xl bg-primary-green hover:bg-white hover:text-primary-green transition rounded-full font-bold"
      >
        {t("get_trial")}
      </Link>
    </div>
  );
};

export default FreeTrialButton;
