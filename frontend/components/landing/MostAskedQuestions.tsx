"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

const faqItems = [
  {
    question: "How does our service work?",
    answer:
      "Choose the type of service you need (city transfers, airport pickups, hourly rental). Submit your request via form or WhatsApp. Our team confirms the details, pricing, and dispatches a professional driver on time.",
  },
  {
    question: "Can I book a trip last minute?",
    answer:
      "Yes, we accept bookings at short notice. Contact us directly for immediate arrangements.",
  },
  {
    question: "Is the service available 24/7?",
    answer:
      "Yes, we operate around the clock to meet all your transportation needs.",
  },
  {
    question: "Which cities do we serve?",
    answer:
      "We currently operate in Makkah, Madinah, Riyadh, Jeddah, and more.",
  },
  {
    question: "What payment methods are accepted?",
    answer: "We accept cash, bank transfers, and major digital wallets.",
  },
];

export default function MostAskedQuestions() {
  return (
    <section className="w-full max-w-5xl mx-auto py-12 px-4 sm:px-6">
      <h1 className="text-[26px] md:text-4xl font-bold text-center text-primary-dark mb-12">
        Frequently Asked Questions
      </h1>

      <Accordion.Root
        type="multiple"
        className="w-5/6 mx-auto lg:w-full space-y-4"
        defaultValue={["item-0"]} // First item open by default
      >
        {faqItems.map((item, index) => (
          <Accordion.Item
            key={index}
            value={`item-${index}`}
            className="group  border-gray-200 border-[1px] rounded-lg overflow-hidden transition-all hover:border-primary/30"
          >
            <Accordion.Header>
              <Accordion.Trigger className="flex w-full justify-between items-center px-6 py-4 text-left font-medium text-primary-dark/80 bg-gray-50/80 hover:bg-[#f9f9f9] transition-colors">
                <span className="text-base md:text-[17px] font-medium text-primary-dark/95">
                  {item.question}
                </span>
                <ChevronDown className="h-5 w-5 text-primary transition-transform duration-300 group-data-[state=open]:rotate-180 shrink-0" />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="px-6 pb-4 pt-1 text-gray-600 text-base leading-relaxed transition-all data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden">
              <div className="pb-2">{item.answer}</div>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </section>
  );
}
