import axios from "axios"
import React, { useEffect, useState } from 'react'
import Slider from "react-slick"
import { baseUrl } from "../../utils/baseUrl.js"
export default function CategorySlider() {
  const [Categories,setCategories]=useState([])
  const getAllCategories=async()=>{
    let {data}=await axios.get(`${baseUrl}/categories`)
  setCategories(data.data)
  }
  useEffect(()=>{
  getAllCategories()
  },[])


  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows:false,
    autoplay:true
  };
  return (
    <>
  <div className='my-5 container'>
  <h3>Shop popular Categories</h3>
      <Slider {...settings} autoplaySpeed={3000}>
    {Categories.map((item)=>{
    return <div key={item._id}>
      <img src={item.image} className="w-100" height={200} alt=""/>
      <h6>{item.name}</h6>
      </div>
    })}
  </Slider>
    </div>
    </>
  )
}
