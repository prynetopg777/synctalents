"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Roles() {

  const roles = [
    {
      title: "Customer Support & CX",
      desc: "Inbound, outbound, and live chat support for seamless experiences.",
      image: "/images/role-support.png",
      cta: "Hire Support Team",
    },
    {
      title: "Virtual Assistants (VA)",
      desc: "Executive, administrative, and personal support for busy professionals.",
      image: "/images/role-va.png",
      cta: "Get a VA Today",
    },
    {
      title: "Sales & Lead Gen",
      desc: "Driving growth through proactive outreach and lead acquisition.",
      image: "/images/role-sales.png",
      cta: "Build Sales Team",
    },
    {
      title: "E-commerce Support",
      desc: "Specialized support for Shopify, Amazon, and multi-channel platforms.",
      image: "/images/role-ecommerce.png",
      cta: "Hire Store Manager",
    },
    {
      title: "Back Office & Admin",
      desc: "Efficient data management, processing, and admin operations.",
      image: "/images/value-props.png",
      cta: "Hire Admin Staff",
    },
    {
      title: "Finance & Accounting",
      desc: "Expert bookkeeping, billing, and financial data management.",
      image: "/images/newstockimagee.png",
      cta: "Hire Accountant",
    },
    {
      title: "Logistics & Operations",
      desc: "Streamlining supply chain, inventory, and fulfillment processes.",
      image: "/images/role-logistics.png",
      cta: "Hire Ops Manager",
    },
    {
      title: "Healthcare Support",
      desc: "Medical billing, patient scheduling, and telehealth admin.",
      image: "/images/role-healthcare.png",
      cta: "Hire Medical Staff",
    },
    {
      title: "Specialized Roles",
      desc: "Custom solutions for unique business requirements and niche industries.",
      image: "/images/role-specialized.png",
      cta: "Find My Expert",
    }
  ];



  return (
    <section id="roles" className="py-[var(--section-py)] bg-[#061b36] overflow-hidden">
      <div className="container mx-auto px-4 max-w-[var(--container-max)]">
        <div className="mb-10 lg:mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl lg:text-[clamp(2.5rem,5vw,3.5rem)] font-black text-white mb-4 tracking-tight leading-tight">
              Roles We Can <span className="text-white">Fill</span>
            </h2>
            <p className="text-blue-100/60 font-medium text-sm lg:text-base">
              There are hundreds of roles we can recruit for you in the Philippines. Below is a list of some of the most popular roles our clients request.
            </p>
          </div>
        </div>

        {/* Roles Marquee Container */}
        <div className="relative group w-full overflow-hidden mt-8">
          {/* Fading edges for seamless entry/exit */}
          <div className="absolute left-0 top-0 bottom-0 w-12 lg:w-32 bg-gradient-to-r from-[#061b36] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-12 lg:w-32 bg-gradient-to-l from-[#061b36] to-transparent z-10 pointer-events-none"></div>

          <div 
            className="flex shrink-0 animate-marquee gap-6 lg:gap-8 items-stretch w-max pb-12 pt-4 px-4 hover:[animation-play-state:paused]"
            style={{ animationDuration: '45s' }}
          >
            {/* First set of cards */}
            {roles.map((role, i) => (
              <div 
                key={`first-${i}`} 
                className="w-[85vw] sm:w-[350px] lg:w-[380px] shrink-0 bg-white rounded-[2rem] p-4 lg:p-6 shadow-sm flex flex-col h-full transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
              >
                {/* Card Image */}
                <div className="relative h-48 lg:h-56 w-full rounded-[1.5rem] overflow-hidden mb-6">
                  <Image 
                    src={role.image} 
                    alt={role.title} 
                    fill 
                    className="object-cover"
                  />
                </div>
                
                <div className="px-2 pb-2 flex flex-col flex-grow">
                  <h4 className="font-black text-xl lg:text-2xl mb-3 tracking-tight leading-tight text-gray-900">
                    {role.title}
                  </h4>
                  
                  <p className="text-sm lg:text-base font-medium leading-relaxed mb-8 text-gray-500">
                    {role.desc}
                  </p>

                  <Button 
                    asChild
                    className="mt-auto w-full bg-gray-50 hover:bg-blue-600 hover:text-white text-gray-900 font-bold px-8 py-6 rounded-xl transition-all duration-300 shadow-none hover:shadow-lg border border-gray-100 hover:border-blue-600"
                  >
                    <a href="#lead-form">{role.cta}</a>
                  </Button>
                </div>
              </div>
            ))}
            
            {/* Second set of cards for infinite scroll */}
            {roles.map((role, i) => (
              <div 
                key={`second-${i}`} 
                className="w-[85vw] sm:w-[350px] lg:w-[380px] shrink-0 bg-white rounded-[2rem] p-4 lg:p-6 shadow-sm flex flex-col h-full transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
              >
                {/* Card Image */}
                <div className="relative h-48 lg:h-56 w-full rounded-[1.5rem] overflow-hidden mb-6">
                  <Image 
                    src={role.image} 
                    alt={role.title} 
                    fill 
                    className="object-cover"
                  />
                </div>
                
                <div className="px-2 pb-2 flex flex-col flex-grow">
                  <h4 className="font-black text-xl lg:text-2xl mb-3 tracking-tight leading-tight text-gray-900">
                    {role.title}
                  </h4>
                  
                  <p className="text-sm lg:text-base font-medium leading-relaxed mb-8 text-gray-500">
                    {role.desc}
                  </p>

                  <Button 
                    asChild
                    className="mt-auto w-full bg-gray-50 hover:bg-blue-600 hover:text-white text-gray-900 font-bold px-8 py-6 rounded-xl transition-all duration-300 shadow-none hover:shadow-lg border border-gray-100 hover:border-blue-600"
                  >
                    <a href="#lead-form">{role.cta}</a>
                  </Button>
                </div>
              </div>
            ))}
          </div>


        </div>
      </div>
    </section>
  );
}

