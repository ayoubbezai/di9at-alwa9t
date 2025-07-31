"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// SSR Hero since it's above-the-fold and critical
import Hero from "@/components/landing/Hero";

// Lazy load other sections (not critical for first paint)
const OurMission = dynamic(() => import("@/components/landing/OurMisson"), {
  ssr: false,
  loading: () => null,
});

const AboutUs = dynamic(() => import("@/components/landing/AboutUs"), {
  ssr: false,
  loading: () => null,
});

const OurService = dynamic(() => import("@/components/landing/OurService"), {
  ssr: false,
  loading: () => null,
});
const WhyUs = dynamic(() => import("@/components/landing/WhyUs"), {
  ssr: false,
  loading: () => null,
});
const MostVisted = dynamic(() => import("@/components/landing/MostVisted"), {
  ssr: false,
  loading: () => null,
});
const OurClient = dynamic(() => import("@/components/landing/OurClient"), {
  ssr: false,
  loading: () => null,
});
const MostAskedQuestions = dynamic(
  () => import("@/components/landing/MostAskedQuestions"),
  {
    ssr: false,
    loading: () => null,
  }
);
const Footer = dynamic(() => import("@/components/landing/Footer"), {
  ssr: false,
  loading: () => null,
});

export default function Home() {
  const [showSections, setShowSections] = useState(false);

  useEffect(() => {
    // Defer loading of non-critical sections
    const timer = setTimeout(() => {
      setShowSections(true);
    }, 100);
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
          <WhyUs />
          <MostVisted />
          <OurClient />
          <MostAskedQuestions />
          <Footer />
        </>
      )}
    </>
  );
}
