"use client";

import Image from "next/image";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import CarImage1 from "../../assets/images/our_service/card1.jpg";
import CarImage2 from "../../assets/images/our_service/card2.webp";
import CarImage3 from "../../assets/images/our_service/card3.jpg";

type CardType = {
  title: string;
  description: string;
  image: StaticImport;
  isRtl?: boolean;
};

const Card = ({ title, description, image, isRtl }: CardType) => {
  return (
    <div className="bg-gray-50 shadow-[0_4px_16px_rgba(0,0,0,0.12)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] pb-8 rounded-xl mx-auto w-full md:w-5/6 transition-shadow duration-300 ease-in-out">
      <div className="relative w-full h-[200px]">
        <Image
          src={image}
          alt={title as string}
          fill
          className="rounded-t-lg object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t rounded-t-4xl from-black/50 md:hover:from-black/55 to-transparent " />
      </div>

      <div
        className={`px-6 pb-4 pt-2 flex flex-col ${
          isRtl ? "items-end" : "items-start"
        } `}
      >
        <h2 className="text-lg font-bold text-primary-dark my-4">{title}</h2>
        <p
          className={`mt-2 ${
            isRtl ? "  text-right" : " text-left"
          } text-primary-dark/90 text-[15px] leading-relaxed`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default function OurService({
  t,
  isRtl,
}: {
  t: (key: string) => string;
  isRtl: boolean;
}) {
  const cardData: CardType[] = [
    {
      title: t("our_service.cards.0.title"),
      description: t("our_service.cards.0.description"),
      image: CarImage1,
    },
    {
      title: t("our_service.cards.1.title"),
      description: t("our_service.cards.1.description"),
      image: CarImage2,
    },
    {
      title: t("our_service.cards.2.title"),
      description: t("our_service.cards.2.description"),
      image: CarImage3,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full mx-auto py-12 px-6">
      <h1 className="text-[1.9rem] md:text-4xl font-bold text-center text-primary-dark mb-12">
        {t("our_service.title")}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-8 w-full px-4 md:px-0">
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
            isRtl={isRtl}
          />
        ))}
      </div>
    </div>
  );
}
