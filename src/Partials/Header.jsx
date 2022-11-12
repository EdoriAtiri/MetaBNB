import { useState } from 'react'
import metabnb from '../Assets/SVG/Icon/metabnb.svg'
import metabnb_home from '../Assets/SVG/Icon/metabnb_home.svg'

function Header() {
  const [isNavToggle, setIsNavToggle] = useState(false)
  return (
    <div className="w-full">
      <header className="hidden h-24 w-full items-center justify-between md:flex md:px-6 lg:px-16 xl:px-[100px]">
        <div className="flex items-center justify-between">
          <img
            className="h-auto w-8 lg:w-[41.99px]"
            src={metabnb_home}
            alt="metabnb_logo"
          />
          <img
            className="h-auto w-24 md:w-32 lg:w-[188px]"
            src={metabnb}
            alt="metabnb_logo"
          />
        </div>

        <nav className="flex items-center justify-between gap-5 lg:gap-12">
          <a className="nav-links " href="#home">
            Home
          </a>
          <a className="nav-links " href="#home">
            Place to stay
          </a>
          <a className="nav-links " href="#home">
            NFTs
          </a>
          <a className="nav-links " href="#home">
            Community
          </a>
        </nav>

        <button className="h-12 w-[170px] rounded-[10px] bg-purple-grad text-white">
          Connect Wallet
        </button>
      </header>

      {/* hamburger */}
      <button
        className=" px-6 pt-6 md:hidden"
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
