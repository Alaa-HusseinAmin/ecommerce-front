import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/cartContext.js';
import { baseUrl } from '../../utils/baseUrl.js';
import Product from '../Product/Product.jsx';

export default function Products() {
  const [Products,setProducts]=useState([])
  const getAllProducts=async()=>{
    let {data}=await axios.get(`${baseUrl}/products`)
  console.log(data.data);
  setProducts(data.data)
  }
  useEffect(()=>{
  getAllProducts()
  },[])
  let x =useContext(CartContext)
  console.log('from products');
  console.log(x);
  return (
    <>
    <div className='container'>
    <div className='row'>
    <Product Products={Products}/>
    </div>
    </div>
    </>
  )
}
