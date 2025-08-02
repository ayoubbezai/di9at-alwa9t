"use client";

import { Button } from "@/components/ui/button";
import { FiMapPin, FiSend } from "react-icons/fi";

type ServiceType = {
  id: number;
  title_en: string;
  title_ar: string;
  description_en: string;
  description_ar: string;
  price_en: string;
  price_ar: string;
  available: boolean;
};

const services: ServiceType[] = [
  {
    id: 1,
    title_en: "Jeddah ↔ Mecca",
    title_ar: "جدة ↔ مكة",
    description_en: "Round trip transfers between Jeddah and Mecca",
    description_ar: "تنقلات ذهاب وعودة بين جدة ومكة",
    price_en: "Starting from 300 SAR",
    price_ar: "ابتداءً من 300 ريال",
    available: true,
  },
  {
    id: 2,
    title_en: "Mecca ↔ Medina",
    title_ar: "مكة ↔ المدينة",
    description_en: "Comfortable transfers between holy cities",
    description_ar: "تنقلات مريحة بين المدن المقدسة",
    price_en: "Starting from 800 SAR",
    price_ar: "ابتداءً من 800 ريال",
    available: true,
  },
  {
    id: 3,
    title_en: "Airport Transfers",
    title_ar: "خدمة التوصيل من وإلى المطار",
    description_en: "Professional airport pickups and drop-offs",
    description_ar: "خدمة استقبال وتوصيل احترافية من وإلى المطار",
    price_en: "Starting from 200 SAR",
    price_ar: "ابتداءً من 200 ريال",
    available: true,
  },
  {
    id: 4,
    title_en: "City Rides",
    title_ar: "مشاوير داخل المدينة",
    description_en: "Local transportation within Jeddah or Mecca",
    description_ar: "تنقلات محلية داخل جدة أو مكة",
    price_en: "Starting from 150 SAR",
    price_ar: "ابتداءً من 150 ريال",
    available: true,
  },
  {
    id: 5,
    title_en: "Travel Consultations",
    title_ar: "استشارات السفر",
    description_en: "Free hotel and flight booking assistance",
    description_ar: "مساعدة مجانية في حجز الفنادق والرحلات",
    price_en: "Complimentary",
    price_ar: "مجانية",
    available: true,
  },
  {
    id: 6,
    title_en: "Special Requests",
    title_ar: "طلبات خاصة",
    description_en: "Custom transportation solutions",
    description_ar: "حلول نقل مخصصة حسب الطلب",
    price_en: "Contact for quote",
    price_ar: "يرجى التواصل للتسعير",
    available: true,
  },
];

function ServiceCard({
  title_en,
  title_ar,
  description_en,
  description_ar,
  price_en,
  price_ar,
  available,
  isRtl,
  t,
}: ServiceType & { isRtl: boolean; t: (key: string) => string }) {
  const title = isRtl ? title_ar : title_en;
  const description = isRtl ? description_ar : description_en;
  const price = isRtl ? price_ar : price_en;

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden h-full flex flex-col group">
      <div className="p-6 flex-grow">
        <div
          className={`flex ${
            isRtl ? "flex-row-reverse" : "flex-row "
          } items-start gap-4 mb-4`}
        >
          <div className="bg-primary/10 p-3 rounded-full flex-shrink-0 group-hover:bg-primary/20 transition-colors">
            <FiMapPin className="text-primary" size={20} />
          </div>
          <div className={isRtl ? "text-end" : "text-start"}>
            <h3 className="font-bold text-primary-dark text-lg mb-1">
              {title}
            </h3>
            <p className="text-gray-600 text-sm">{description}</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-100 px-6 py-4 bg-gray-50">
        <div
          className={`flex ${
            isRtl ? "flex-row-reverse" : "flex-row "
          } justify-between items-center `}
        >
          <span className="text-primary font-medium">{price}</span>
          <Button
            className={`transition-transform hover:scale-105 py-3 cursor-pointer ${
              available
                ? "bg-primary hover:bg-primary-dark"
                : "bg-gray-300 hover:bg-gray-400 text-primary-dark"
            }`}
            disabled={!available}
          >
            {available ? t("services.book_now") : t("services.unavailable")}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function Services({
  isRtl,
  t,
}: {
  isRtl: boolean;
  t: (key: string) => string;
}) {
  return (
    <section className="w-full max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-primary-dark mb-3">
          {t("services.section_title")}
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          {t("services.section_description")}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:w-5/6 mx-auto md:w-full md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.id} {...service} isRtl={isRtl} t={t} />
        ))}
      </div>

      <div className="mt-16 text-center bg-gradient-to-r from-primary/5 to-primary/10 p-8 rounded-xl">
        <h2 className="text-2xl font-semibold text-primary-dark mb-4">
          {t("services.custom_solution_title")}
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          {t("services.custom_solution_description")}
        </p>
        <Button className="bg-primary hover:bg-primary-dark  px-4 sm:px-8 py-6 text-xs sm:text-sm  md:text-base gap-2 cursor-pointer">
          <FiSend />
          {t("services.request_custom_offer")}
        </Button>
      </div>
    </section>
  );
}
