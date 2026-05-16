export default function TrustBar() {
  const logos = [
    { name: "Lazada", src: "/images/lazada_logo.png" },
    { name: "Generali", src: "/images/generali_logo.png" },
    { name: "Polland Hopia", src: "/images/pollandhopia_logo.png" },
    { name: "SpeedRegalo", src: "/images/speedregalo_logo.png" },
    { name: "DMCI", src: "/images/dmci_logo.png" }
  ];

  return (
    <section className="py-12 lg:py-20 xl:py-24 bg-white border-b border-gray-100 overflow-hidden relative">
      <div className="container mx-auto px-4 max-w-[var(--container-max)] text-center relative z-10">
        <div className="mb-8 md:mb-12">
          <span className="text-accent font-black uppercase tracking-[0.4em] text-[0.65rem] md:text-xs mb-3 block">Proven Track Record</span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-[#0d3a71] tracking-tight">
            Trusted By <span className="text-blue-600">Growing Companies</span>
          </h2>
        </div>
        
        {/* Marquee Container */}
        <div className="relative flex overflow-hidden group/marquee w-full mt-10 md:mt-16 pt-8">
          {/* Fading edges for premium effect */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
          
          {/* Animated scrolling track */}
          <div className="flex shrink-0 animate-marquee gap-16 md:gap-24 lg:gap-32 items-center">
            {/* First set of logos */}
            {logos.map((logo) => (
              <img
                key={`first-${logo.name}`}
                src={logo.src}
                alt={logo.name}
                className="h-12 sm:h-14 md:h-20 lg:h-24 grayscale hover:grayscale-0 transition-all duration-700 object-contain opacity-50 hover:opacity-100 hover:scale-110"
              />
            ))}
            {/* Duplicate set for seamless infinite scroll */}
            {logos.map((logo) => (
              <img
                key={`second-${logo.name}`}
                src={logo.src}
                alt={logo.name}
                className="h-12 sm:h-14 md:h-20 lg:h-24 grayscale hover:grayscale-0 transition-all duration-700 object-contain opacity-50 hover:opacity-100 hover:scale-110"
              />
            ))}
          </div>
        </div>
      </div>

      
      {/* Subtle background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10vw] md:text-[15vw] font-black text-gray-50/50 pointer-events-none whitespace-nowrap z-0 select-none">
        PARTNERSHIPS
      </div>
    </section>
  );
}
