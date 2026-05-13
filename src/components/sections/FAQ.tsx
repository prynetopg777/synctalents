import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function FAQ() {
  const faqs = [
    { q: "How fast can I hire?", a: "Most companies hire and onboard their first team member within 7-14 days after the initial consultation." },
    { q: "Do you handle onboarding?", a: "Yes, we assist with the entire onboarding process, including setup and initial training coordination." },
    { q: "What roles can you fill?", a: "We specialize in Customer Support, Virtual Assistants, Sales, Operations, and Finance Support." },
    { q: "Can I hire part-time or full-time?", a: "We offer both part-time and full-time staffing solutions tailored to your business needs." },
    { q: "How much does it cost?", a: "Pricing varies by role and experience level, but typically saves you up to 70% compared to local hiring." },
    { q: "What makes SyncTalents different?", a: "Our rigorous pre-vetting process and high-touch support ensure you get top-tier talent that sticks." }
  ];

  return (
    <section id="faq" className="py-16 lg:py-32 xl:py-40 bg-[#fdfcfb]">
      <div className="container mx-auto px-6 max-w-[1600px]">
        
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-[10px] lg:text-xs font-bold uppercase tracking-widest mb-6">
            SyncTalents FAQ
          </span>
          <h2 className="text-3xl lg:text-5xl font-black text-gray-900 mb-6 lg:mb-8 tracking-tight">
            We&apos;re here to answer <br className="hidden lg:block" />
            all your questions.
          </h2>
          <p className="text-base lg:text-lg text-gray-500 font-medium leading-relaxed max-w-2xl mx-auto">
            If you&apos;re new to SyncTalents or looking to scale your team, these answers will help you get started.
          </p>
        </div>

        {/* Accordion Section */}
        <div className="max-w-3xl mx-auto">
          <Accordion className="w-full space-y-3 lg:space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem 
                key={i} 
                value={`item-${i}`} 
                className="bg-white px-5 lg:px-6 py-1 lg:py-2 rounded-xl lg:rounded-2xl border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-md overflow-hidden"
              >
                <AccordionTrigger className="hover:no-underline font-bold text-base lg:text-lg text-gray-900 text-left py-4 lg:py-6 hover:text-blue-600 transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-500 pb-5 lg:pb-6 text-sm lg:text-base leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Footer CTA */}
        <div className="mt-16 lg:mt-20 text-center">
          <p className="text-[10px] lg:text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">
            Still have questions?
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="#hero"
              className={cn(
                buttonVariants({ variant: "default" }),
                "w-full sm:w-auto bg-[#0d3a71] hover:bg-blue-900 text-white font-black px-10 py-7 lg:py-8 rounded-xl transition-all duration-300 text-sm lg:text-base shadow-lg shadow-blue-900/10 h-auto"
              )}
            >
              Contact Us
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}



