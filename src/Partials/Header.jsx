import { Link } from 'react-router-dom'
import { useState } from 'react'
import metabnb from '../Assets/SVG/Icon/metabnb.svg'
import metabnb_home from '../Assets/SVG/Icon/metabnb_home.svg'

function Header({ handleConnectClick }) {
  const [isNavToggle, setIsNavToggle] = useState(false)
  return (
    <div className="section_x_padding flex h-24 w-full flex-row-reverse items-center justify-center md:block">
      <header className=" ml-auto flex h-full items-center gap-6 md:ml-0 md:w-full md:justify-between md:gap-0 ">
        <div className="flex items-center justify-between">
          <img
            className="h-auto w-6 sm:w-8 lg:w-[41.99px]"
            src={metabnb_home}
            alt="metabnb_logo"
          />
          <img
            className="h-auto w-20 sm:w-24 md:w-32 lg:w-[188px]"
            src={metabnb}
            alt="metabnb_logo"
          />
        </div>

        <nav className="hidden items-center justify-between gap-4 md:flex lg:gap-12">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <a className="nav-links " href="#home">
              Home
            </a>
          </Link>
          <Link to="/places" style={{ textDecoration: 'none' }}>
            <a className="nav-links " href="#places">
              Place to stay
            </a>
          </Link>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <a className="nav-links" href="#NFT">
              NFTs
            </a>
          </Link>

          <a className="nav-links " href="#home">
            Community
          </a>
        </nav>

        <button
          className="h-12 w-[170px] rounded-[10px] bg-purple-grad text-sm text-white sm:text-base"
          onClick={handleConnectClick}
        >
          Connect Wallet
        </button>
      </header>

      {/* hamburger */}
      <button
        className="pr-6 md:hidden"
        onClick={() => setIsNavToggle(!isNavToggle)}
      >
        <div
          className={`hamburger my-[6px] ${
            isNavToggle ? 'translate-y-3 rotate-[135deg] ' : ''
          }`}
        ></div>
        <div
          className={`hamburger my-[6px] ${isNavToggle ? 'scale-0 ' : ''}`}
        ></div>
        <div
          className={`hamburger my-[6px] ${
            isNavToggle ? '-translate-y-3 -rotate-[135deg] ' : ''
          }`}
        ></div>
      </button>
    </div>
  )
}

export default Header
