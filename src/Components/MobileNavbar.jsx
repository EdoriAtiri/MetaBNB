import React from 'react'
import { Link } from 'react-router-dom'

function MobileNavbar({ closeNav, isNavToggle }) {
  return (
    <div
      className={`absolute top-0 left-0 z-10 w-full md:hidden ${
        isNavToggle ? 'enter' : 'exit'
      }`}
    >
      <div
        onClick={closeNav}
        className="absolute top-0 right-0 h-screen w-1/5 bg-purple-grad opacity-20"
      ></div>
      <nav className=" z-40 flex h-screen w-4/5 flex-col gap-20 bg-purple-grad pl-4 pt-28 text-2xl text-white">
        <Link to="/" style={{ textDecoration: 'none' }} onClick={closeNav}>
          <span className="mobile-nav-link">Home</span>
        </Link>
        <Link
          to="/places"
          style={{ textDecoration: 'none' }}
          onClick={closeNav}
        >
          <span className="mobile-nav-link">Place to stay</span>
        </Link>
        <span className="mobile-nav-link">NFTs</span>
        <span className="mobile-nav-link" href="#home">
          Community
        </span>
      </nav>
    </div>
  )
}

export default MobileNavbar
