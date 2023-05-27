import React from 'react'
import { Link } from 'react-router-dom'

const NavbarComponent = () => {
  return (
    <nav id="navbar">
        <div className="links">

          <li><Link>Best Sellers</Link></li>
          <li><Link>Gift Ideas</Link></li>
          <li><Link>New Releases</Link></li>
          <li><Link>Today's Deals</Link></li>
          <li><Link>Customer Service</Link></li>
        </div>
    </nav>
  )
}

export default NavbarComponent