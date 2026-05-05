import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between max-w-7xl">
        {/* Logo Container */}
        <Link href="/" className="flex items-center">
          <img
            alt="SyncTalents Logo"
            className="h-10"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDj4tSLkwNRoazVtI50EQh4MVaEI4d3RoLRmxnj5UUi7-7-qVNidmGvCZua_VNzsDUNA-zwwAMoImm5PYuNS9QB9bvRrCHeH57lCCdtCYBfyBWJoL1NPM4sQhCDU9mo4KxkSZy66AFpBcP12yuJhKp32PKsuMSdLdrhchTHuFh_0H7jeW4r4M_-cPHD4NecKbOmYnasshz4Vt41F4EuxWKqvX6-Pmq9CWbMekFbHZJwE5SjgsYXbRo-sM6Hdq1zK_2AfFAqnw38u-w"
          />
        </Link>
        
        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
          <Link href="#why" className="hover:text-primary transition">Why SyncTalents</Link>
          <Link href="#roles" className="hover:text-primary transition">Roles We Fill</Link>
          <Link href="#how-it-works" className="hover:text-primary transition">How It Works</Link>
          <Link href="#about" className="hover:text-primary transition">About Us</Link>
          <Link href="#resources" className="hover:text-primary transition">Resources</Link>
        </nav>
        
        {/* CTA Button */}
        <div>
          <Link
            href="#book"
            className={cn(
              buttonVariants({ variant: "default" }),
              "bg-primary hover:bg-blue-900 shadow-lg shadow-blue-900/20 font-semibold"
            )}
          >
            Book a Call
          </Link>
        </div>
      </div>
    </header>
  );
}
