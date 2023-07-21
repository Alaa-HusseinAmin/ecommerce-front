import React from 'react'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { ToastContainer } from 'react-toastify'
import MainLayout from "../src/Layout/MainLayout.jsx"
import Login from './components/Login/Login.jsx'
import ProductDetails from './components/ProductDetails/ProductDetails.jsx'
import Products from './components/Products/Products.jsx'
import Register from './components/Register/Register.jsx'
import HomePage from './pages/HomePage.jsx'
export default function App() {
  let routes=createBrowserRouter([
      {
      path:'',
      element:<MainLayout/>,
      children:[
        {index:true,element:<HomePage/>},
        {path:"products",element:<Products/>},
        {path:"product-details/:id",element:<ProductDetails/>},
        {path:"register",element:<Register/>},
        {path:"login",element:<Login/>}
      ]
    }
  ])
  return (
    <>
    {/* <CartContext.Provider></CartContext.Provider> */}
    <ToastContainer theme='colored' />
    <RouterProvider router={routes}/>
    </>
  )
}
