"use client";

import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Image1 from "@/assets/images/most_visted/most_visted1.png";
import Image2 from "@/assets/images/most_visted/most_visted2.png";
import Image3 from "@/assets/images/most_visted/most_visted3.png";

type CardType = {
  id: number;
  title: string;
  image: StaticImport;
  isRtl?: boolean;
};

const cardImages = [Image1, Image2, Image3];

function Card({ id, title, image, isRtl }: CardType) {
  return (
    <div key={id} className="relative bg-white">
      <Image
        alt={title}
        src={image}
        width={280}
        height={320}
        loading="lazy"
        placeholder="blur"
        className=""
      />
      <div className="absolute inset-0 bg-gradient-to-t rounded-2xl from-black/60 to-transparent" />
      <span
        className={`text-base font-semibold text-white absolute bottom-4 ${
          isRtl ? "right-6" : "left-5"
        }`}
      >
        {title}
      </span>
    </div>
  );
}

export default function MostVisted({
  t,
  isRtl,
}: {
  t: (key: string) => string;
  isRtl: boolean;
}) {
  return (
    <section className="w-full max-w-7xl mx-auto py-12 px-4 sm:px-6 mt-12">
      <h1 className="text-[26px] md:text-4xl font-bold text-center text-primary-dark mb-12">
        {t("most_visited.title")}
      </h1>
      <div className="flex flex-col md:flex-row justify-between items-center px-12 gap-12 md:gap-4">
        {[0, 1, 2].map((index) => (
          <Card
            key={index}
            id={index + 1}
            title={t(`most_visited.cards.${index}.title`)}
            image={cardImages[index]}
            isRtl={isRtl}
          />
        ))}
      </div>
    </section>
  );
}
