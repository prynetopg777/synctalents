export default function TrustBar() {
  const logos = [
    { name: "Lazada", src: "/images/lazada_logo.png" },
    { name: "Generali", src: "/images/generali_logo.png" },
    { name: "Polland Hopia", src: "/images/pollandhopia_logo.png" },
    { name: "SpeedRegalo", src: "/images/speedregalo_logo.png" },
    { name: "DMCI", src: "/images/dmci_logo.png" }
  ];

  return (
    <section className="py-12 lg:py-20 xl:py-28 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 max-w-[var(--container-max)] text-center">
        <h2 className="text-[0.625rem] font-black text-gray-400 uppercase tracking-[0.25em] mb-8">Trusted By Growing Companies</h2>
        <div className="flex flex-nowrap justify-start md:justify-center items-center gap-8 md:gap-16 lg:gap-20 overflow-x-auto pb-4 md:pb-0 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden w-full px-2 md:px-0">
          {logos.map((logo) => (
            <img
              key={logo.name}
              src={logo.src}
              alt={logo.name}
              className="h-8 sm:h-10 md:h-16 lg:h-20 grayscale hover:grayscale-0 transition-all duration-300 object-contain shrink-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
