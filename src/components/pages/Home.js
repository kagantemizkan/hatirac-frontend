import React from 'react'
import Header from '../HomeComponents/Header'
import Marquee from '../HomeComponents/Marquee'
import Banner from '../HomeComponents/Banner'
import Footer from '../HomeComponents/Footer'
import { Helmet } from 'react-helmet';
import Logo from '../../images/logo.png'
import Slider from '../HomeComponents/Slider'
import FizikselUrunler from '../HomeComponents/FizikselUrunler'

const Home = () => {
  return (
    <>
      <Helmet>
        <link rel="icon" href={Logo} />
      </Helmet>
      <Header />
      <Marquee />
      <Slider />
      <FizikselUrunler />
      <Banner />
      <Footer />
    </>
  )
}

export default Home