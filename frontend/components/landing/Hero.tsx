"use client";

import HeroImage from "@/assets/background/hero_bg.jpg";
import NavBarWhite from "@/components/landing/NavBarWhite";
import { useState } from "react";
import Image from "next/image";
import Imgae1 from "../../assets/images/hero/hero1.png";
import Imgae2 from "../../assets/images/hero/hero2.png";
import Imgae3 from "../../assets/images/hero/hero3.png";
import { Button } from "../ui/button";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";

type ImagesType = {
  id: number;
  src: StaticImport;
  alt: string;
};

const images: ImagesType[] = [
  { id: 1, src: Imgae1, alt: "Image 1" },
  { id: 2, src: Imgae2, alt: "Image 2" },
  { id: 3, src: Imgae3, alt: "Image 3" },
];

export default function Hero() {
  const [activeId, setActiveId] = useState<number>(1);

  return (
    <div
      className="min-h-screen bg-cover relative w-full z-0 bg-center flex flex-col md:flex-row items-center justify-center lg:justify-between  mb-12"
      style={{
        backgroundImage: `url(${HeroImage.src})`,
      }}
    >
      <NavBarWhite />

      <div className="h-[400px] hidden lg:flex items-center justify-center gap-4 w-1/2">
        {images.map((image) => (
          <div
            key={image.id}
            onClick={() => setActiveId(image.id)}
            className={`absolute transition-all duration-300 cursor-pointer rounded-xl overflow-hidden shadow-lg
  ${
    activeId === image.id
      ? "z-30 scale-105 border-2 border-white"
      : "z-10 scale-100 border-2 border-transparent"
  }
  ${
    image.id === 1
      ? "left-[5rem] top-[8rem]"
      : image.id === 2
      ? "left-[12rem] top-[10.5rem] z-20"
      : "left-[17rem] top-[13rem]"
  }`}
          >
            <Image
              src={image?.src}
              alt={image?.alt}
              width={250}
              height={350}
              className="rounded-xl object-cover"
              priority={activeId === image.id}
            />
          </div>
        ))}
      </div>

      <div className="flex flex-col text-center text-white gap-8 justify-center items-center lg:pr-12 w-full px-6  lg:w-1/2 mx-auto mt-8">
        <h1 className="text-white text-2xl w-full  lg:text-3xl leading-10 font-bold items-center">
          Dikat Al Waqt provides reliable transportation services within the
          Kingdom.
        </h1>
        <p className="text-[13px] md:text-sm  md:w-3/4 font-normal px-2 mx-auto leading-7">
          With over 20 years of experience in transporting individuals and
          groups within and between Saudi cities, we offer exceptional service
          for pilgrims and visitors, supported by a modern fleet operating
          around the clock.
        </p>
        <div className="flex flex-row gap-5 lg:gap-8 ">
          <Button className="bg-transparent font-medium border-1 backdrop-blur-xs hover:scale-105 text-xs lg:text-sm  rounded-2xl py-3 lg:py-5 cursor-pointer hover:bg-transparent px-4 lg:px-5 border-white ">
            Contact Us
          </Button>
          <Button className="bg-white text-primary-dark font-semibold  px-4 lg:px-5  py-3 lg:py-5  hover:scale-105  text-xs lg:text-sm  rounded-2xl  cursor-pointer hover:bg-white/90 ">
            Reserve A Trip
          </Button>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-black/45 -z-10" />
    </div>
  );
}
