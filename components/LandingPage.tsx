'use client';
import { useScrollReveal } from '@/lib/hooks/useScrollReveal';
import { Header } from '@/components/sections/Header';
import { Hero } from '@/components/sections/Hero';
import { Features } from '@/components/sections/Features';
import { Benefits } from '@/components/sections/Benefits';
import { Clients } from '@/components/sections/Clients';
import { About } from '@/components/sections/About';
import { Characteristics } from '@/components/sections/Characteristics';
import { Gallery } from '@/components/sections/Gallery';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';

export function LandingPage() {
  useScrollReveal();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Benefits />
        <Clients />
        <About />
        <Characteristics />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
