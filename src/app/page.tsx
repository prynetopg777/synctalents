import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import ValueProps from "@/components/sections/ValueProps";
import Roles from "@/components/sections/Roles";
import HowItWorks from "@/components/sections/HowItWorks";
import CTABanner from "@/components/sections/CTABanner";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";
import AutoScroll from "@/components/ui/AutoScroll";

export default function Home() {
  return (
    <>
      <AutoScroll />
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <ValueProps />
        <Roles />
        <HowItWorks />
        <CTABanner />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
