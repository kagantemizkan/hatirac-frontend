import React from 'react'
import Header from '../HomeComponents/Header'
import Marquee from '../HomeComponents/Marquee'
import Banner from '../HomeComponents/Banner'
import Footer from '../HomeComponents/Footer'
import { Helmet } from 'react-helmet';
import Logo from '../../images/logo.png'

const Home = () => {
  return (
    <>
      <Helmet>
        <link rel="icon" href={Logo} />
      </Helmet>
      <Header />
      <Marquee />
      <Banner />
      <Footer />
    </>
  )
}

export default Home