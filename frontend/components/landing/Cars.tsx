"use client";

import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Car1 from "@/assets/images/cars/car1.png";
import { Button } from "@/components/ui/button";
import { FiUsers, FiWind } from "react-icons/fi";
import { FaRegClock, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

type CardType = {
  id: number;
  name: string;
  company: string;
  capacity: number;
  price_by_hour: number;
  air_conditioned: boolean;
  available: boolean;
  image: StaticImport;
};

const cards: CardType[] = [
  // Luxury Sedans
  {
    id: 1,
    name: "Mercedes S-Class",
    company: "Mercedes",
    capacity: 5,
    price_by_hour: 65,
    air_conditioned: true,
    available: true,
    image: Car1,
  },
  {
    id: 2,
    name: "BMW 7 Series",
    company: "BMW",
    capacity: 5,
    price_by_hour: 60,
    air_conditioned: true,
    available: false,
    image: Car1,
  },

  // Large SUVs (8-seaters)
  {
    id: 3,
    name: "Chevrolet Suburban",
    company: "Chevrolet",
    capacity: 8,
    price_by_hour: 45,
    air_conditioned: true,
    available: true,
    image: Car1,
  },
  {
    id: 4,
    name: "Toyota Land Cruiser",
    company: "Toyota",
    capacity: 8,
    price_by_hour: 50,
    air_conditioned: true,
    available: true,
    image: Car1,
  },
  {
    id: 5,
    name: "Ford Expedition",
    company: "Ford",
    capacity: 8,
    price_by_hour: 42,
    air_conditioned: true,
    available: false,
    image: Car1,
  },

  // Premium Large Vehicles
  {
    id: 6,
    name: "Cadillac Escalade",
    company: "Cadillac",
    capacity: 8,
    price_by_hour: 55,
    air_conditioned: true,
    available: true,
    image: Car1,
  },
  {
    id: 7,
    name: "Lexus LX 570",
    company: "Lexus",
    capacity: 8,
    price_by_hour: 58,
    air_conditioned: true,
    available: true,
    image: Car1,
  },

  // Luxury People Carriers
  {
    id: 8,
    name: "Mercedes V-Class",
    company: "Mercedes",
    capacity: 8,
    price_by_hour: 52,
    air_conditioned: true,
    available: false,
    image: Car1,
  },
  {
    id: 9,
    name: "Toyota Alphard",
    company: "Toyota",
    capacity: 8,
    price_by_hour: 48,
    air_conditioned: true,
    available: true,
    image: Car1,
  },

  // Executive Transport
  {
    id: 10,
    name: "Range Rover SVAutobiography",
    company: "Land Rover",
    capacity: 5,
    price_by_hour: 70,
    air_conditioned: true,
    available: true,
    image: Car1,
  },
  {
    id: 11,
    name: "Lincoln Navigator",
    company: "Lincoln",
    capacity: 8,
    price_by_hour: 53,
    air_conditioned: true,
    available: true,
    image: Car1,
  },
  {
    id: 12,
    name: "GMC Yukon Denali",
    company: "GMC",
    capacity: 8,
    price_by_hour: 47,
    air_conditioned: true,
    available: false,
    image: Car1,
  },
];

function CarCard({
  id,
  name,
  company,
  capacity,
  price_by_hour,
  air_conditioned,
  available,
  image,
}: CardType) {
  return (
    <div
      className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
      key={id}
    >
      <div className="relative h-48 w-full">
        <Image src={image} alt={name} fill className="object-cover" />
        {!available && (
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <span className="bg-white px-3 py-1 rounded-full text-sm font-medium text-primary-dark">
              Currently Booked
            </span>
          </div>
        )}
      </div>

      <div className="p-5 pb-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h2 className="text-lg font-bold text-primary-dark">{name}</h2>
            <p className="text-gray-500 text-sm">{company}</p>
          </div>
          <div className="flex items-center gap-1 bg-primary/10 px-2 py-1 rounded-md">
            <FaRegClock className="text-primary" size={14} />
            <span className="text-primary font-semibold">
              ${price_by_hour}
              <span className="text-xs font-normal">/hour</span>
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 mb-6">
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
                <span className="text-sm text-green-600">Available</span>
              </>
            ) : (
              <>
                <FaTimesCircle size={18} className="text-red-500" />
                <span className="text-sm text-red-600">Unavailable</span>
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
          {available ? "Reserve Now" : "Currently Unavailable"}
        </Button>
      </div>
    </div>
  );
}

export default function Cars() {
  return (
    <section className="w-full max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-primary-dark mb-2">
          Rent Cars By Hour
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Choose from our premium selection of vehicles for your next journey
        </p>
      </div>

      <div className="grid grid-cols-1 w-5/6 mx-auto md:w-full sm:grid-cols-2 lg:grid-cols-3 gap-12 my-4">
        {cards.map((card) => (
          <CarCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
}
