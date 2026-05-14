import Link from 'next/link';

export default function HowItWorks() {
  const steps = [
    {
      title: "Tell Us Your Needs",
      desc: "Share your requirements and we'll understand your goals.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    {
      title: "We Source & Vet",
      desc: "We find, screen, and assess the best candidates for your team.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857" />
        </svg>
      )
    },
    {
      title: "Start Hiring",
      desc: "Interview and onboard your new team members in days.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section id="how-it-works" className="py-[var(--section-py)] bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-[var(--container-max)]">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-[var(--section-gap)]">
          
          {/* Left Column */}
          <div className="w-full lg:w-1/2">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-[0.625rem] lg:text-xs font-bold uppercase tracking-widest mb-6">
              Our Process
            </span>
            <h2 className="text-3xl lg:text-[clamp(2.5rem,5vw,3.5rem)] font-black text-gray-900 mb-6 lg:mb-8 leading-tight tracking-tight">
              Comprehensive care <br className="hidden lg:block" />
              for every stage of <br className="hidden lg:block" />
              <span className="text-blue-600">your business</span>
            </h2>
            <p className="text-base lg:text-lg text-gray-500 mb-8 lg:mb-12 leading-relaxed font-medium max-w-xl">
              At SyncTalents, we prioritize your growth with tailored services. From sourcing top-tier talent to seamless onboarding, we support you.
            </p>
            
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 lg:border-4 border-white bg-gray-200 overflow-hidden shadow-sm">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Client" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="text-[0.75rem] lg:text-sm font-bold text-gray-900">
                <span className="text-blue-600">17k+</span> satisfied partners
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-1/2 space-y-4 lg:space-y-6">
            {steps.map((step, i) => (
              <div 
                key={i} 
                className="relative p-6 lg:p-8 rounded-[1.5rem] lg:rounded-[2rem] bg-[#f8fafc] border border-gray-100 hover:border-blue-100 transition-all duration-300 group"
              >
                {/* Step Number Badge */}
                <div className="absolute top-6 right-6 text-4xl lg:text-6xl font-black text-gray-200/50 group-hover:text-blue-100/50 transition-colors pointer-events-none">
                  0{i + 1}
                </div>
                
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center mb-4 lg:mb-6 shadow-lg shadow-blue-200">
                  {step.icon}
                </div>
                <h4 className="text-lg lg:text-xl font-black text-gray-900 mb-2 lg:mb-3 tracking-tight group-hover:text-blue-600 transition-colors relative z-10">
                  {step.title}
                </h4>
                <p className="text-xs lg:text-sm text-gray-500 font-medium leading-relaxed mb-4 lg:mb-6 max-w-[85%] lg:max-w-none relative z-10">
                  {step.desc}
                </p>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}



