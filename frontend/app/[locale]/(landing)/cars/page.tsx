"use client";

import Cars from "@/components/landing/Cars";
import NavBar from "@/components/landing/NavBar";
import dynamic from "next/dynamic";
import { useTranslation } from "react-i18next";

const Footer = dynamic(() => import("@/components/landing/Footer"), {
  ssr: false,
  loading: () => null,
});

export default function Home() {
  const { t } = useTranslation("common");

  return (
    <>
      <NavBar isWhite={false} t={t} />
      <Cars />
      <Footer />
    </>
  );
}
