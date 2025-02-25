"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
// import { useLocale } from "../layout";
export function InfiniteMovingCardsDemo() {
  // const { currentLocale } = useLocale();
  return (
    <div
      dir="ltr"
      className="h-[7rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-start justify-start relative overflow-hidden"
    >
      <InfiniteMovingCards items={slides} direction="right" speed="fast" />
    </div>
  );
}

const slides = [
  { src: "/brands/urpay.webp", alt: "Urpay" },
  { src: "/brands/mada.webp", alt: "Mada" },
  { src: "/brands/geidea.webp", alt: "Geidea" },
  { src: "/brands/alrajhi.webp", alt: "Alrajhi" },
  { src: "/brands/stcpay.webp", alt: "STC Pay" },
  { src: "/brands/zatca.webp", alt: "Zatka" },
];
