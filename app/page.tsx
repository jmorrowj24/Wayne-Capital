import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import WhatWeDo from "@/components/WhatWeDo";
import Band from "@/components/Band";
import Join from "@/components/Join";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Philosophy />
        <WhatWeDo />
        <Band />
        <Join />
      </main>
      <Footer />
    </>
  );
}
