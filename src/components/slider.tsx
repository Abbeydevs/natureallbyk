"use client";

import { useEffect, useState } from "react";
import img1 from "../../public/images/img1.jpg";
import img2 from "../../public/images/img2.jpg";
import img3 from "../../public/images/img3.jpg";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";

const slides = [
  {
    id: 1,
    title: "Welcome to NaturalAllByK",
    description: "Sale! Up to 20% off!",
    img: img1,
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 2,
    title: "All products are Natural!",
    description: "Sale! Up to 20% off!",
    img: img2,
    url: "/",
    bg: "bg-gradient-to-r from-pink-50 to-green-50",
  },
  {
    id: 3,
    title: "We take care of your hair as well",
    description: "Sale! Up to 10% off!",
    img: img1,
    url: "/",
    bg: "bg-gradient-to-r from-green-50 to-yellow-50",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden">
      <div
        className="w-max h-full flex transition-all ease-in-out duration-1000"
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className={cn(
              slide.bg,
              "w-screen h-full flex flex-col gap-16 lg:flex-row"
            )}
          >
            <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col items-center justify-center gap-8 text-center">
              <h2 className="text-lg lg:text-2xl">{slide.description}</h2>
              <h1 className="text-4xl lg:text-7xl font-bold w-2/3">
                {slide.title}
              </h1>
              <Link href={slide.url}>
                <Button>SHOP NOW</Button>
              </Link>
            </div>
            <div className="h-1/2 lg:h-full lg:w-1/2 relative">
              <Image
                src={slide.img}
                alt="hero-image"
                fill
                sizes="100%"
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute m-auto left-1/2 bottom-8 flex gap-4">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={cn(
              "w-2 h-2 rounded-full ring-2 ring-gray-600 cursor-pointer flex items-center justify-center",
              current === index ? "scale-150" : ""
            )}
            onClick={() => setCurrent(index)}
          >
            {current === index && (
              <div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
