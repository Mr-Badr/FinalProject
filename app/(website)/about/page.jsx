import Hero from '@/components/website/about/Hero'
import Section1 from '@/components/website/about/Section1'
import Section2 from '@/components/website/about/Section2'
import Section3 from '@/components/website/about/Section3'
import Section5 from '@/components/website/home/Section5'
import Footer from '@/components/website/shared/Footer'
import Header from '@/components/website/shared/Header'
import React from 'react'

function About() {
  return (
    <>
      <Hero />
      <Section1 />
      <Section2 />
      {/* <Section3 /> */}
      <Section5 />
    </>
  )
}

export default About