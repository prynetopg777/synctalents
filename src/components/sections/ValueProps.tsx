import Image from 'next/image';

export default function ValueProps() {
  const features = [
    "Cost-Effective Solutions",
    "Rapid Team Deployment",
    "Pre-Vetted Top Talent",
    "Scalable Support Teams"
  ];

  const stats = [
    { label: "Business Partners", value: "200+" },
    { label: "Successful Placements", value: "30K+" },
    { label: "Years of Excellence", value: "10+" }
  ];

  return (
    <section id="why" className="py-16 lg:py-32 xl:py-40 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1600px]">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          
          {/* Left Column: Image and Performance Card */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-[1.5rem] lg:rounded-[2.5rem] overflow-hidden shadow-2xl">
              <Image 
                src="/images/value-props.png" 
                alt="Professional working" 
                width={800} 
                height={800} 
                className="w-full h-full object-cover aspect-[4/3] lg:aspect-square"
              />
              
              {/* Performance Card Overlay */}
              <div className="absolute top-3 left-3 right-3 md:top-8 md:left-8 md:right-auto md:w-80 bg-white/95 backdrop-blur-md p-4 lg:p-6 rounded-xl lg:rounded-2xl shadow-xl border border-white/20 animate-in fade-in slide-in-from-left-4 duration-1000" style={{ WebkitBackdropFilter: 'blur(12px)' }}>
                <h4 className="text-[11px] lg:text-sm font-bold text-gray-900 mb-3 lg:mb-4">Talent Quality Overview</h4>
                <div className="space-y-2 lg:space-y-4">
                  {[
                    { name: "Skill Match", value: 98, color: "bg-emerald-500" },
                    { name: "Retention Rate", value: 95, color: "bg-blue-500" },
                    { name: "Efficiency Gain", value: 70, color: "bg-indigo-500" }
                  ].map((metric) => (
                    <div key={metric.name}>
                      <div className="flex justify-between text-[8px] lg:text-[10px] font-bold mb-1 uppercase tracking-wider text-gray-500">
                        <span>{metric.name}</span>
                        <span>{metric.value}%</span>
                      </div>
                      <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${metric.color} rounded-full transition-all duration-1000`} 
                          style={{ width: `${metric.value}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Decorative background element */}
            <div className="absolute -z-10 -bottom-4 -right-4 w-40 h-40 lg:w-64 lg:h-64 bg-blue-50 rounded-full blur-3xl opacity-60"></div>
          </div>

          {/* Right Column: Content */}
          <div className="w-full lg:w-1/2 text-left">
            <h2 className="text-3xl lg:text-5xl font-black text-gray-900 mb-5 lg:mb-6 leading-tight tracking-tight">
              Tailored Talent Solutions <br />
              <span>with</span> <span className="text-blue-600">SyncTalents</span>
            </h2>
            
            <p className="text-base lg:text-lg text-gray-600 mb-8 lg:mb-10 leading-relaxed font-medium">
              At SyncTalents, we deliver high-impact professionals aligned perfectly with your goals. Our vetting process ensures you get the right talent.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4 mb-10 lg:mb-12">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                    <svg className="w-3 h-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-gray-800 font-bold text-sm lg:text-base">{feature}</span>
                </div>
              ))}
            </div>

            <hr className="border-gray-100 mb-10 lg:mb-12" />

            {/* Stats Row - Optimized for Mobile Wrapping */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="flex sm:block items-center gap-4">
                  <div className="text-3xl lg:text-4xl font-black text-gray-900 mb-0 lg:mb-1 min-w-[80px] sm:min-w-0">{stat.value}</div>
                  <div className="text-[11px] lg:text-xs font-bold text-gray-500 uppercase tracking-widest leading-tight">
                    <span className="hidden sm:block">
                      {stat.label.split(' ').map((word, i) => (
                        <span key={i} className="block">{word}</span>
                      ))}
                    </span>
                    <span className="sm:hidden block">{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}



