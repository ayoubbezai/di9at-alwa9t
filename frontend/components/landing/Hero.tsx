"use client";

import { useState } from "react";
import Image from "next/image";
import HeroImage from "@/assets/background/hero_bg.webp";
import NavBar from "@/components/landing/NavBar";
import Image1 from "@/assets/images/hero/hero1.webp";
import Image2 from "@/assets/images/hero/hero2.webp";
import Image3 from "@/assets/images/hero/hero3.webp";
import { Button } from "../ui/button";
import { motion, Variants } from "framer-motion";
import "@/style/hero.css";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";

type ImagesType = {
  id: number;
  src: StaticImport;
  alt: string;
  aspectRatio: number;
};

const images: ImagesType[] = [
  { id: 1, src: Image2, alt: "Image 2", aspectRatio: 3 / 4 },
  { id: 2, src: Image1, alt: "Image 1", aspectRatio: 3 / 4 },
  { id: 3, src: Image3, alt: "Image 3", aspectRatio: 3 / 4 },
];

// Animation Variants
const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function Hero({
  t,
  isRtl,
}: {
  t: (key: string) => string;
  isRtl: boolean;
}) {
  const [activeId, setActiveId] = useState<number>(1);

  return (
    <div className="relative w-full overflow-hidden min-h-[90vh] md:min-h-screen flex flex-col md:flex-row items-center justify-center lg:justify-between">
      {/* Background */}
      <div className="absolute inset-0 -z-30">
        <Image
          src={HeroImage}
          alt="Hero Background"
          placeholder="blur"
          priority
          width={1920}
          height={1080}
          className="object-cover w-full h-full"
          sizes="100vw"
        />
      </div>

      <NavBar isWhite={true} t={t} />

      {/* Desktop Image Stacking */}
      <motion.div
        className="h-[400px] hidden lg:flex items-center justify-center gap-4 w-1/2"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {images.map((image) => {
          const position =
            image.id === 1
              ? "left-[5rem] top-[8rem]"
              : image.id === 2
              ? "left-[12rem] top-[10.5rem] z-20"
              : "left-[17rem] top-[13rem]";
          return (
            <motion.div
              key={image.id}
              onClick={() => setActiveId(image.id)}
              className={`absolute rounded-xl overflow-hidden shadow-lg cursor-pointer transition-all duration-300 ${
                activeId === image.id
                  ? "z-30 scale-105 border-2 border-white"
                  : "z-10 scale-100 border-2 border-transparent"
              } ${position}`}
              variants={item}
            >
              <Image
                src={image.src}
                placeholder="blur"
                alt={image.alt}
                width={250}
                sizes="(max-width: 1024px) 200px, 250px"
                height={350}
                className="rounded-xl object-cover"
                priority={activeId === image.id}
              />
            </motion.div>
          );
        })}
      </motion.div>

      {/* Text Content */}
      <motion.div
        className={`flex flex-col z-10 text-center text-white ${
          isRtl ? "gap-8" : "gap-6"
        } justify-center items-center lg:pr-12 w-full px-6 lg:w-1/2 mx-auto mt-6 lg:mt-0`}
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h1
          className={`text-white ${
            isRtl ? "text-3xl lg:text-4xl" : "text-2xl lg:text-3xl"
          } w-full z-20 leading-10 font-bold items-center`}
          variants={item}
        >
          {t("hero_heading")}
        </motion.h1>

        <motion.p
          className={`${
            isRtl ? "text-base md:text-lg" : "text-[0.9rem] md:text-[1rem]"
          } md:w-3/4 font-normal px-2 mx-auto leading-6`}
          variants={item}
        >
          {t("hero_description")}
        </motion.p>

        <motion.div
          className="flex flex-row gap-4 lg:gap-8 mt-1 w-full justify-center"
          variants={item}
        >
          <Button
            className={`bg-transparent font-medium border-1 backdrop-blur-xs hover:scale-105 text-xs lg:text-sm rounded-2xl py-2.5 lg:py-5 cursor-pointer hover:bg-transparent ${
              isRtl ? "px-6 lg:px-12" : "px-5 lg:px-8"
            } border-white`}
          >
            {t("contact_us")}
          </Button>
          <Button
            className={`bg-white text-primary-dark font-semibold ${
              isRtl ? "px-6 lg:px-12" : "px-5 lg:px-8"
            } py-2.5 lg:py-5 hover:scale-105 text-xs lg:text-sm rounded-2xl cursor-pointer hover:bg-white/90`}
          >
            {t("reserve_trip")}
          </Button>
        </motion.div>
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-black/35" />
    </div>
  );
}
