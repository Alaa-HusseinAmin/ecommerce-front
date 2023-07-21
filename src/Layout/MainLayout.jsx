import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar.jsx'
export default function mainlayout() {
  return (
    <>
        <Navbar/>
        <Outlet/>
    </>
  )
}
