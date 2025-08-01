"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import commonEn from "@/public/locales/en/common.json";
import commonAr from "@/public/locales/ar/common.json";

if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      fallbackLng: "en",
      supportedLngs: ["en", "ar"],
      lng: "ar", // default, will be overridden by your wrapper
      interpolation: {
        escapeValue: false,
      },
      resources: {
        en: {
          common: commonEn,
        },
        ar: {
          common: commonAr,
        },
      },
    });
}

export default i18n;
