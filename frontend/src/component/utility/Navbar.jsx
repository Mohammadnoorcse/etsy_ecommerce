import React from 'react'
import {Link} from "react-router-dom"
import "../style/navbar.css"
const Navbar = () => {
  return (
    <div className='navbar div-width h-28 div-just '>
        <div className="navbar-content container  div-center  ">
            <div className="navbar-1">
              <Link to="#" className='text-4xl font-bold'>Esty</Link>
            </div>
            <div className="navbar-2 div-center">
                <button ><i class="fa-solid fa-bars"></i> categories</button>
            </div>
            <div className="navbar-3">
                <input type="text" placeholder='Search for anything' />
                <i class="fa-solid fa-magnifying-glass icon"></i>
            </div>
            <div className="navbar-4">
                <Link to="#">sign in</Link>
                <i class="fa-regular fa-heart ">
                
                </i>
                <i class="fa-solid fa-cart-shopping"></i>
                <span className='fb'>
                    Favourite
                </span>
            </div>
        </div>
        

    </div>
  )
}

export default Navbar