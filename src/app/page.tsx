'use client'

import Layout from '@/components/Layout'
import HeroSection from '@/components/HeroSection'
import DiscoverMipim from '@/components/DiscoverMipim'
import Speakers from '@/components/Speakers'
import RegistrationForm from '@/components/RegistrationForm'
import Testimonial from '@/components/Testimonial'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <DiscoverMipim />
      <Speakers />
      <RegistrationForm />
      <Testimonial />
      <Footer />
    </Layout>
  )
}
