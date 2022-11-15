import React from 'react'
import metabnb_icon from '../Assets/SVG/Icon/metabnb_footer_icon.svg'
import metabnb_icon_text from '../Assets/SVG/Icon/metabnb_footer_text.svg'
import facebook_logo from '../Assets/SVG/Icon/facebook_logo.svg'
import instagram_logo from '../Assets/SVG/Icon/instagram.svg'
import twitter_logo from '../Assets/SVG/Icon/twitter.svg'

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="section_x_padding flex h-fit w-full flex-col-reverse justify-between gap-12 bg-[#1D1D1E] pt-[62.88px] pb-[37px] sm:h-[322px] sm:flex-row sm:gap-0">
      <div className="mx-auto text-base text-meta-white sm:hidden ">
        &copy; {year} Metabnb
      </div>
      <div className="flex w-full justify-around sm:w-1/3 sm:flex-col sm:justify-start">
        <figure className="mb-14 flex w-fit lg:mb-24">
          <img
            className="max-w-[29.4px] lg:max-w-[42px]"
            src={metabnb_icon}
            alt="metabnb logo"
          />
          <img
            className="max-w-[134px] lg:max-w-[188px]"
            src={metabnb_icon_text}
            alt="metabnb logo text"
          />
        </figure>
        <div className="mb-14 flex gap-9 [&>*]:cursor-pointer">
          <img
            className="max-w-[9px]"
            src={facebook_logo}
            alt="facebook logo"
          />
          <img
            className="max-w-[18px]"
            src={instagram_logo}
            alt="instagram logo"
          />
          <img className="max-w-[18px]" src={twitter_logo} alt="twitter logo" />
        </div>

        <div className="hidden text-base text-meta-white sm:block ">
          &copy; {year} Metabnb
        </div>
      </div>

      <div className="flex w-full justify-between sm:w-2/3 lg:pr-24 xl:pr-36">
        <div>
          <p className="mb-[23px] cursor-pointer text-lg font-bold text-white">
            Community
          </p>
          <ul className="flex  flex-col gap-4 text-sm text-[#F1F3F9] [&>*]:cursor-pointer">
            <li>NFT</li>
            <li>Tokens</li>
            <li>Landlords</li>
            <li>Discord</li>
          </ul>
        </div>
        <div>
          <p className="mb-[23px] cursor-pointer text-lg font-bold text-white">
            Places
          </p>
          <ul className="flex  flex-col gap-4 text-sm text-[#F1F3F9] [&>*]:cursor-pointer">
            <li>Castle</li>
            <li>Farms</li>
            <li>Beach</li>
            <li>Learn More</li>
          </ul>
        </div>
        <div>
          <p className="mb-[23px] cursor-pointer text-lg font-bold text-white">
            About Us
          </p>
          <ul className="flex flex-col gap-4 text-sm text-[#F1F3F9] [&>*]:cursor-pointer">
            <li>Road Map</li>
            <li>Creators</li>
            <li>Career</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
