import React from 'react'
import {
    
    Link
  } from "react-router-dom";
const Navbar = () => {
  return (
    <>
               <div className="w-60 h-full shadow-md bg-white px-1 absolute">
  <ul className="relative">
    <li className="relative">
      <Link className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" to="/" data-mdb-ripple="true" data-mdb-ripple-color="dark">Copyright Registration</Link>
    </li>
    <li className="relative">
      <Link className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" to="/query" data-mdb-ripple="true" data-mdb-ripple-color="dark">Copyright Query</Link>
    </li>
    <li className="relative">
      <Link className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" to="/graphic" data-mdb-ripple="true" data-mdb-ripple-color="dark">Geographic Data List</Link>
    </li>
  </ul>
</div>
    
    </>
  )
}

export default Navbar