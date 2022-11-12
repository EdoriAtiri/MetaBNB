import React from 'react'
import building from '../Assets/SVG/UI/building_ui.svg'
import building_1 from '../Assets/SVG/UI/building_ui_1.svg'
import building_2 from '../Assets/SVG/UI/building_ui_2.svg'
import building_3 from '../Assets/SVG/UI/building_ui_3.svg'
import mbtoken from '../Assets/SVG/Icon/mbtoken.svg'
import metamask from '../Assets/SVG/Icon/metamask.svg'
import opensea from '../Assets/SVG/Icon/opensea.svg'
import ProductCard from '../Components/ProductCard'

function Home() {
  return (
    <div className="w-full ">
      <section
        aria-label="hero section"
        className="section_x_padding flex w-full flex-col items-center justify-center pb-16 pt-10 md:flex-row md:justify-between lg:pt-40"
      >
        <div className="h-fit w-full text-left md:w-96 lg:w-[550px] xl:w-[646px]">
          <p className="md:h-148px w-full text-5xl font-bold leading-10 md:text-4xl md:tracking-tighter lg:text-5xl xl:text-[56px]">
            Rent a{' '}
            <span className="h-fit bg-purple-grad bg-clip-text text-transparent">
              Place
            </span>{' '}
            away from{' '}
            <span className="h-fit bg-purple-grad bg-clip-text text-transparent">
              Home
            </span>{' '}
            in the{' '}
            <span className="h-fit bg-purple-grad bg-clip-text text-transparent">
              Metaverse
            </span>
          </p>

          <p className="h-102px py-6 text-xl leading-8 sm:text-2xl md:py-12 md:text-xl lg:w-fit xl:w-full  xl:text-2xl">
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>

          {/*  */}
          <div className="flex h-fit  lg:h-[54px] ">
            <input
              type="text"
              className=" h-10 w-3/5 rounded-lg rounded-br-none rounded-tr-none border border-[#a3a3a3] px-2 placeholder:text-sm focus:border-r-0 md:w-7/12 lg:h-full lg:placeholder:pl-5"
              placeholder="Search for location"
            />
            <button className="h-10 w-2/5 rounded-lg rounded-tl-none rounded-bl-none bg-purple-grad text-base text-white transition-transform active:scale-95 md:w-4/12 lg:h-full">
              Search
            </button>
          </div>
        </div>

        {/*  */}
        <div className="mt-10 flex gap-2 md:mt-0">
          <div className="flex flex-col gap-2 md:mt-24">
            <figure className="hero-img">
              <img src={building} alt="" aria-hidden="true" />
            </figure>
            <figure className="hero-img">
              <img src={building_1} alt="" aria-hidden="true" />
            </figure>
          </div>
          <div className="flex flex-col gap-2">
            <figure className="hero-img">
              <img src={building_2} alt="" aria-hidden="true" />
            </figure>
            <figure className="hero-img">
              <img src={building_3} alt="" aria-hidden="true" />
            </figure>
          </div>
        </div>
      </section>

      {/* Banner */}
      <section
        aria-label="banner"
        className="flex h-[70px] w-full items-center justify-around bg-purple-grad py-4"
      >
        <img className="h-fit" src={mbtoken} alt="mbtoken logo" />

        <img className="h-fit" src={metamask} alt="metamask logo" />

        <img className="h-fit" src={opensea} alt="opensea logo" />
      </section>

      {/* Selected products */}
      <section
        className="section_x_padding flex w-full flex-col  pt-14 pb-[52px]"
        aria-label="selected products"
      >
        <h2 className="mb-11 text-center text-5xl font-bold text-black">
          Inspiration for your next adventure
        </h2>
        {/*  */}
        <div>
          <ProductCard />
        </div>
      </section>

      {/* Discover */}
      <section className="section_x_padding relative h-[774px] w-full bg-purple-grad pt-[186px] text-white ">
        <h2 className="mb-9 text-5xl font-bold">Metabnb NFTs</h2>
        <p className="mb-14 max-w-[415px] text-lg leading-[35px]">
          Discover our NFT gift cards collection. Loyal customers gets amazing
          gift cards which are traded as NFTs. These NFTs gives our customer's
          access to loads of our exclusive services.
        </p>
        <button className="rounded-lg  bg-white py-[14px] px-[33px] text-center">
          <p className="bg-purple-grad bg-clip-text text-center text-base text-transparent ">
            Learn More
          </p>
        </button>
        <div className="absolute top-0">
          <figure className="discovery_art rotate-[17.76deg]">
            <img className="h-full w-full object-cover" src="" alt="" />
          </figure>
          <figure className="discovery_art -rotate-[8.76deg]">
            <img className="h-full w-full object-cover" src="" alt="" />
          </figure>
          <figure className="discovery_art -rotate-[26.02deg]">
            <img className="h-full w-full object-cover" src="" alt="" />
          </figure>
        </div>
      </section>
    </div>
  )
}

export default Home
