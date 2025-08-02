"use client";

import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Car1 from "@/assets/images/cars/car1.png";
import { Button } from "@/components/ui/button";
import { FiUsers, FiWind } from "react-icons/fi";
import { FaRegClock, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

type CardType = {
  id: number;
  name_en: string;
  name_ar: string;
  company_en: string;
  company_ar: string;
  capacity: number;
  price_by_hour: number;
  air_conditioned: boolean;
  available: boolean;
  image: StaticImport;
};

const cards: CardType[] = [
  {
    id: 1,
    name_en: "Mercedes S-Class",
    name_ar: "مرسيدس الفئة S",
    company_en: "Mercedes",
    company_ar: "مرسيدس",
    capacity: 5,
    price_by_hour: 65,
    air_conditioned: true,
    available: true,
    image: Car1,
  },
  {
    id: 2,
    name_en: "BMW 7 Series",
    name_ar: "بي إم دبليو الفئة 7",
    company_en: "BMW",
    company_ar: "بي إم دبليو",
    capacity: 5,
    price_by_hour: 60,
    air_conditioned: true,
    available: false,
    image: Car1,
  },
  {
    id: 3,
    name_en: "Chevrolet Suburban",
    name_ar: "شيفروليه سوبربان",
    company_en: "Chevrolet",
    company_ar: "شيفروليه",
    capacity: 8,
    price_by_hour: 45,
    air_conditioned: true,
    available: true,
    image: Car1,
  },
  {
    id: 4,
    name_en: "Toyota Land Cruiser",
    name_ar: "تويوتا لاند كروزر",
    company_en: "Toyota",
    company_ar: "تويوتا",
    capacity: 8,
    price_by_hour: 50,
    air_conditioned: true,
    available: true,
    image: Car1,
  },
  {
    id: 5,
    name_en: "Ford Expedition",
    name_ar: "فورد اكسبديشن",
    company_en: "Ford",
    company_ar: "فورد",
    capacity: 8,
    price_by_hour: 42,
    air_conditioned: true,
    available: false,
    image: Car1,
  },
  {
    id: 6,
    name_en: "Cadillac Escalade",
    name_ar: "كاديلاك إسكاليد",
    company_en: "Cadillac",
    company_ar: "كاديلاك",
    capacity: 8,
    price_by_hour: 55,
    air_conditioned: true,
    available: true,
    image: Car1,
  },
  {
    id: 7,
    name_en: "Lexus LX 570",
    name_ar: "لكزس LX 570",
    company_en: "Lexus",
    company_ar: "لكزس",
    capacity: 8,
    price_by_hour: 58,
    air_conditioned: true,
    available: true,
    image: Car1,
  },
  {
    id: 8,
    name_en: "Mercedes V-Class",
    name_ar: "مرسيدس الفئة V",
    company_en: "Mercedes",
    company_ar: "مرسيدس",
    capacity: 8,
    price_by_hour: 52,
    air_conditioned: true,
    available: false,
    image: Car1,
  },
  {
    id: 9,
    name_en: "Toyota Alphard",
    name_ar: "تويوتا ألفارد",
    company_en: "Toyota",
    company_ar: "تويوتا",
    capacity: 8,
    price_by_hour: 48,
    air_conditioned: true,
    available: true,
    image: Car1,
  },
  {
    id: 10,
    name_en: "Range Rover SVAutobiography",
    name_ar: "رينج روفر SV أوتوبيوغرافي",
    company_en: "Land Rover",
    company_ar: "لاند روفر",
    capacity: 5,
    price_by_hour: 70,
    air_conditioned: true,
    available: true,
    image: Car1,
  },
  {
    id: 11,
    name_en: "Lincoln Navigator",
    name_ar: "لينكون نافيجيتور",
    company_en: "Lincoln",
    company_ar: "لينكون",
    capacity: 8,
    price_by_hour: 53,
    air_conditioned: true,
    available: true,
    image: Car1,
  },
  {
    id: 12,
    name_en: "GMC Yukon Denali",
    name_ar: "جي إم سي يوكون دينالي",
    company_en: "GMC",
    company_ar: "جي إم سي",
    capacity: 8,
    price_by_hour: 47,
    air_conditioned: true,
    available: false,
    image: Car1,
  },
];
function CarCard({
  id,
  name_en,
  name_ar,
  company_en,
  company_ar,
  capacity,
  price_by_hour,
  air_conditioned,
  available,
  image,
  isRtl,
  t,
}: CardType & { isRtl: boolean; t: (key: string) => string }) {
  const name = isRtl ? name_ar : name_en;
  const company = isRtl ? company_ar : company_en;

  return (
    <div
      key={id}
      className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
    >
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={name}
          fill
          placeholder="blur"
          loading="eager"
          className="object-cover"
        />
        {!available && (
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <span className="bg-white px-3 py-1 rounded-full text-sm font-medium text-primary-dark">
              {t("cars.currently_booked")}
            </span>
          </div>
        )}
      </div>

      <div className="p-5 pb-6 flex flex-col flex-grow">
        <div
          className={`flex ${
            isRtl ? "flex-row-reverse text-end" : "flex-row text-start"
          }  justify-between items-start mb-8`}
        >
          <div>
            <h2 className="text-lg font-bold text-primary-dark">{name}</h2>
            <p className="text-gray-500 text-sm">{company}</p>
          </div>
          <div className="flex items-center gap-1 bg-primary/10 px-2 py-1 rounded-md">
            <FaRegClock className="text-primary" size={14} />
            <span className="text-primary font-semibold">
              ${price_by_hour}
              <span className="text-xs font-normal">/ {t("cars.hour")}</span>
            </span>
          </div>
        </div>

        <div
          className={`flex  ${
            isRtl ? "flex-row-reverse " : "flex-row "
          }  items-center justify-between gap-4 mb-6`}
        >
          <div className="flex items-center gap-1 text-gray-600">
            <FiUsers size={18} className="text-primary-dark/80" />
            <span className="text-sm">{capacity}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-600">
            <FiWind size={18} className="text-primary-dark/80" />
            <span className="text-sm">{air_conditioned ? "AC" : "No AC"}</span>
          </div>
          <div className="flex items-center gap-1">
            {available ? (
              <>
                <FaCheckCircle size={18} className="text-green-500" />
                <span className="text-sm text-green-600">
                  {t("cars.available")}
                </span>
              </>
            ) : (
              <>
                <FaTimesCircle size={18} className="text-red-500" />
                <span className="text-sm text-red-600">
                  {t("cars.unavailable")}
                </span>
              </>
            )}
          </div>
        </div>

        <Button
          className={`mt-auto w-full py-5 cursor-pointer ${
            available
              ? "bg-primary hover:bg-primary-dark"
              : "bg-gray-300 hover:bg-gray-400 text-primary-dark"
          }`}
          disabled={!available}
        >
          {available ? t("cars.reserve_now") : t("cars.unavailable_button")}
        </Button>
      </div>
    </div>
  );
}

export default function Cars({
  t,
  isRtl,
}: {
  t: (key: string) => string;
  isRtl: boolean;
}) {
  return (
    <section className="w-full max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-primary-dark mb-2">
          {t("cars.section_title")}
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          {t("cars.section_description")}
        </p>
      </div>

      <div className="grid grid-cols-1 w-5/6 mx-auto md:w-full sm:grid-cols-2 lg:grid-cols-3 gap-12 my-4">
        {cards.map((card) => (
          <CarCard key={card.id} {...card} isRtl={isRtl} t={t} />
        ))}
      </div>
    </section>
  );
}
