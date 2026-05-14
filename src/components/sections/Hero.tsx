import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Hero() {
  return (
    <section id="hero" className="relative bg-white overflow-hidden lg:min-h-[85vh] flex items-center pt-[var(--header-height)]">
      {/* Right-side image - positioned absolutely to fill right half */}
      <div className="hidden lg:block absolute top-0 right-0 w-[58%] h-full z-0">
        <img
          src="/images/final_team_hero.png"
          alt="SyncTalents Team"
          className="h-full w-full object-cover object-[25%_25%]"
        />
        {/* Narrower left-edge fade to reveal more faces */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/30 to-transparent w-[30%]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-[var(--container-max)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start py-8 lg:py-20 xl:py-24">

          {/* Left Content - col 1-5 */}
          <div className="lg:col-span-5 py-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-[0.625rem] font-bold uppercase tracking-widest mb-6 border border-blue-100">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              Staffing & Outsourcing Solutions
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[clamp(3rem,5vw,4.5rem)] font-extrabold text-[#0d3a71] mb-6 leading-[1.05] tracking-tight">
              Hire Pre-Vetted<br />
              Filipino Staff<br />
              <span className="text-blue-600">in 7 Days</span>
            </h1>

            <p className="text-lg lg:text-xl text-gray-500 mb-8 max-w-lg leading-relaxed font-medium">
              Reduce hiring costs by up to 70% while scaling your team with skilled, reliable professionals.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "Pre-screened & qualified candidates",
                "Fast deployment (7-14 days)",
                "Flexible roles for your business needs"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
                    </svg>
                  </div>
                  <span className="text-base font-semibold text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-sm text-gray-400 font-medium">
              Trusted by growing companies in the Philippines<br />and around the world.
            </p>
          </div>

          {/* Mobile image - only shows on small screens */}
          <div className="lg:hidden w-full rounded-2xl overflow-hidden mb-6">
            <img
              src="/images/final_team_hero.png"
              alt="SyncTalents Team"
              className="w-full h-56 sm:h-64 object-cover object-[25%_25%]"
            />
          </div>

          {/* Right Form - pushed to far right, overlapping the image area */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end lg:pr-12">
            <div className="bg-white rounded-2xl p-6 md:p-7 shadow-[0_8px_40px_rgba(0,0,0,0.08)] border border-gray-100 w-full sm:max-w-[25rem] lg:max-w-[23.125rem] relative z-20">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1 tracking-tight">Get Qualified Candidates</h3>
                <p className="text-[0.6875rem] text-gray-400">Tell us what you need and we&apos;ll take care of the rest.</p>
              </div>

              <form className="space-y-4">
                <div className="space-y-1">
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider">Full Name<span className="text-red-500 ml-0.5">*</span></label>
                  <Input placeholder="Enter your full name" className="bg-gray-50/50 border-gray-200 focus:bg-white h-10 rounded-lg text-sm" />
                </div>

                <div className="space-y-1">
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider">Company Name<span className="text-red-500 ml-0.5">*</span></label>
                  <Input placeholder="Enter your company name" className="bg-gray-50/50 border-gray-200 focus:bg-white h-10 rounded-lg text-sm" />
                </div>

                <div className="space-y-1">
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider">Email<span className="text-red-500 ml-0.5">*</span></label>
                  <Input placeholder="Enter your email" type="email" className="bg-gray-50/50 border-gray-200 focus:bg-white h-10 rounded-lg text-sm" />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider">Role Needed<span className="text-red-500 ml-0.5">*</span></label>
                    <Select>
                      <SelectTrigger className="bg-gray-50/50 border-gray-200 focus:bg-white h-10 rounded-lg text-xs">
                        <SelectValue placeholder="Select role" />
                      </SelectTrigger>
                      <SelectContent className="min-w-[17.5rem]">
                        <SelectItem value="support">🧑‍💼 Customer Support & CX</SelectItem>
                        <SelectItem value="va">🖥️ Virtual Assistants (VA)</SelectItem>
                        <SelectItem value="admin">📊 Back Office & Admin</SelectItem>
                        <SelectItem value="sales">📣 Sales & Lead Generation</SelectItem>
                        <SelectItem value="ecommerce">🛒 E-commerce & Marketplace Support</SelectItem>
                        <SelectItem value="finance">📈 Finance & Accounting Support</SelectItem>
                        <SelectItem value="logistics">📦 Logistics & Operations</SelectItem>
                        <SelectItem value="healthcare">🏥 Healthcare</SelectItem>
                        <SelectItem value="specialized">🧠 Specialized</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider">Estimated Team Size<span className="text-red-500 ml-0.5">*</span></label>
                    <Select>
                      <SelectTrigger className="bg-gray-50/50 border-gray-200 focus:bg-white h-10 rounded-lg text-xs">
                        <SelectValue placeholder="Select team size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-5">1-5</SelectItem>
                        <SelectItem value="6-20">6-20</SelectItem>
                        <SelectItem value="21+">21+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button className="w-full bg-accent hover:bg-orange-600 text-white font-bold py-6 rounded-lg shadow-md transition-all uppercase text-xs tracking-widest mt-1">
                  Get Qualified Candidates
                </Button>
              </form>

              <div className="mt-6">
                <div className="relative flex py-1 items-center">
                  <div className="flex-grow border-t border-gray-100"></div>
                  <span className="flex-shrink mx-3 text-gray-400 text-[0.5625rem] font-bold uppercase tracking-widest">or</span>
                  <div className="flex-grow border-t border-gray-100"></div>
                </div>

                <div className="flex gap-3 mt-4">
                  <Button variant="outline" className="flex-1 h-10 border-green-200 text-green-700 hover:bg-green-50 text-[0.625rem] font-bold gap-2 rounded-lg transition-all">
                    <img alt="WhatsApp" className="w-4 h-4" src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" />
                    Chat on WhatsApp
                  </Button>
                  <Button variant="outline" className="flex-1 h-10 border-blue-200 text-blue-700 hover:bg-blue-50 text-[0.625rem] font-bold gap-2 rounded-lg transition-all">
                    <img alt="Messenger" className="w-4 h-4" src="https://upload.wikimedia.org/wikipedia/commons/b/be/Facebook_Messenger_logo_2020.svg" />
                    Message Us
                  </Button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
