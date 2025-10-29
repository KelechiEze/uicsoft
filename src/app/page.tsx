"use client"; // <-- Add this if components use state or effects

import React from 'react'
import Service from './components/Service'
import Header from './components/Header'
import Home from './components/Home'
import Divider from './components/Divider'
import About from './components/About'
import Team from './components/Team'
import Newsletter from './components/Newsletter'
import Pricing from './components/Pricing'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Googlemaps from './components/Googlemaps'
import Footer from './components/Footer'
import Testimonial from './components/testimonials'
import Clients from './components/Clients'
import Frequently from './components/Frequently'

export default function Page() {
  return (
    <div>
      <Header />
      <Service />
      <Newsletter />
      <Divider />
      <About />
      <Portfolio />
      <Testimonial />
      <Team />
      <Clients />
      <Pricing />
     {/*Frequently />*/}
      {/* <Contact /> */}
      {/* <Googlemaps /> */}
      <Footer />
    </div>
  );
}
