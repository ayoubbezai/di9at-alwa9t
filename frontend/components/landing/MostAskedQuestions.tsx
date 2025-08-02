"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

const faqItems = [
  {
    question_en: "How does our service work?",
    question_ar: "كيف تعمل خدمتنا؟",
    answer_en:
      "Choose the type of service you need (city transfers, airport pickups, hourly rental). Submit your request via form or WhatsApp. Our team confirms the details, pricing, and dispatches a professional driver on time.",
    answer_ar:
      "اختر نوع الخدمة التي تحتاجها (نقل داخل المدينة، استقبال من المطار، تأجير بالساعة). أرسل طلبك عبر النموذج أو الواتساب. يقوم فريقنا بتأكيد التفاصيل والتسعير وإرسال سائق محترف في الوقت المحدد.",
  },
  {
    question_en: "Can I book a trip last minute?",
    question_ar: "هل يمكنني حجز رحلة في اللحظة الأخيرة؟",
    answer_en:
      "Yes, we accept bookings at short notice. Contact us directly for immediate arrangements.",
    answer_ar:
      "نعم، نقبل الحجوزات في اللحظات الأخيرة. تواصل معنا مباشرة لترتيبات فورية.",
  },
  {
    question_en: "Is the service available 24/7?",
    question_ar: "هل الخدمة متوفرة على مدار الساعة؟",
    answer_en:
      "Yes, we operate around the clock to meet all your transportation needs.",
    answer_ar: "نعم، نعمل على مدار الساعة لتلبية جميع احتياجاتك في التنقل.",
  },
  {
    question_en: "Which cities do we serve?",
    question_ar: "ما هي المدن التي نخدمها؟",
    answer_en:
      "We currently operate in Makkah, Madinah, Riyadh, Jeddah, and more.",
    answer_ar: "نحن نعمل حاليًا في مكة، المدينة، الرياض، جدة، وغيرها.",
  },
  {
    question_en: "What payment methods are accepted?",
    question_ar: "ما هي طرق الدفع المقبولة؟",
    answer_en: "We accept cash, bank transfers, and major digital wallets.",
    answer_ar:
      "نقبل الدفع نقدًا، أو عن طريق التحويل البنكي، أو المحافظ الرقمية الرئيسية.",
  },
];

export default function MostAskedQuestions({
  t,
  isRtl,
}: {
  t: (key: string) => string;
  isRtl: boolean;
}) {
  return (
    <section className="w-full max-w-5xl mx-auto py-12 px-4 sm:px-6">
      <h1 className="text-[26px] md:text-4xl font-bold text-center text-primary-dark mb-12">
        {t("most_asked.title")}
      </h1>

      <Accordion.Root
        type="multiple"
        className="w-5/6 mx-auto lg:w-full space-y-4"
        defaultValue={["item-0"]}
      >
        {faqItems.map((item, index) => (
          <Accordion.Item
            key={index}
            value={`item-${index}`}
            className="group border-gray-200 border-[1px] rounded-lg overflow-hidden transition-all hover:border-primary/30"
          >
            <Accordion.Header>
              <Accordion.Trigger
                className={`flex ${
                  isRtl ? "flex-row-reverse " : " flex-row "
                }w-full justify-between items-center px-6 py-4 text-left font-medium text-primary-dark/80 bg-gray-50/80 hover:bg-[#f9f9f9] transition-colors`}
              >
                <span className="text-base md:text-[1.2rem] font-medium text-primary-dark/95">
                  {isRtl ? item.question_ar : item.question_en}
                </span>
                <ChevronDown className="h-5 w-5 text-primary transition-transform duration-300 group-data-[state=open]:rotate-180 shrink-0" />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="px-6 pb-4 pt-1 text-gray-600 text-base leading-relaxed transition-all data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden">
              <div className={`pb-2 ${isRtl ? "text-end" : "text-start"}`}>
                {isRtl ? item.answer_ar : item.answer_en}
              </div>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </section>
  );
}
