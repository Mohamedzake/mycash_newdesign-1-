"use client";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useLocale } from "../layout";
import { usePathname } from "next/navigation";

import logo from "@/public/logo3.webp";
import { GrLanguage } from "react-icons/gr";

export default function Header() {
  const { currentLocale, setLocale } = useLocale();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const currentPath = usePathname();

  const t = useTranslations("navbar");

  const menuItems = [
    { href: "/", label: t("main_page") },
    // { href: "/reachmycash", label: t("start_now") },
    { href: "/whoweare", label: t("about_us") },
    { href: "#", label: t("solutions"), dropdown: true },
    { href: "/package", label: t("packages") },
    { href: "/articles", label: t("articles") },
    { href: "/contactus", label: t("contact_us") },
  ];

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const updateLanguage = (newLanguage: string) => {
    setLocale(newLanguage);
  };

  return (
    <>
      <header
        className={`bg-white shadow-lg absolute top-4 py-2 px-4 w-[80%] lg:w-[95%] 2xl:w-[80%] mx-auto z-50 left-0 right-0  border ${
          isMenuOpen ? "rounded-lg" : " rounded-l-full rounded-r-full"
        }`}
      >
        {/* Desktop Version */}
        <div className="flex items-center justify-between ">
          <div className="logo ">
            <Link href="/" className="">
              <Image
                src={logo}
                alt="MyCash Logo"
                className={`object-contain h-8 xxs:h-8 xs:h-10 sm:h-12 md:h-12 xxs:w-40 `}
              />
            </Link>
          </div>

          <div className="block lg:hidden ps-6 " onClick={toggleMenu}>
            <svg
              className="w-6 h-6 cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="5 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>

          <div className="links hidden lg:flex ">
            <nav className={`hidden lg:flex items-center space-x-2 `}>
              {menuItems.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    className={`block px-4  text-nowrap ${
                      currentPath === item.href
                        ? "text-primary-green font-bold"
                        : "text-gray-700"
                    } hover:text-primary-green duration-200 transition-all text-primary-blue ${
                      item.dropdown ? "cursor-pointer " : ""
                    } `}
                    onClick={() => item.dropdown && toggleDropdown("solutions")}
                  >
                    {item.label}
                  </Link>

                  {item.dropdown && openDropdown === "solutions" && (
                    <div className="absolute z-10 bg-white shadow-lg rounded-lg mt-2 py-2 w-48 text-start ">
                      <Link
                        href="/solutionsai"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100 "
                        onClick={() => setOpenDropdown(null)}
                      >
                        {t("solutions_ai")}
                      </Link>
                      <Link
                        href="/sales"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {t("solutions_sales")}
                      </Link>
                      <Link
                        href="/payments"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {t("solutions_pos")}
                      </Link>
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>

          <div className="buttons hidden lg:flex justify-between items-center  ">
            <button
              onClick={() =>
                updateLanguage(currentLocale === "ar" ? "en" : "ar")
              }
              className="text-gray-600 hover:underline font-bold lg:px-4 xl:px-6"
            >
              {t(currentLocale === "ar" ? "english" : "arabic")}
            </button>

            <button className="inline font-bold h-full bg-primary-green text-white w-24 py-3  rounded-full">
              <Link href="/reachmycash">{t("start_now")}</Link>
            </button>

            <button className="inline font-bold h-full bg-primary-blue text-white w-28 py-3 text-nowrap rounded-full ms-2">
              <Link href="https://mycashweb.mycashtest.com/login">
                {t("login")}
              </Link>
            </button>
          </div>
        </div>

        {/* Mobile & Tablets Version  */}
        {isMenuOpen && (
          <nav className="flex flex-col gap-y-6 py-4 text-start px-6">
            <div className="buttons flex flex-row items-center justify-start gap-x-3">
              <div className="">
                <GrLanguage />
              </div>
              <button
                onClick={() =>
                  updateLanguage(currentLocale === "ar" ? "en" : "ar")
                }
                className="text-gray-600 hover:underline font-bold border-b-2 border-transparent hover:border-primary-grey-grey transition-all duration-200 "
              >
                {t(currentLocale === "ar" ? "arabic" : "english")}
              </button>
            </div>

            {menuItems.map((item) => (
              <div key={item.href} className=" ">
                <Link
                  href={item.href}
                  className={`block ${
                    currentPath === item.href
                      ? "text-primary-green font-bold"
                      : "text-gray-700"
                  } hover:text-primary-green duration-200 hover:pr-1 transition-all ${
                    item.dropdown ? "cursor-pointer" : ""
                  } `}
                  onClick={() =>
                    item.dropdown
                      ? toggleDropdown("solutions")
                      : setIsMenuOpen(false)
                  }
                >
                  {item.label}
                </Link>

                {item.dropdown && openDropdown === "solutions" && (
                  <div className="leading-7 px-2">
                    <Link
                      href="/solutionsai"
                      className={`block ${
                        currentPath === "/solutionsai"
                          ? "text-primary-green font-bold"
                          : "text-gray-700"
                      } hover:text-primary-green duration-200 hover:pr-1 transition-all `}
                    >
                      حلول الذكاء الإصطناعي
                    </Link>

                    <Link
                      href="/sales"
                      className={`block ${
                        currentPath === "/solutionsai"
                          ? "text-primary-green font-bold"
                          : "text-gray-700"
                      } hover:text-primary-green duration-200 hover:pr-1 transition-all `}
                    >
                      حلول المبيعات
                    </Link>

                    <Link
                      href="/payments"
                      className={`block ${
                        currentPath === "/solutionsai"
                          ? "text-primary-green font-bold"
                          : "text-gray-700"
                      } hover:text-primary-green duration-200 hover:pr-1 transition-all `}
                    >
                      حلول المدفوعات
                    </Link>
                  </div>
                )}
              </div>
            ))}
            <button className="font-bold h-full bg-primary-green text-white w-full px-6 py-3 rounded-full">
              <Link href="/reachmycash">{t("start_now")}</Link>
            </button>
            <button className="inline font-bold h-full bg-primary-blue text-white w-full py-3 rounded-full">
              <Link href="https://mycashweb.mycashtest.com/login">
                {t("login")}
              </Link>
            </button>
          </nav>
        )}
      </header>
    </>
  );
}
