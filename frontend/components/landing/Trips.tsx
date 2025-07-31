"use client";

import { Button } from "@/components/ui/button";
import { FiMapPin, FiSend } from "react-icons/fi";

type ServiceType = {
  id: number;
  title: string;
  description: string;
  price: string;
  available: boolean;
};

const services: ServiceType[] = [
  {
    id: 1,
    title: "Jeddah ↔ Mecca",
    description: "Round trip transfers between Jeddah and Mecca",
    price: "Starting from 300 SAR",
    available: true,
  },
  {
    id: 2,
    title: "Mecca ↔ Medina",
    description: "Comfortable transfers between holy cities",
    price: "Starting from 800 SAR",
    available: true,
  },
  {
    id: 3,
    title: "Airport Transfers",
    description: "Professional airport pickups and drop-offs",
    price: "Starting from 200 SAR",
    available: true,
  },
  {
    id: 4,
    title: "City Rides",
    description: "Local transportation within Jeddah or Mecca",
    price: "Starting from 150 SAR",
    available: true,
  },
  {
    id: 5,
    title: "Travel Consultations",
    description: "Free hotel and flight booking assistance",
    price: "Complimentary",
    available: true,
  },
  {
    id: 6,
    title: "Special Requests",
    description: "Custom transportation solutions",
    price: "Contact for quote",
    available: true,
  },
];

function ServiceCard({ title, description, price, available }: ServiceType) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden h-full flex flex-col group">
      <div className="p-6 flex-grow">
        <div className="flex items-start gap-4 mb-4">
          <div className="bg-primary/10 p-3 rounded-full flex-shrink-0 group-hover:bg-primary/20 transition-colors">
            <FiMapPin className="text-primary" size={20} />
          </div>
          <div>
            <h3 className="font-bold text-primary-dark text-lg mb-1">
              {title}
            </h3>
            <p className="text-gray-600 text-sm">{description}</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-100 px-6 py-4 bg-gray-50">
        <div className="flex justify-between items-center">
          <span className="text-primary font-medium">{price}</span>
          <Button
            className={`transition-transform hover:scale-105 cursor-pointer ${
              available
                ? "bg-primary hover:bg-primary-dark"
                : "bg-gray-300 hover:bg-gray-400 text-primary-dark"
            }`}
            size="sm"
            disabled={!available}
          >
            {available ? "Book Now" : "Unavailable"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section className="w-full max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-primary-dark mb-3">
          Our Transportation Services
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Premium private transfers and travel solutions in Saudi Arabia
        </p>
      </div>

      <div className="grid grid-cols-1 sm:w-5/6 mx-auto md:w-full md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>

      <div className="mt-16 text-center bg-gradient-to-r from-primary/5 to-primary/10 p-8 rounded-xl">
        <h2 className="text-2xl font-semibold text-primary-dark mb-4">
          Need a Custom Solution?
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          We specialize in personalized transportation services tailored to your
          specific needs.
        </p>
        <Button className="bg-primary hover:bg-primary-dark  px-4 sm:px-8 py-6 text-xs sm:text-sm  md:text-base gap-2 cursor-pointer">
          <FiSend />
          Request Custom Offer
        </Button>
      </div>
    </section>
  );
}
