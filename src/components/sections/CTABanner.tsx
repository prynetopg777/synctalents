import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function CTABanner() {
  return (
    <section id="book" className="bg-[#061b36] py-[var(--section-py)] relative overflow-hidden">
      {/* Decorative Map Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
        <img
          alt="Background Pattern"
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtKgKvYcXl8j1nzmhK1BV0pJhTId4_-eCiF7BYBn55v5J8-2vZ8H-TVU0ZvlfVhboEbt9xpNytw34EAEJLmjpcFN-ipNNxVeLcHrbd6NBQVwy-gDZkLyizQbIW4v6BR5ja_VI-XkGQqusz0i69S-KjAVYakGdoT_6J2OazqhDBzgvfTEsOxZr-Y64E8u75QLAigdNhVmKy53EO45NyXbyhiQjQKJLWccODP6weW36Lb8aR7nAHJnYYlKT14fXjI7jiW9-LfuYm0lc"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center md:text-left flex flex-col md:flex-row md:items-center justify-between gap-10 max-w-[var(--container-max)]">
        <div className="max-w-2xl">
          <p className="text-accent uppercase tracking-widest text-xs font-bold mb-4">Ready to scale your team?</p>
          <h2 className="text-4xl lg:text-[clamp(2.5rem,4vw,3.5rem)] font-bold text-white mb-6 tracking-tight">Let's Build Your Offshore Team Today</h2>
          <p className="text-blue-100 text-lg opacity-80 mb-4">Join hundreds of companies that trust SyncTalents to power their growth.</p>
        </div>
        
        <div className="flex flex-col items-center md:pr-40 relative">
          {/* Clean Professional Curved Arrow */}
          <div className="absolute -left-24 -top-20 hidden md:block pointer-events-none">
            <svg width="130" height="110" viewBox="0 0 130 110" fill="none" xmlns="http://www.w3.org/2000/svg" className="-rotate-12 opacity-80">
              <path 
                d="M10 20C40 5 90 20 110 85" 
                stroke="white" 
                strokeWidth="4" 
                strokeLinecap="round" 
              />
              <path 
                d="M95 72L110 88L125 72" 
                stroke="white" 
                strokeWidth="4" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
            </svg>
          </div>

          <Link
            href="#get-started"
            className={cn(
              buttonVariants({ variant: "default", size: "lg" }),
              "bg-accent hover:bg-orange-600 text-white font-bold px-12 py-7 rounded-xl text-xl hover:-translate-y-1 transition-all duration-300 shadow-xl hover:shadow-2xl mb-4 w-full md:w-auto h-auto relative z-10"
            )}
          >
            Get Qualified Candidates Now
          </Link>
        </div>
      </div>
    </section>
  );
}
