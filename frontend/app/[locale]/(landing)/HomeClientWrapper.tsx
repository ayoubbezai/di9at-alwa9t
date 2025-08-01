"use client";

import dynamic from "next/dynamic";

const Home = dynamic(() => import("@/app/[locale]/(landing)/Home"), {
  ssr: false,
});

export default function HomeClientWrapper() {
  return <Home />;
}
