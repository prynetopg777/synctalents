import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="bg-[#061b36] py-20 relative overflow-hidden">
      {/* Decorative Map Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
        <img
          alt="Background Pattern"
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtKgKvYcXl8j1nzmhK1BV0pJhTId4_-eCiF7BYBn55v5J8-2vZ8H-TVU0ZvlfVhboEbt9xpNytw34EAEJLmjpcFN-ipNNxVeLcHrbd6NBQVwy-gDZkLyizQbIW4v6BR5ja_VI-XkGQqusz0i69S-KjAVYakGdoT_6J2OazqhDBzgvfTEsOxZr-Y64E8u75QLAigdNhVmKy53EO45NyXbyhiQjQKJLWccODP6weW36Lb8aR7nAHJnYYlKT14fXjI7jiW9-LfuYm0lc"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center md:text-left flex flex-col md:flex-row md:items-center justify-between gap-10 max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-accent uppercase tracking-widest text-xs font-bold mb-4">Ready to scale your team?</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Let's Build Your Offshore Team Today</h2>
          <p className="text-blue-100 text-lg opacity-80 mb-4">Join hundreds of companies that trust SyncTalents to power their growth.</p>
        </div>
        
        <div className="flex flex-col items-center">
          <Link
            href="#get-started"
            className={cn(
              buttonVariants({ variant: "default", size: "lg" }),
              "bg-accent hover:bg-orange-600 text-white font-bold px-10 py-6 rounded-lg text-lg hover:-translate-y-0.5 transition-all duration-200 shadow-sm hover:shadow-md mb-4 w-full md:w-auto h-auto"
            )}
          >
            Get Qualified Candidates Now
          </Link>
          
          <div className="flex items-center gap-4 py-2">
            <span className="h-px w-8 bg-gray-600"></span>
            <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">or</span>
            <span className="h-px w-8 bg-gray-600"></span>
          </div>
          
          <Link href="#whatsapp" className="flex items-center gap-2 text-green-400 font-bold hover:text-green-300 transition group">
            <img alt="WhatsApp" className="w-6 h-6 group-hover:scale-110 transition" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8FTGF2ZRXxc9vNhLiO1qG8rHsPXk9ykNWwgKp6QtmMx5sPNjZcU_eVAkYtEVM6o4qwcJMOkDX7B6pP8ula5GKzB2AW5q_WgzIdbzVfb9q6pMbqz5UmYJOJ_pfpnb00nyacBN9LxF2RvHa2Ech72xKawXYhEV95Pu33pgFmGDvlmIoAyheD06zL9aieUGYV_-hSf-g_Qnx5MUzaMq_BP8O2cClfHh_yJIXZJuRs2B2w7FbLzxrHIDkjnSJlFbAL55VnsrJkDovAnY" />
            Chat with us on WhatsApp
          </Link>
        </div>
      </div>
    </section>
  );
}
