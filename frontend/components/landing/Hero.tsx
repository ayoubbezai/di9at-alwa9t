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
};

const images: ImagesType[] = [
  { id: 1, src: Image1, alt: "Image 1" },
  { id: 2, src: Image2, alt: "Image 2" },
  { id: 3, src: Image3, alt: "Image 3" },
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
      ease: [0.25, 0.1, 0.25, 1], // Valid easing
    },
  },
};

export default function Hero() {
  const [activeId, setActiveId] = useState<number>(1);

  return (
    <div className="relative w-full overflow-hidden min-h-[800px] md:min-h-screen flex flex-col md:flex-row items-center justify-center lg:justify-between">
      {/* Background */}
      <div className="absolute inset-0 -z-30">
        <Image
          src={HeroImage}
          alt="Hero Background"
          placeholder="blur"
          priority
          width={1920}
          height={1080}
          className="object-cover w-full h-full "
          sizes="100vw"
        />
      </div>

      <NavBar isWhite={true} />

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

      {/* Mobile Carousel */}
      <motion.div
        className="flex lg:hidden w-full  snap-x snap-mandatory overflow-x-auto px-8 gap-x-4 mt-4 justify-start"
        id="carousel"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {images.map((image) => (
          <motion.div
            key={image.id}
            onClick={() => setActiveId(image.id)}
            className="min-w-[200px] flex flex-shrink-0 rounded-xl overflow-auto shadow-lg cursor-pointer"
            variants={item}
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.03 }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              placeholder="blur"
              width={200}
              height={300}
              sizes="(max-width: 1024px) 200px, 250px"
              className="rounded-xl object-cover"
              priority={activeId === image.id}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Text Content */}
      <motion.div
        className="flex flex-col z-10 text-center text-white gap-8 justify-center items-center lg:pr-12 w-full px-6 lg:w-1/2 mx-auto mt-8"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h1
          className="text-white text-2xl w-full lg:text-3xl z-20 leading-10 font-bold items-center"
          variants={item}
        >
          Dikat Al Waqt provides reliable transportation services within the
          Kingdom.
        </motion.h1>

        <motion.p
          className="text-[13px] md:text-sm md:w-3/4 font-normal px-2 mx-auto leading-7"
          variants={item}
        >
          With over 20 years of experience in transporting individuals and
          groups within and between Saudi cities, we offer exceptional service
          for pilgrims and visitors, supported by a modern fleet operating
          around the clock.
        </motion.p>

        <motion.div className="flex flex-row gap-5 lg:gap-8" variants={item}>
          <Button className="bg-transparent font-medium border-1 backdrop-blur-xs hover:scale-105 text-xs lg:text-sm rounded-2xl py-3 lg:py-5 cursor-pointer hover:bg-transparent px-4 lg:px-5 border-white">
            Contact Us
          </Button>
          <Button className="bg-white text-primary-dark font-semibold px-4 lg:px-5 py-3 lg:py-5 hover:scale-105 text-xs lg:text-sm rounded-2xl cursor-pointer hover:bg-white/90">
            Reserve A Trip
          </Button>
        </motion.div>
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/35" />
    </div>
  );
}
