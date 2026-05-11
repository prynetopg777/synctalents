export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Tell Us Your Needs",
      desc: "Share your requirements and we'll understand your goals.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        </svg>
      )
    },
    {
      number: 2,
      title: "We Source & Vet",
      desc: "We find, screen, and assess the best candidates for your team.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        </svg>
      )
    },
    {
      number: 3,
      title: "Start Hiring",
      desc: "Interview and onboard your new team members in days, not months.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
        </svg>
      )
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gray-50/50 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#0d3a71] mb-16 tracking-tight">How It Works</h2>
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <div key={i} className="relative flex flex-col items-center text-center z-10 group">
              {i < steps.length - 1 && (
                <div className="step-line hidden md:block absolute w-full left-1/2 top-6 h-0.5 -z-10"></div>
              )}
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-lg mb-8 relative z-20 shadow-md">
                {step.number}
              </div>
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>
              <h4 className="font-black text-lg mb-3 text-gray-900 tracking-tight">{step.title}</h4>
              <p className="text-gray-500 leading-relaxed max-w-xs text-sm font-medium">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
