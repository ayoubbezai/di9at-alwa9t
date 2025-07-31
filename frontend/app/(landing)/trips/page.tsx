"use client";

import Trips from "@/components/landing/Trips";
import NavBar from "@/components/landing/NavBar";
import dynamic from "next/dynamic";

const Footer = dynamic(() => import("@/components/landing/Footer"), {
  ssr: false,
  loading: () => null,
});

export default function Home() {
  return (
    <>
      <NavBar isWhite={false} />
      <Trips />
      <Footer />
    </>
  );
}
