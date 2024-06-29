import Hero from '@/components/website/home/Hero'
import HeroSection from '@/components/website/home/HeroSection'
import Section1 from '@/components/website/home/Section1'
import Section2 from '@/components/website/home/Section2'
import Section3About from '@/components/website/about/Section3'
import Section3 from '@/components/website/home/Section3'
import Section4 from '@/components/website/home/Section4'
import Section5 from '@/components/website/home/Section5'
import Cards from '@/components/website/home/Cards'
import ImageSection from '@/components/website/home/Image'
import React from 'react'

function HomePage() {
  return (
    <main>
      <HeroSection />
      <Section3About />
      <Section1 />
      <Section2 />
      <Cards />
      <Section3 />
      <Section5 />
    </main>
  )
}

export default HomePage