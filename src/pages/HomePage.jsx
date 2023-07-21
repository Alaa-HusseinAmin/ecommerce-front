import React from 'react'
import MainSlider from '../components/MainSlider/MainSlider.jsx'
import CategorySlider from '../components/CategorySlider/CategorySlider.jsx'
import Products from '../components/Products/Products.jsx'

export default function HomePage() {
  return (
    <>
        <MainSlider/>
        <CategorySlider/>
        <Products/>
    </>
  )
}
