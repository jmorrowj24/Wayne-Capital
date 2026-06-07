import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import WhatWeDo from "@/components/WhatWeDo";
import Criteria from "@/components/Criteria";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="relative z-10">
        <Hero />
        <Philosophy />
        <WhatWeDo />
        <Criteria />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
