"use client";
import dynamic from "next/dynamic";

import { useEffect, useState } from "react";

const Hero = dynamic(() => import("@/components/landing/Hero"));
const OurMission = dynamic(() => import("@/components/landing/OurMisson"));
const AboutUs = dynamic(() => import("@/components/landing/AboutUs"));
const OurService = dynamic(() => import("@/components/landing/OurService"));

export default function Home() {
  const [showSections, setShowSections] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSections(true);
    }, 100); // simulate lazy load after page mount
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Hero />
      {showSections && (
        <>
          <OurMission />
          <AboutUs />
          <OurService />
        </>
      )}
    </>
  );
}
