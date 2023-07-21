import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext.js';

export default function Product({Products}) {
  console.log(Products);
  let x =useContext(CartContext)
  console.log('from product');
  console.log(x);
  return (
    <>
      {Products.map((item)=>{
        return <div key={item._id} className='col-md-2'>
          <div className='product'>
          <Link to={'/product-details/'+item._id}>
          <img src={item.imageCover} className='w-100' alt=''/>
          <h6 className='text-main'>{item.category.name}</h6>
         <p className='fw-bolder'>{item.title.split(' ').slice(0,2).join(' ')}</p>
        <div className='d-flex justify-content-between align-items-center my-4'>
         <span>{item.price} EGP</span>
         <div>
          <i className='fas fa-star rating-color'></i>
         {item.ratingAverage}
         </div>
        </div>
          </Link>
         <button onClick={x.changeCart} className='btn bg-main text-white w-100'>Add to cart</button>
          </div>
        </div>
      })}
    </>
  )
}
