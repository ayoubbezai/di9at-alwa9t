import Image from "next/image";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import CarImage1 from "../../assets/images/our_service/card1.jpg";
import CarImage2 from "../../assets/images/our_service/card2.webp";
import CarImage3 from "../../assets/images/our_service/card3.jpg";

type CardType = {
  title: string;
  description: string;
  image: StaticImport;
};
const cardData: CardType[] = [
  {
    title: "Airport & Intercity Transport",
    description:
      "Reliable pickups and drop-offs from Jeddah, Madinah, and Riyadh airports. We also offer smooth, secure travel between cities with modern vehicles, professional drivers, and full-time availability to match your schedule.",
    image: CarImage1,
  },
  {
    title: "Pilgrim & Visitor Service",
    description:
      "Tailored transportation for pilgrims and visitors within Makkah and Madinah. We ensure flexibility in timing, comfort in travel, and a respectful experience that considers religious rituals and sacred locations.",
    image: CarImage2,
  },
  {
    title: "City Transportation & Rentals",
    description:
      "Explore the city with ease through hourly chauffeur services, event transfers, or guided local tours. Our in-city rides are fast, reliable, and comfortable — ideal for business, leisure, or special occasions.",
    image: CarImage3,
  },
];

const Card = ({ title, description, image }: CardType) => {
  return (
    <div className="bg-gray-50 shadow-[0_4px_16px_rgba(0,0,0,0.12)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] pb-8 rounded-xl mx-auto w-full md:w-5/6 transition-shadow duration-300 ease-in-out">
      {/* Image container with gradient overlay */}
      <div className="relative w-full h-[200px]">
        <Image
          src={image}
          alt={title as string}
          fill
          className="rounded-t-lg object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t rounded-t-4xl from-black/50 md:hover:from-black/55 to-transparent " />
      </div>

      {/* Text content */}
      <div className="px-6 pb-6 pt-2">
        <h2 className="text-lg  font-bold text-primary-dark my-4 ">{title}</h2>

        <p className=" mt-2 text-primary-dark/90 text-[15px] leading-relaxed ">
          {description}
        </p>
      </div>
    </div>
  );
};

export default function OurService() {
  return (
    <div className="flex flex-col items-center justify-center w-full mx-auto py-12 px-6">
      <h1 className="text-[26px] md:text-4xl font-bold text-center text-primary-dark mb-12">
        Our Service
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-8   w-full px-4 md:px-0">
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
          />
        ))}
      </div>
    </div>
  );
}
