"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 transition-all duration-500 border-b",
      scrolled 
        ? "bg-primary/95 backdrop-blur-md py-1.5 border-blue-800 shadow-lg" 
        : "bg-white py-3 border-gray-100 shadow-sm"
    )}>
      <div className="container mx-auto px-4 flex items-center justify-between max-w-[var(--container-max)]">
        {/* Logo Container */}
        <Link href="/" className="flex items-center group">
          <img
            alt="SyncTalents Logo"
            className={cn(
              "h-10 transition-all duration-500 brightness-0",
              scrolled ? "invert" : ""
            )}
            src="/images/synctalents_logo.png"
          />
        </Link>
        
        {/* Navigation Links */}
        <nav className={cn(
          "hidden md:flex space-x-6 text-[0.8125rem] font-medium transition-colors duration-500",
          scrolled ? "text-white/80" : "text-gray-600"
        )}>
          <Link href="#why" className={cn("transition-colors duration-200", scrolled ? "hover:text-white" : "hover:text-primary")}>Why SyncTalents</Link>
          <Link href="#roles" className={cn("transition-colors duration-200", scrolled ? "hover:text-white" : "hover:text-primary")}>Roles We Fill</Link>
          <Link href="#how-it-works" className={cn("transition-colors duration-200", scrolled ? "hover:text-white" : "hover:text-primary")}>How It Works</Link>
          <Link href="#about" className={cn("transition-colors duration-200", scrolled ? "hover:text-white" : "hover:text-primary")}>About Us</Link>
          <Link href="#resources" className={cn("transition-colors duration-200", scrolled ? "hover:text-white" : "hover:text-primary")}>Resources</Link>
        </nav>
        
        {/* CTA Button */}
        <div>
          <Link
            href="#book"
            className={cn(
              buttonVariants({ variant: "default" }),
              "text-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 font-semibold",
              scrolled 
                ? "bg-accent hover:bg-orange-600 px-8 py-6 text-base scale-105" 
                : "bg-accent hover:bg-orange-600 px-6 text-sm"
            )}
          >
            Book a Call
          </Link>
        </div>
      </div>
    </header>
  );
}
