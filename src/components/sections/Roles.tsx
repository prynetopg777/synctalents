import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Roles() {
  const roles = [
    {
      title: "Customer Support & CX",
      desc: "Inbound, outbound, and live chat support for seamless experiences.",
      icon: (
        <svg className="w-6 h-6 lg:w-8 lg:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 10.606l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      title: "Virtual Assistants (VA)",
      desc: "Executive, administrative, and personal support for busy professionals.",
      icon: (
        <svg className="w-6 h-6 lg:w-8 lg:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 21h6l-.75-4M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Back Office & Admin",
      desc: "Efficient data management, processing, and admin operations.",
      icon: (
        <svg className="w-6 h-6 lg:w-8 lg:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "Sales & Lead Gen",
      desc: "Driving growth through proactive outreach and lead acquisition.",
      icon: (
        <svg className="w-6 h-6 lg:w-8 lg:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      title: "E-commerce Support",
      desc: "Specialized support for Shopify, Amazon, and multi-channel platforms.",
      icon: (
        <svg className="w-6 h-6 lg:w-8 lg:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Finance & Accounting",
      desc: "Expert bookkeeping, billing, and financial data management.",
      icon: (
        <svg className="w-6 h-6 lg:w-8 lg:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "Logistics & Ops",
      desc: "Managing supply chain, shipping, and operational workflows.",
      icon: (
        <svg className="w-6 h-6 lg:w-8 lg:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    },
    {
      title: "Healthcare",
      desc: "Medical billing, scheduling, and patient coordination support.",
      icon: (
        <svg className="w-6 h-6 lg:w-8 lg:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.183.12l-1.43.715a2 2 0 00-1.104 1.789v.11a2 2 0 002 2h15.336a2 2 0 002-2v-.11a2 2 0 00-1.104-1.789l-1.43-.715zM12 11V3m0 0l3 3m-3-3L9 6" />
        </svg>
      )
    },
    {
      title: "Specialized Roles",
      desc: "Custom-tailored solutions for unique industry requirements.",
      icon: (
        <svg className="w-6 h-6 lg:w-8 lg:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.382-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      )
    }
  ];

  return (
    <section id="roles" className="py-16 lg:py-24 bg-[#fdfcfb]">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl lg:text-5xl font-black text-center text-gray-900 mb-10 lg:mb-16 tracking-tight">
          Roles We Can Fill
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6">
          {roles.map((role, i) => (
            <div 
              key={i} 
              className={cn(
                "p-5 lg:p-10 rounded-2xl transition-all duration-500 group flex flex-col items-start h-full",
                "bg-white text-gray-900 border border-gray-100 shadow-sm",
                "hover:bg-[#0d3a71] hover:text-white hover:scale-[1.03] hover:shadow-2xl hover:z-10"
              )}
            >
              <div className={cn(
                "mb-4 lg:mb-8 p-2 lg:p-3 rounded-lg lg:rounded-xl transition-colors duration-500",
                "bg-gray-50 text-blue-600 group-hover:bg-white/10 group-hover:text-white"
              )}>
                {role.icon}
              </div>
              
              <h4 className="font-black text-sm lg:text-xl mb-2 lg:mb-4 tracking-tight leading-tight">
                {role.title}
              </h4>
              
              <p className={cn(
                "text-[10px] lg:text-sm font-medium leading-relaxed mb-6 lg:mb-10 transition-colors duration-500 line-clamp-3 lg:line-clamp-none",
                "text-gray-500 group-hover:text-blue-100/80"
              )}>
                {role.desc}
              </p>
              
              <Link
                href="#details"
                className={cn(
                  "mt-auto flex items-center gap-1 lg:gap-2 text-[9px] lg:text-xs font-black uppercase tracking-widest transition-all duration-500 opacity-80 lg:opacity-100",
                  "text-gray-900 group-hover:text-white group-hover:gap-3"
                )}
              >
                Details
                <svg className="w-3 h-3 lg:w-4 lg:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}




