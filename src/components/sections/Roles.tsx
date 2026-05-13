"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Roles() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const roles = [
    {
      title: "Customer Support & CX",
      desc: "Inbound, outbound, and live chat support for seamless experiences.",
      extendedDesc: "Our customer support specialists are trained to handle complex inquiries with empathy and efficiency. From technical troubleshooting to billing support, we ensure your customers feel heard and valued across all channels including email, phone, and live chat.",
      image: "/images/role-support.png",
      cta: "Hire Support Team",
      icon: (
        <svg className="w-6 h-6 lg:w-8 lg:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 10.606l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      title: "Virtual Assistants (VA)",
      desc: "Executive, administrative, and personal support for busy professionals.",
      extendedDesc: "Free up your time by delegating administrative tasks to our highly organized virtual assistants. They excel at calendar management, email correspondence, travel arrangements, and data entry, allowing you to focus on high-level strategic growth.",
      image: "/images/role-va.png",
      cta: "Get a VA Today",
      icon: (
        <svg className="w-6 h-6 lg:w-8 lg:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 21h6l-.75-4M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Sales & Lead Gen",
      desc: "Driving growth through proactive outreach and lead acquisition.",
      extendedDesc: "Scale your revenue with a dedicated sales development team. Our specialists are experts in lead prospecting, cold outreach, and appointment setting, ensuring your sales pipeline is always full of qualified opportunities.",
      image: "/images/role-sales.png",
      cta: "Build Sales Team",
      icon: (
        <svg className="w-6 h-6 lg:w-8 lg:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      title: "E-commerce Support",
      desc: "Specialized support for Shopify, Amazon, and multi-channel platforms.",
      extendedDesc: "Manage your online store with ease. From product listing and inventory management to order processing and customer inquiries, our e-commerce experts help you maintain a 5-star rating on Amazon, Shopify, and eBay.",
      image: "/images/role-ecommerce.png",
      cta: "Hire Store Manager",
      icon: (
        <svg className="w-6 h-6 lg:w-8 lg:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Back Office & Admin",
      desc: "Efficient data management, processing, and admin operations.",
      extendedDesc: "Optimize your operations with our back-office solutions. We handle everything from document processing and database management to internal reporting and workflow automation, ensuring your business runs like a well-oiled machine.",
      image: "/images/value-props.png",
      cta: "Hire Admin Staff",
      icon: (
        <svg className="w-6 h-6 lg:w-8 lg:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "Finance & Accounting",
      desc: "Expert bookkeeping, billing, and financial data management.",
      extendedDesc: "Maintain financial clarity with our dedicated accounting support. We provide expert assistance with bookkeeping, invoice processing, payroll management, and financial reconciliation using modern software like QuickBooks and Xero.",
      image: "/images/newstockimagee.png",
      cta: "Hire Accountant",
      icon: (
        <svg className="w-6 h-6 lg:w-8 lg:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];

  return (
    <section id="roles" className="py-16 lg:py-32 xl:py-40 bg-[#fdfcfb]">
      <div className="container mx-auto px-4 max-w-[1600px]">
        <h2 className="text-3xl lg:text-5xl font-black text-center text-gray-900 mb-10 lg:mb-16 tracking-tight">
          Roles We Can Fill
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {roles.map((role, i) => (
            <div 
              key={i} 
              className={cn(
                "p-8 lg:p-10 rounded-2xl transition-all duration-500 group flex flex-col h-full cursor-pointer relative overflow-hidden",
                "bg-white text-gray-900 border border-gray-100 shadow-sm",
                "hover:bg-[#0d3a71] hover:text-white hover:scale-[1.02] hover:shadow-xl"
              )}
              onClick={() => setExpandedId(i)}
            >
              <div className={cn(
                "mb-6 p-3 rounded-xl transition-colors duration-500 inline-flex self-start",
                "bg-gray-50 text-blue-600 group-hover:bg-white/10 group-hover:text-white"
              )}>
                {role.icon}
              </div>
              
              <h4 className="font-black text-xl lg:text-2xl mb-4 tracking-tight leading-tight">
                {role.title}
              </h4>
              
              <p className={cn(
                "text-sm lg:text-base font-medium leading-relaxed mb-8 transition-colors duration-500",
                "text-gray-500 group-hover:text-blue-100/80"
              )}>
                {role.desc}
              </p>

              <div
                className={cn(
                  "mt-auto flex items-center gap-2 text-xs font-black uppercase tracking-widest transition-all duration-500",
                  "text-gray-900 group-hover:text-white group-hover:gap-3"
                )}
              >
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Forefront Expansion Modal */}
      {expandedId !== null && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 lg:p-12 animate-in fade-in duration-300"
          onClick={() => setExpandedId(null)}
        >
          {/* Blurred Backdrop */}
          <div className="absolute inset-0 bg-[#061b36]/60 backdrop-blur-xl transition-all duration-500" />
          
          {/* Modal Content */}
          <div 
            className="relative bg-white w-full max-w-5xl rounded-[2rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row animate-in zoom-in-95 duration-500"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 z-20 p-2 rounded-full bg-gray-100/80 hover:bg-white transition-colors shadow-sm"
              onClick={() => setExpandedId(null)}
            >
              <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Left: Image */}
            <div className="lg:w-1/2 relative h-64 lg:h-auto min-h-[300px]">
              <Image 
                src={roles[expandedId].image} 
                alt={roles[expandedId].title} 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent lg:hidden" />
            </div>

            {/* Right: Content */}
            <div className="lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center">
              <div className="inline-flex p-3 rounded-xl bg-blue-50 text-blue-600 mb-8 self-start">
                {roles[expandedId].icon}
              </div>
              
              <h3 className="text-3xl lg:text-5xl font-black text-gray-900 mb-6 tracking-tight leading-tight">
                {roles[expandedId].title}
              </h3>
              
              <p className="text-base lg:text-lg text-gray-600 font-medium leading-relaxed mb-8">
                {roles[expandedId].extendedDesc}
              </p>

              <a 
                href="#hero"
                className="inline-flex items-center justify-center px-10 py-5 bg-accent hover:bg-orange-600 text-white font-bold rounded-xl transition-all duration-300 shadow-xl shadow-orange-500/20 text-lg group"
                onClick={() => setExpandedId(null)}
              >
                {roles[expandedId].cta}
                <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

