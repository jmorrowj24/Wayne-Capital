import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Stats from "@/components/Stats";
import Philosophy from "@/components/Philosophy";
import WhatWeDo from "@/components/WhatWeDo";
import Portfolio from "@/components/Portfolio";
import Operators from "@/components/Operators";
import CurrentFocus from "@/components/CurrentFocus";
import Approach from "@/components/Approach";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="relative z-10">
        <Hero />
        <Marquee />
        <Stats />
        <Philosophy />
        <WhatWeDo />
        <Portfolio />
        <Operators />
        <CurrentFocus />
        <Approach />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
