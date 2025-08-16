'use client';

import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import DiscoverMipim from '@/components/DiscoverMipim';
import Speakers from '@/components/Speakers';
import RegistrationForm from '@/components/RegistrationForm';
import Testimonial from '@/components/Testimonial';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <DiscoverMipim />
      <Speakers />
      <RegistrationForm />
      <Testimonial />
      <Footer />
    </main>
  );
}
