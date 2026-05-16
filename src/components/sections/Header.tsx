"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronRight } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Why SyncTalents", href: "#why" },
    { name: "Roles We Fill", href: "#roles" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "About Us", href: "#about" },
    { name: "Resources", href: "#resources" },
  ];

  return (
    <>
      <header className={cn(
        "fixed top-0 left-0 right-0 z-[60] transition-all duration-500 border-b",
        scrolled 
          ? "bg-primary/95 backdrop-blur-md py-1 border-blue-800 shadow-lg" 
          : "bg-white py-3 border-gray-100 shadow-sm"
      )}>
        <div className="container mx-auto px-4 relative flex items-center justify-between max-w-[var(--container-max)] h-full">
          {/* Logo Container - Flex 1 to ensure balancing */}
          <div className="flex-1 flex items-center justify-start h-full shrink-0">
            <Link 
              href="/" 
              onClick={scrollToTop} 
              className="flex items-center group h-full relative"
            >
              <div
                className={cn(
                  "h-12 md:h-16 lg:h-20 w-40 md:w-48 lg:w-56 transition-colors duration-500 relative z-10",
                  scrolled ? "bg-white" : "bg-[#0d3a71]"
                )}
                style={{
                  WebkitMaskImage: "url('/images/synctalents_logo.png')",
                  WebkitMaskSize: "contain",
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskPosition: "left center",
                  maskImage: "url('/images/synctalents_logo.png')",
                  maskSize: "contain",
                  maskRepeat: "no-repeat",
                  maskPosition: "left center"
                }}
              />
            </Link>
          </div>
          
          {/* Desktop Navigation Links - Perfectly Centered */}
          <nav className={cn(
            "hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center space-x-8 text-[0.8125rem] font-bold transition-colors duration-500",
            scrolled ? "text-white/90" : "text-gray-600"
          )}>
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className={cn("transition-colors duration-200 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all hover:after:w-full", scrolled ? "hover:text-white" : "hover:text-primary")}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          {/* Actions - Flex 1 to ensure balancing */}
          <div className="flex-1 flex items-center justify-end gap-3 md:gap-4 h-full shrink-0">
            <Link
              href="#lead-form"
              className={cn(
                buttonVariants({ variant: "default" }),
                "flex text-white shadow-md hover:-translate-y-0.5 transition-all duration-300 font-black uppercase tracking-widest",
                "text-[0.65rem] px-4 py-4 md:text-[0.7rem] md:px-6 md:py-5",
                "bg-accent hover:bg-green-600 active:bg-green-700 hover:shadow-green-500/30"
              )}
            >
              Book a Call
            </Link>

            {/* Mobile Menu Toggle (to the right of CTA) */}
            <button 
              className={cn(
                "lg:hidden p-2 rounded-lg transition-colors",
                scrolled ? "text-white hover:bg-white/10" : "text-gray-900 hover:bg-gray-100"
              )}
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="w-7 h-7" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={cn(
        "fixed inset-0 z-[70] bg-[#061b36] transition-all duration-500 ease-in-out md:hidden",
        mobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      )}>
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/5">
            <div
              className="h-14 w-40 bg-white"
              style={{
                WebkitMaskImage: "url('/images/synctalents_logo.png')",
                WebkitMaskSize: "contain",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskPosition: "left center",
                maskImage: "url('/images/synctalents_logo.png')",
                maskSize: "contain",
                maskRepeat: "no-repeat",
                maskPosition: "left center"
              }}
            />
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
          </div>

          {/* Mobile Menu Links */}
          <div className="flex-grow p-8 space-y-8 overflow-y-auto">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href}
                className="flex items-center justify-between text-2xl font-black text-white group tracking-tight"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
                <ChevronRight className="w-6 h-6 text-accent transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Footer Actions */}
          <div className="p-8 space-y-4 border-t border-white/5 bg-black/20">
            <Link
              href="#lead-form"
              className="flex items-center justify-center w-full py-5 bg-accent text-white font-black uppercase tracking-widest rounded-2xl shadow-xl shadow-accent/10 hover:bg-green-600 active:bg-green-700 hover:shadow-green-500/30 transition-all text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
