import React from 'react'
import Header from '../HomeComponents/Header'
import FizikselUrunler from '../HomeComponents/FizikselUrunler';

const Products = () => {
  return (
    <>
      <Header />
      <h2 className='font-weight-bold text-center mt-5'>Ürünlerimiz</h2>
      <FizikselUrunler />
    </>
  )
}

export default Products
