"use client";

import { useState } from "react";
import Marquee from "react-fast-marquee";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

// ----------------------
// Card Type Definition
// ----------------------
type CardType = {
  id: number;
  name_en: string;
  name_ar: string;
  place_en: string;
  place_ar: string;
  description_en: string;
  description_ar: string;
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
function Card({
  id,
  name_en,
  name_ar,
  place_en,
  place_ar,
  description_en,
  description_ar,
  starts,
  isRtl,
}: CardType & { isRtl: boolean }) {
  return (
    <div
      key={id}
      className="flex flex-col justify-start bg-white px-6 py-6 m-1 mx-auto items-start md:w-full 
                 shadow-sm hover:shadow-md transition-shadow duration-200 border rounded-lg border-gray-100
                 min-w-[280px] w-5/6 sm:min-w-[300px] md:min-w-[350px] max-w-[350] lg:max-w-[400px] xl:max-w-[450px]"
    >
      <div
        className={`flex ${
          isRtl ? "flex-row-reverse " : "flex-row"
        } items-start justify-between w-full mb-4`}
      >
        <div
          className={`flex flex-col ${
            isRtl ? "items-end" : "items-start"
          }  gap-[1px]`}
        >
          <h1 className="text-primary-dark text-lg font-semibold">
            {isRtl ? name_ar : name_en}
          </h1>
          <span className="text-gray-500 text-xs">
            {isRtl ? place_ar : place_en}
          </span>
        </div>
        <div className="flex items-center gap-1 mt-1">
          <StarRating rating={starts} />
          <span className="text-gray-500 text-xs ml-1">
            {starts.toFixed(1)}
          </span>
        </div>
      </div>
      <p
        className={`text-gray-600 ${
          isRtl ? " text-end text-base" : "text-start text-sm "
        } font-normal  leading-6`}
      >
        {isRtl ? description_ar : description_en}
      </p>
    </div>
  );
}

// ----------------------
// Example Card Data
// ----------------------
const cards: CardType[] = [
  {
    id: 1,
    name_en: "Client A",
    name_ar: "العميل أ",
    place_en: "Makkah",
    place_ar: "مكة",
    description_en:
      "Client A has consistently demonstrated a strong commitment to excellence in the transportation industry. Their professional drivers and well-maintained fleet set the standard for reliability in the region.",
    description_ar:
      "يُظهر العميل أ التزامًا قويًا بالتميز في صناعة النقل. سائقيهم المحترفين وأسطولهم المُصان جيدًا يمثلان معيار الموثوقية في المنطقة.",
    starts: 4.5,
  },
  {
    id: 2,
    name_en: "Client B",
    name_ar: "العميل ب",
    place_en: "Madinah",
    place_ar: "المدينة المنورة",
    description_en:
      "Renowned for operational precision and timeliness, Client B has earned a stellar reputation among pilgrims and locals alike. Their ability to deliver on schedule is unmatched.",
    description_ar:
      "يُعرف العميل ب بالدقة التشغيلية والانضباط الزمني، وقد اكتسب سمعة رائعة بين الحجاج والسكان المحليين. قدرتهم على الالتزام بالمواعيد لا مثيل لها.",
    starts: 4.8,
  },
  {
    id: 3,
    name_en: "Client C",
    name_ar: "العميل ج",
    place_en: "Jeddah",
    place_ar: "جدة",
    description_en:
      "Specializing in corporate and group travel, Client C offers an impressive balance of comfort, professionalism, and logistical efficiency, making them a favorite among large organizations.",
    description_ar:
      "يتخصص العميل ج في السفر الجماعي والشركات، ويقدم توازنًا رائعًا بين الراحة والاحترافية والكفاءة اللوجستية، مما يجعله مفضلًا لدى المؤسسات الكبرى.",
    starts: 4.2,
  },
  {
    id: 4,
    name_en: "Client D",
    name_ar: "العميل د",
    place_en: "Riyadh",
    place_ar: "الرياض",
    description_en:
      "Client D sets the bar high with its premium and luxury transportation services. Their fleet of high-end vehicles is ideal for executives, dignitaries, and VIP guests.",
    description_ar:
      "يرفع العميل د سقف التوقعات من خلال خدمات النقل الفاخرة والمتميزة. أسطوله من السيارات الفاخرة مثالي للمديرين التنفيذيين وكبار الشخصيات.",
    starts: 5.0,
  },
  {
    id: 5,
    name_en: "Client E",
    name_ar: "العميل هـ",
    place_en: "Dammam",
    place_ar: "الدمام",
    description_en:
      "Focused on airport transfers and intercity routes, Client E has built a loyal customer base through excellent customer support, clean vehicles, and friendly drivers.",
    description_ar:
      "يركز العميل هـ على خدمات النقل من وإلى المطار والمسافات بين المدن، وقد بنى قاعدة عملاء مخلصة بفضل دعمه الممتاز ونظافة مركباته وسائقيه الودودين.",
    starts: 4.7,
  },
  {
    id: 6,
    name_en: "Client F",
    name_ar: "العميل ف",
    place_en: "Abha",
    place_ar: "أبها",
    description_en:
      "Client F has become the go-to provider for travel in mountainous regions, known for safety-first practices, knowledgeable drivers, and reliable route planning.",
    description_ar:
      "أصبح العميل ف الخيار الأول للسفر في المناطق الجبلية، ويُعرف بممارساته التي تضع السلامة أولًا وسائقيه ذوي الخبرة وتخطيطه الدقيق للرحلات.",
    starts: 4.4,
  },
  {
    id: 7,
    name_en: "Client G",
    name_ar: "العميل ج",
    place_en: "Taif",
    place_ar: "الطائف",
    description_en:
      "Known for family-friendly service and exceptional comfort, Client G offers personalized packages and an easy booking experience for travelers of all ages.",
    description_ar:
      "يُعرف العميل ج بخدمته الملائمة للعائلات وراحته الاستثنائية، ويوفر باقات مخصصة وتجربة حجز سهلة للمسافرين من جميع الأعمار.",
    starts: 4.6,
  },
  {
    id: 8,
    name_en: "Client H",
    name_ar: "العميل ح",
    place_en: "Tabuk",
    place_ar: "تبوك",
    description_en:
      "Operating in the northern regions, Client H is praised for their consistent service quality and attention to passenger needs in long-distance journeys.",
    description_ar:
      "يعمل العميل ح في المناطق الشمالية، ويُشيد بخدمته المستمرة واهتمامه باحتياجات الركاب في الرحلات الطويلة.",
    starts: 4.3,
  },
  {
    id: 9,
    name_en: "Client I",
    name_ar: "العميل ي",
    place_en: "Hail",
    place_ar: "حائل",
    description_en:
      "With a focus on sustainable transportation, Client I integrates eco-friendly practices and hybrid vehicles into their fleet without compromising on comfort.",
    description_ar:
      "يركز العميل ي على النقل المستدام، ويُدمج ممارسات صديقة للبيئة ومركبات هجينة ضمن أسطوله دون المساومة على الراحة.",
    starts: 4.9,
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
  isRtl,
}: {
  cards: CardType[];
  direction: "left" | "right";
  isRtl: boolean;
}) {
  const repeatedCards =
    cards.length < 3 ? [...cards, ...cards, ...cards] : [...cards];

  return (
    <Marquee
      gradient={true}
      gradientWidth="50px"
      gradientColor="#ffffff"
      speed={30}
      direction={direction}
      pauseOnHover={true}
      className="w-full"
    >
      <div className="flex items-stretch gap-4">
        {repeatedCards.map((card, i) => (
          <div key={`${card.id}-${i}`} className="mr-4">
            <Card {...card} isRtl={isRtl} />
          </div>
        ))}
      </div>
    </Marquee>
  );
}

// ----------------------
// Main Component
// ----------------------
export default function OurClient({
  t,
  isRtl,
}: {
  t: (key: string) => string;
  isRtl: boolean;
}) {
  const rows = splitIntoRows(cards, 3);
  const [visibleCount, setVisibleCount] = useState(3);

  const handleSeeMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, cards.length));
  };

  return (
    <section className="w-full max-w-7xl mx-auto py-12 px-4 sm:px-6 overflow-hidden mt-12 mb-6">
      <h1 className="text-2xl md:text-3xl font-bold text-center text-primary-dark mb-8">
        {t("our_clients.title")}
      </h1>

      {/* ----------- Desktop Marquee Rows ----------- */}
      <div className="hidden md:flex flex-col gap-8">
        {rows.map((row, index) => (
          <CardMarqueeRow
            key={index}
            cards={row}
            direction={index % 2 === 0 ? "left" : "right"}
            isRtl={isRtl}
          />
        ))}
      </div>

      {/* ----------- Mobile Grid with See More ----------- */}
      <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-8">
        {cards.slice(0, visibleCount).map((card) => (
          <Card key={card.id} {...card} isRtl={isRtl} />
        ))}
      </div>

      {/* See More Button (Only if there are more cards) */}
      {visibleCount < cards.length && (
        <div className="md:hidden flex justify-center mt-6">
          <button
            onClick={handleSeeMore}
            className="px-6 py-2 rounded-lg bg-secondary text-white text-sm font-medium hover:bg-secondary-dark transition"
          >
            {t("our_clients.see_more")}
          </button>
        </div>
      )}
    </section>
  );
}
