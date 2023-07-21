import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../../context/cartContext.js'
import logo from "../../images/freshcart-logo.svg"
export default function Navbar() {
let x=useContext(CartContext)
console.log(x);
console.log('from navbar');
  return (
    <>
<nav className="navbar navbar-expand-lg bg-main-light navbar-light">
  <div className="container">
  <NavLink className="navbar-brand" to="/">
      <img src={logo} alt=''/>
    </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 mt-2">
        <li className="nav-item">
        <NavLink className='nav-link' to='/'>Home</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className='nav-link' to='/products'>Products</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className='nav-link' to='/'>Categories</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className='nav-link' to='/'>Brands</NavLink>
        </li>
      </ul>

      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <NavLink type="button" className="btn position-relative mn-3">
       Cart <i className="fa-solid fa-cart-shopping"></i>
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
    10
    {/* {x.CartCount} */}
    <span className="visually-hidden">unread messages</span>
  </span>
</NavLink>
        </li>
        {/* <li className="nav-item">
        <NavLink className='nav-link' to='/'>Logout</NavLink>
        </li> */}
        <li className="nav-item">
        <NavLink className='nav-link' to='/register'>Register</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className='nav-link' to='/login'>Login</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav> 
      
    </>
  )
}
