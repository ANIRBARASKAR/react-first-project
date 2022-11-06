import React from 'react'
import { Link } from 'react-router-dom'
import {HashLink} from "react-router-hash-link"
function Header() {
  return (
    <>
      <nav>
       <h1>ANIR</h1>
        <main>
            <HashLink className='ms-2 nav-link text-dark' to="/#home">Home</HashLink>
            {/* <HashLink className='ms-2 nav-link text-dark' to="/#contact">Contact</HashLink> */}
            
            <Link className='ms-2 nav-link text-dark'  to="/contact">Contact</Link>
            <HashLink className='ms-2 nav-link text-dark'  to="/#about">About</HashLink>
            <HashLink className='ms-2 nav-link text-dark'  to="/#brands">Brands</HashLink>
            <Link className='ms-2 nav-link text-dark'  to="/services">Services</Link>
        </main>
      </nav>
    </>
  )
}

export default Header
