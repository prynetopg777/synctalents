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
    <section className="hero-bg relative py-12 md:py-24">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl">
        {/* Hero Content Left */}
        <div className="animate-in fade-in slide-in-from-left duration-1000">
          <div className="inline-block bg-blue-50 text-primary font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full mb-6 flex items-center gap-2 w-fit">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1a1 1 0 112 0v1a1 1 0 11-2 0zM13.536 14.95a1 1 0 011.414 0l.707.707a1 1 0 11-1.414 1.414l-.707-.707a1 1 0 010-1.414zM6.464 14.95a1 1 0 010 1.414l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 0z"></path>
            </svg>
            Staffing & Outsourcing Solutions
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-primary mb-6 leading-tight">
            Hire Pre-Vetted<br />Filipino Staff<br />in 7 Days
          </h1>
          <p className="text-lg text-gray-700 mb-8 max-w-lg">
            Reduce hiring costs by up to 70% while scaling your team with skilled, reliable professionals.
          </p>
          <ul className="space-y-4 mb-8">
            {[
              "Pre-screened & qualified candidates",
              "Fast deployment (7-14 days)",
              "Flexible roles for your business needs"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="bg-primary text-white rounded-full p-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
                  </svg>
                </span>
                <span className="font-semibold text-gray-800">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-gray-500 italic">
            Trusted by growing companies in the Philippines and around the world.
          </p>
        </div>

        {/* Hero Lead Form Right */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md mx-auto w-full border border-gray-100 animate-in fade-in slide-in-from-right duration-1000">
          <h3 className="text-2xl font-bold text-center mb-1">Get Qualified Candidates</h3>
          <p className="text-center text-xs text-gray-500 mb-6">Tell us what you need and we'll take care of the rest.</p>
          <form className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">Full Name<span className="text-red-500">*</span></label>
              <Input placeholder="Enter your full name" className="text-sm" />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">Company Name<span className="text-red-500">*</span></label>
              <Input placeholder="Enter your company name" className="text-sm" />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">Work Email<span className="text-red-500">*</span></label>
              <Input placeholder="Enter your work email" type="email" className="text-sm" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">Role Needed<span className="text-red-500">*</span></label>
                <Select>
                  <SelectTrigger className="text-sm">
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="va">Virtual Assistant</SelectItem>
                    <SelectItem value="support">Customer Support</SelectItem>
                    <SelectItem value="data">Data Entry</SelectItem>
                    <SelectItem value="ops">Operations</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">Team Size<span className="text-red-500">*</span></label>
                <Select>
                  <SelectTrigger className="text-sm">
                    <SelectValue placeholder="Select size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-5">1-5</SelectItem>
                    <SelectItem value="6-20">6-20</SelectItem>
                    <SelectItem value="21+">21+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button className="w-full bg-accent hover:bg-orange-600 text-white font-bold py-6 rounded-md transition duration-200 uppercase text-sm tracking-wide shadow-lg shadow-orange-500/30">
              Get Qualified Candidates
            </Button>
          </form>
          
          <div className="mt-6">
            <div className="relative flex py-2 items-center">
              <div className="flex-grow border-t border-gray-200"></div>
              <span className="flex-shrink mx-4 text-gray-400 text-xs uppercase">or</span>
              <div className="flex-grow border-t border-gray-200"></div>
            </div>
            <div className="flex gap-4 mt-4">
              <Button variant="outline" className="flex-1 border-green-500 text-green-600 hover:bg-green-50 text-xs font-bold gap-2">
                <img alt="WhatsApp" className="w-4 h-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYbZkttnoKxIsYwJQ-t58HFPkvcDy5YOFDXZqlJKALDzMwh7_H4gaGbcnjHS8DK0l9RkyuxehpLbYnxX_ju4MKxPWR7Ojpw9q8v3rMAMX8F-fQ0F_Z2K_xcR9uFLwJhvajxkg1LZKtckuN-TDNg_3lvZ4xXQI-NL5SM7ahS-8-4Tlm9kYAMrVCHMy_gHsaFNWMc8WVjmFU24Fwpn8aoU8clm37ygFOZfYY9Xsm8r1MoF_eb7K6yIVs8cHawAXxI9NynhL6MuSIH9I" />
                WhatsApp
              </Button>
              <Button variant="outline" className="flex-1 border-blue-500 text-blue-600 hover:bg-blue-50 text-xs font-bold gap-2">
                <img alt="Messenger" className="w-4 h-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAM2G_5666pPwqru43-sWlmcja66SeuXNFqpi95cZnr-x1MoeU8O6K1HeyhR8JDr9Wlsj5U80QkWXynt2jm___fVjuqzDVMbfVM3D7GnEUEnsQTznRnub1R3fUEtYtOGvTtN_uLCUL0Nc_ejsUFv8j8WLKMQEGxcmgersuveoXl9MLSmxel6A8Ntvs_H3kqcuR7QA0AJXA5WrgMWZfQzxLLtYi5Ddx9QObk_OY-mr6Wkpow-cjHS0XmXszciaCF4CkkMCtc9OYQyyw" />
                Message Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
