"use client";

import { useState } from "react";
import Marquee from "react-fast-marquee";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

// ----------------------
// Card Type Definition
// ----------------------
type CardType = {
  id: number;
  name: string;
  place: string;
  description: string;
  starts: number;
};

// ----------------------
// Star Rating Component
// ----------------------
function StarRating({ rating }: { rating: number }) {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  for (let i = 1; i <= 5; i++) {
    if (i <= fullStars) {
      stars.push(<FaStar key={i} className="text-yellow-400" />);
    } else if (i === fullStars + 1 && hasHalfStar) {
      stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
    } else {
      stars.push(<FaStar key={i} className="text-gray-300" />);
    }
  }

  return <div className="flex gap-0.5">{stars}</div>;
}

// ----------------------
// Client Card Component
// ----------------------
function Card({ id, name, place, description, starts }: CardType) {
  return (
    <div
      key={id}
      className="flex flex-col justify-start bg-white px-6 py-6 m-1 mx-auto items-start md:w-full 
                 shadow-sm hover:shadow-md transition-shadow duration-200 border rounded-lg border-gray-100
                 min-w-[280px] w-5/6 sm:min-w-[300px] md:min-w-[350px] max-w-[350] lg:max-w-[400px] xl:max-w-[450px]"
    >
      <div className="flex flex-row items-start justify-between w-full mb-4">
        <div className="flex flex-col items-start gap-[1px]">
          <h1 className="text-primary-dark text-lg font-semibold">{name}</h1>
          <span className="text-gray-500 text-xs">{place}</span>
        </div>
        <div className="flex items-center gap-1 mt-1">
          <StarRating rating={starts} />
          <span className="text-gray-500 text-xs ml-1">
            {starts.toFixed(1)}
          </span>
        </div>
      </div>
      <p className="text-gray-600 font-normal text-sm leading-6">
        {description}
      </p>
    </div>
  );
}

// ----------------------
// Card Data
// ----------------------
const cards: CardType[] = [
  {
    id: 1,
    name: "Client A",
    place: "Makkah",
    description:
      "Client A has consistently demonstrated a strong commitment to excellence in the transportation industry. Their professional drivers and well-maintained fleet set the standard for reliability in the region.",
    starts: 4.5,
  },
  {
    id: 2,
    name: "Client B",
    place: "Madinah",
    description:
      "Renowned for operational precision and timeliness, Client B has earned a stellar reputation among pilgrims and locals alike. Their ability to deliver on schedule is unmatched.",
    starts: 4.8,
  },
  {
    id: 3,
    name: "Client C",
    place: "Jeddah",
    description:
      "Specializing in corporate and group travel, Client C offers an impressive balance of comfort, professionalism, and logistical efficiency, making them a favorite among large organizations.",
    starts: 4.2,
  },
  {
    id: 4,
    name: "Client D",
    place: "Riyadh",
    description:
      "Client D sets the bar high with its premium and luxury transportation services. Their fleet of high-end vehicles is ideal for executives, dignitaries, and VIP guests.",
    starts: 5.0,
  },
  {
    id: 5,
    name: "Client E",
    place: "Dammam",
    description:
      "Focused on airport transfers and intercity routes, Client E has built a loyal customer base through excellent customer support, clean vehicles, and friendly drivers.",
    starts: 4.7,
  },
  {
    id: 6,
    name: "Client F",
    place: "Abha",
    description:
      "Client F has become the go-to provider for travel in mountainous regions, known for safety-first practices, knowledgeable drivers, and reliable route planning.",
    starts: 4.4,
  },
  {
    id: 7,
    name: "Client G",
    place: "Taif",
    description:
      "Known for family-friendly service and exceptional comfort, Client G offers personalized packages and an easy booking experience for travelers of all ages.",
    starts: 4.6,
  },
  {
    id: 8,
    name: "Client H",
    place: "Tabuk",
    description:
      "Operating in the northern regions, Client H is praised for their consistent service quality and attention to passenger needs in long-distance journeys.",
    starts: 4.3,
  },
  {
    id: 9,
    name: "Client I",
    place: "Hail",
    description:
      "With a focus on sustainable transportation, Client I integrates eco-friendly practices and hybrid vehicles into their fleet without compromising on comfort.",
    starts: 4.9,
  },
  {
    id: 10,
    name: "Client J",
    place: "Najran",
    description:
      "Client J delivers tailored transportation solutions for both urban and remote areas, ensuring coverage and convenience across wide geographic ranges.",
    starts: 4.5,
  },
];

// ----------------------
// Utility to Split into Rows (Desktop Marquee)
// ----------------------
function splitIntoRows(cards: CardType[], perRow: number = 3): CardType[][] {
  const rows: CardType[][] = [];
  for (let i = 0; i < cards.length; i += perRow) {
    rows.push(cards.slice(i, i + perRow));
  }
  return rows;
}

// ----------------------
// Marquee Row Component (Desktop)
// ----------------------
function CardMarqueeRow({
  cards,
  direction,
}: {
  cards: CardType[];
  direction: "left" | "right";
}) {
  const repeatedCards =
    cards.length < 3 ? [...cards, ...cards, ...cards] : [...cards];

  return (
    <Marquee
      gradient={true}
      gradientWidth="50px"
      gradientColor={"#ffffff"}
      speed={30}
      direction={direction}
      pauseOnHover={true}
      className="w-full "
    >
      <div className="flex items-stretch gap-4">
        {repeatedCards.map((card, i) => (
          <div key={`${card.id}-${i}`} className="mr-4 ">
            <Card {...card} />
          </div>
        ))}
      </div>
    </Marquee>
  );
}

// ----------------------
// Main Component
// ----------------------
export default function OurClient() {
  const rows = splitIntoRows(cards, 3);
  const [visibleCount, setVisibleCount] = useState(3);

  const handleSeeMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, cards.length));
  };

  return (
    <section className="w-full max-w-7xl mx-auto py-12 px-4 sm:px-6 overflow-hidden mt-12 mb-6">
      <h1 className="text-2xl md:text-3xl font-bold text-center text-primary-dark mb-8">
        Our Clients
      </h1>

      {/* ----------- Desktop Marquee Rows ----------- */}
      <div className="hidden md:flex flex-col gap-8">
        {rows.map((row, index) => (
          <CardMarqueeRow
            key={index}
            cards={row}
            direction={index % 2 === 0 ? "left" : "right"}
          />
        ))}
      </div>

      {/* ----------- Mobile Grid with See More ----------- */}
      <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-8">
        {cards.slice(0, visibleCount).map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>

      {/* See More Button (Only if there are more cards) */}
      {visibleCount < cards.length && (
        <div className="md:hidden flex justify-center mt-6">
          <button
            onClick={handleSeeMore}
            className="px-6 py-2 rounded-lg bg-secondary text-white text-sm font-medium hover:bg-secondary-dark transition"
          >
            See More
          </button>
        </div>
      )}
    </section>
  );
}
