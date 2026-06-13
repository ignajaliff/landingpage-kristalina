'use client';
import { useScrollReveal } from '@/lib/hooks/useScrollReveal';
import { Header } from '@/components/sections/Header';
import { Hero } from '@/components/sections/Hero';
import { Features } from '@/components/sections/Features';
import { About } from '@/components/sections/About';
import { Gallery } from '@/components/sections/Gallery';
import { Testimonials } from '@/components/sections/Testimonials';
import { CTA } from '@/components/sections/CTA';
import { Footer } from '@/components/sections/Footer';

export function LandingPage() {
  useScrollReveal();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <About />
        <Gallery />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
