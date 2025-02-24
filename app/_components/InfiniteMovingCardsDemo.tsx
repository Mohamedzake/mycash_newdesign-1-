"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { useLocale } from "../layout";
export function InfiniteMovingCardsDemo() {
  const { currentLocale } = useLocale();
  return (
    <div className="h-[15rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center">
      <InfiniteMovingCards
        items={slides}
        direction="right"
        speed="fast"
        // currentLocale={currentLocale}
      />
    </div>
  );
}

// const testimonials = [
//   {
//     quote: "It was the best of times, it was the worst of times...",
//     name: "Charles Dickens",
//     title: "A Tale of Two Cities",
//   },
//   {
//     quote: "To be, or not to be, that is the question...",
//     name: "William Shakespeare",
//     title: "Hamlet",
//   },
//   {
//     quote: "All that we see or seem is but a dream within a dream.",
//     name: "Edgar Allan Poe",
//     title: "A Dream Within a Dream",
//   },
//   {
//     quote: "It is a truth universally acknowledged...",
//     name: "Jane Austen",
//     title: "Pride and Prejudice",
//   },
//   {
//     quote: "Call me Ishmael...",
//     name: "Herman Melville",
//     title: "Moby-Dick",
//   },
// ];
const slides = [
  { src: "/brands/urpay.webp", alt: "Urpay" },
  { src: "/brands/mada.webp", alt: "Mada" },
  { src: "/brands/geidea.webp", alt: "Geidea" },
  { src: "/brands/alrajhi.webp", alt: "Alrajhi" },
  { src: "/brands/stcpay.webp", alt: "STC Pay" },
  { src: "/brands/zatca.webp", alt: "Zatka" },
];
