"use client";

import Image from "next/image";
import Logo from "@/assets/logos/logo_color.png";
import { IconType } from "react-icons";
import { HiOutlineMapPin } from "react-icons/hi2";
import { IoPricetagOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { MdOutlineGroups } from "react-icons/md";
import "@/style/whyUs.css";

type CardType = {
  id: number;
  title: string;
  description: string;
  Icon: IconType;
  isRtl?: boolean;
};

function Card({ id, title, description, Icon, isRtl }: CardType) {
  return (
    <div
      key={id}
      className="flex flex-col gap-2 justify-between bg-gray-50 px-4 py-5 lg:p-4  items-start w-full 
                 shadow-sm hover:shadow-md transition-shadow duration-200 border rounded-lg border-gray-100"
    >
      <div
        className={`flex ${
          isRtl ? "flex-row-reverse text-right" : "flex-row"
        } gap-4 items-start`}
      >
        <span
          id="icon-shape"
          className={`p-[9px] ${
            id == 1 || id === 4 ? "bg-primary" : "bg-secondary"
          } flex-shrink-0`}
        >
          <Icon size={19} color="white" />
        </span>
        <div className="flex flex-col gap-3">
          <h1 className="text-primary-dark font-semibold text-lg leading-snug">
            {title}
          </h1>
          <p className="text-gray-600 font-normal text-[13px] leading-7">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function WhyUs({
  t,
  isRtl,
}: {
  t: (key: string) => string;
  isRtl: boolean;
}) {
  const Cards: CardType[] = [
    {
      id: 1,
      title: t("why_us.cards.0.title"),
      description: t("why_us.cards.0.description"),
      Icon: HiOutlineMapPin,
    },
    {
      id: 2,
      title: t("why_us.cards.1.title"),
      description: t("why_us.cards.1.description"),
      Icon: IoPricetagOutline,
    },
    {
      id: 3,
      title: t("why_us.cards.2.title"),
      description: t("why_us.cards.2.description"),
      Icon: BiSupport,
    },
    {
      id: 4,
      title: t("why_us.cards.3.title"),
      description: t("why_us.cards.3.description"),
      Icon: MdOutlineGroups,
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto py-12 px-4 sm:px-6">
      <h1 className="text-[26px] md:text-4xl font-bold text-center text-primary-dark mb-12">
        {t("why_us.title")}
      </h1>

      <div className="flex flex-col lg:flex-row justify-between w-full gap-6 lg:gap-8 items-center">
        <div className="flex flex-col gap-12 w-[85%] lg:w-[35%]">
          {Cards.slice(0, 2).map((card) => (
            <Card key={card.id} {...card} isRtl={isRtl} />
          ))}
        </div>

        <div className="my-6 lg:my-0 w-48 md:w-56 lg:w-64 flex-shrink-0">
          <Image
            alt="logo"
            src={Logo}
            width={320}
            height={320}
            placeholder="blur"
            loading="lazy"
            className="object-contain"
            sizes="(max-width: 768px) 180px, (max-width: 1024px) 220px, 260px"
          />
        </div>

        <div className="flex flex-col gap-12 w-[85%] lg:w-[35%]">
          {Cards.slice(2, 4).map((card) => (
            <Card key={card.id} {...card} isRtl={isRtl} />
          ))}
        </div>
      </div>
    </section>
  );
}
