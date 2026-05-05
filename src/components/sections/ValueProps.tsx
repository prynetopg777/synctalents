export default function ValueProps() {
  const props = [
    {
      title: "Cost Efficiency",
      description: "Save up to 70% on operating costs without compromising quality.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
        </svg>
      )
    },
    {
      title: "Fast Deployment",
      description: "Get pre-vetted candidates deployed in as fast as 7-14 days.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
        </svg>
      )
    },
    {
      title: "High-Quality Talent",
      description: "Skilled, English-proficient professionals ready to integrate with your team.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
        </svg>
      )
    }
  ];

  return (
    <section id="why" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-16">Why Companies Choose SyncTalents</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {props.map((prop, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mb-6 text-primary shadow-sm hover:scale-110 transition duration-300">
                {prop.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{prop.title}</h3>
              <p className="text-gray-600 leading-relaxed max-w-xs">{prop.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
