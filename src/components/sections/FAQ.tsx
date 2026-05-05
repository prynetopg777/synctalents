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
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-16">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          <Accordion className="w-full space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-white px-6 rounded-lg border border-gray-200 shadow-sm overflow-hidden mb-4 last:mb-0">
                <AccordionTrigger className="hover:no-underline font-semibold text-gray-800 text-left py-6">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6">
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
