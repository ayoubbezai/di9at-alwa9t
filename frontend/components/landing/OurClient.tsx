type CardType = {
  id: number;
  name: string;
  place: string;
  description: string;
  starts: number;
};

function Card({ id, name, place, description, starts }: CardType) {
  return (
    <div
      key={id}
      className="flex flex-col gap-2 justify-between bg-gray-50 px-4 py-5 lg:p-4 items-start w-full 
                 shadow-sm hover:shadow-md transition-shadow duration-200 border rounded-lg border-gray-100"
    >
      <div className="flex flex-row gap-3 items-start"></div>
    </div>
  );
}

const cards: CardType[] = [
  {
    id: 1,
    name: "Client A",
    place: "Makkah",
    description: "A leading client in the transportation sector.",
    starts: 4.5,
  },
  {
    id: 2,
    name: "Client B",
    place: "Madinah",
    description: "Known for their punctuality and reliability.",
    starts: 4.8,
  },
  {
    id: 3,
    name: "Client C",
    place: "Jeddah",
    description: "Specializes in group transportation services.",
    starts: 4.2,
  },
];

export default function OurClient() {
  return (
    <section className="w-full max-w-7xl mx-auto py-12 px-4 sm:px-6">
      <h1 className="text-[26px] md:text-4xl font-bold text-center text-primary-dark mb-12">
        Our Clients
      </h1>
      <div className="flex flex-row items-center justify-between px-12 gap-12">
        {cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            name={card.name}
            place={card.place}
            description={card.description}
            starts={card.starts}
          />
        ))}
      </div>
    </section>
  );
}
