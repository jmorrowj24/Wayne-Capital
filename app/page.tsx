import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import Philosophy from "@/components/Philosophy";
import CurrentFocus from "@/components/CurrentFocus";
import Criteria from "@/components/Criteria";
import WhyPartner from "@/components/WhyPartner";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="relative z-10">
        <Hero />
        <WhatWeDo />
        <Philosophy />
        <CurrentFocus />
        <Criteria />
        <WhyPartner />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
