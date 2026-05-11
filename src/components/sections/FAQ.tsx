import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    { q: "How fast can I hire?", a: "Most companies hire and onboard their first team member within 7-14 days after the initial consultation." },
    { q: "Do you handle onboarding?", a: "Yes, we assist with the entire onboarding process, including setup and initial training coordination." },
    { q: "What roles can you fill?", a: "We specialize in Customer Support, Virtual Assistants, Data Entry, Operations, and Accounting Support." },
    { q: "Can I hire part-time or full-time?", a: "We offer both part-time and full-time staffing solutions tailored to your business needs." },
    { q: "How much does it cost?", a: "Pricing varies by role and experience level, but typically saves you up to 70% compared to local hiring." },
    { q: "What makes SyncTalents different?", a: "Our rigorous pre-vetting process and high-touch support ensure you get top-tier talent that sticks." }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#0d3a71] mb-16 tracking-tight">Frequently Asked Questions</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-0">
          <Accordion className="w-full">
            {faqs.slice(0, 3).map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-gray-100 last:border-b-0">
                <AccordionTrigger className="hover:no-underline font-bold text-base text-gray-900 text-left py-6">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-500 pb-6 text-sm leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <Accordion className="w-full">
            {faqs.slice(3).map((faq, i) => (
              <AccordionItem key={i + 3} value={`item-${i + 3}`} className="border-b border-gray-100 last:border-b-0">
                <AccordionTrigger className="hover:no-underline font-bold text-base text-gray-900 text-left py-6">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-500 pb-6 text-sm leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
