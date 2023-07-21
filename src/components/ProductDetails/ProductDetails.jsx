import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { baseUrl } from '../../utils/baseUrl.js'

export default function ProductDetails() {
    let {id} = useParams()
    

    const [Product,setProduct]=useState([])
    const getProduct=async()=>{
      let {data}=await axios.get(`${baseUrl}/products/${id}`)
    console.log(data.data);
    setProduct(data.data)
    }
    useEffect(()=>{
    getProduct()
    },[])
  return (
    <>
        <div className='container'>
        <div className='row'>
        <div className='col-md-3'>
        <img src={Product.imageCover} className='w-100' alt=''/>
        </div>
        <div className='col-md-9'>
        <h3>{Product.title}</h3> 
        <h3>{Product.description}</h3>
        </div>
        </div>
    
        </div>
    </>
  )
}
