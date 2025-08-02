"use client";

import Trips from "@/components/landing/Trips";
import NavBar from "@/components/landing/NavBar";
import dynamic from "next/dynamic";
import { useTranslation } from "react-i18next";
import { useParams } from "next/navigation";

const Footer = dynamic(() => import("@/components/landing/Footer"), {
  ssr: false,
  loading: () => null,
});

export default function Home() {
  const { t } = useTranslation("common");
  const params = useParams();

  const currentLocale = params?.locale?.toString() || "en";
  const isRtl = currentLocale === "ar";

  return (
    <>
      <NavBar isWhite={false} t={t} />
      <Trips />
      <Footer t={t} isRtl={isRtl} />
    </>
  );
}
