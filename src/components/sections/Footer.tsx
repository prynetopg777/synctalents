import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#061b36] text-white pt-20 pb-10 border-t border-blue-900/30">
      <div className="container mx-auto px-4 max-w-[var(--container-max)]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div>
            <img
              alt="SyncTalents Logo"
              className="h-10 mb-8 brightness-0 invert"
              src="/images/synctalents_logo.png"
            />
            <p className="text-gray-400 text-sm mb-8 leading-relaxed">
              We connect businesses with top Filipino talent through reliable, cost-effective, and scalable staffing solutions.
            </p>
            <div className="flex gap-4">
              {["FB", "LI", "IG"].map((social) => (
                <Link
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center hover:bg-accent hover:-translate-y-1 transition-all duration-300 shadow-lg"
                >
                  <span className="text-xs font-bold">{social}</span>
                </Link>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h5 className="font-bold text-lg mb-8">Quick Links</h5>
            <ul className="space-y-4 text-gray-400 text-sm">
              {[
                { name: "Why SyncTalents", href: "#why" },
                { name: "Roles We Fill", href: "#roles" },
                { name: "How It Works", href: "#how-it-works" },
                { name: "FAQs", href: "#faq" },
                { name: "Contact Us", href: "#lead-form" }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-accent transition duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Industries We Serve */}
          <div>
            <h5 className="font-bold text-lg mb-8">Industries</h5>
            <ul className="space-y-4 text-gray-400 text-sm">
              {[
                "E-commerce", 
                "BPO & Call Centers", 
                "Healthcare", 
                "Logistics", 
                "Financial Services"
              ].map((industry) => (
                <li key={industry}>
                  <Link href="#roles" className="hover:text-accent transition duration-200">
                    {industry}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Us */}
          <div>
            <h5 className="font-bold text-lg mb-8">Contact Us</h5>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <span className="w-10 h-10 rounded-full bg-blue-900/30 border border-blue-800/50 flex items-center justify-center text-accent shrink-0 shadow-inner group-hover:bg-blue-800/50 transition-colors duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </span>
                <div className="text-sm text-gray-400">
                  <span className="block text-white font-semibold">WhatsApp / Telegram</span>
                  +63 998 967 0221
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <span className="w-10 h-10 rounded-full bg-blue-900/30 border border-blue-800/50 flex items-center justify-center text-accent shrink-0 shadow-inner group-hover:bg-blue-800/50 transition-colors duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </span>
                <div className="text-sm text-gray-400">
                  <span className="block text-white font-semibold">Messenger</span>
                  ST Facebook Page
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <span className="w-10 h-10 rounded-full bg-blue-900/30 border border-blue-800/50 flex items-center justify-center text-accent shrink-0 shadow-inner group-hover:bg-blue-800/50 transition-colors duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </span>
                <div className="text-sm text-gray-400">
                  <span className="block text-white font-semibold">Email</span>
                  jonathan@synctalents.com<br />
                  melody@synctalents.com
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <span className="w-10 h-10 rounded-full bg-blue-900/30 border border-blue-800/50 flex items-center justify-center text-accent shrink-0 shadow-inner group-hover:bg-blue-800/50 transition-colors duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </span>
                <div className="text-sm text-gray-400">
                  <span className="block text-white font-semibold">Address</span>
                  Manila, Philippines
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright Area */}
        <div className="pt-8 border-t border-blue-900/30 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2024 SyncTalents. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-accent transition duration-200">Privacy Policy</Link>
            <span className="text-gray-700">|</span>
            <Link href="#" className="hover:text-accent transition duration-200">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
