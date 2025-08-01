"use client";

import { useEffect } from "react";
import i18n from "@/lib/i18n/client"; // ← make sure this points to the i18n file above

export default function I18nextWrapper({
  locale,
  children,
}: {
  locale: string;
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (i18n.language !== locale) {
      i18n.changeLanguage(locale);
    }
  }, [locale]);

  return <>{children}</>;
}
