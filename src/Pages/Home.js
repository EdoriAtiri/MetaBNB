import React from 'react'
import building from '../Assets/SVG/UI/building_ui.svg'
import building_1 from '../Assets/SVG/UI/building_ui_1.svg'
import building_2 from '../Assets/SVG/UI/building_ui_2.svg'
import building_3 from '../Assets/SVG/UI/building_ui_3.svg'

function Home() {
  return (
    <div className="w-full ">
      <div className="w-full px-6 pb-16 pt-10 md:flex md:justify-between lg:px-16 lg:pt-40 xl:px-[100px]">
        <div className="h-fit w-72 lg:w-[646px] ">
          <p className="h-148px w-full text-2xl font-bold leading-10 tracking-tighter md:text-3xl lg:text-5xl xl:text-[56px]">
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

          <p className="h-102px md:xl py-6 leading-8 md:py-12 lg:text-2xl">
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>

          {/*  */}
          <div className="flex h-fit flex-col gap-3 lg:h-[54px] lg:flex-row lg:gap-0 ">
            <input
              type="text"
              className="h-10 w-full rounded-lg border border-[#a3a3a3] placeholder:pl-3 placeholder:text-sm lg:h-full lg:w-[390px] lg:rounded-br-none lg:rounded-tr-none lg:placeholder:pl-5"
              placeholder="Search for location"
            />
            <button className="h-10 w-full rounded-lg bg-purple-grad text-base text-white transition-transform active:scale-95 lg:h-full lg:w-[230px] lg:rounded-tl-none lg:rounded-bl-none">
              Search
            </button>
          </div>
        </div>

        {/*  */}
        <div className="flex gap-2">
          <div className="mt-24 flex flex-col gap-2">
            <figure className="h-[176px] w-[234px] overflow-hidden rounded-[15px]">
              <img src={building} alt="" aria-hidden="true" />
            </figure>
            <figure className="h-[176px] w-[234px] overflow-hidden rounded-[15px]">
              <img src={building_1} alt="" aria-hidden="true" />
            </figure>
          </div>
          <div className="flex flex-col gap-2">
            <figure className="h-[176px] w-[234px] overflow-hidden rounded-[15px]">
              <img src={building_2} alt="" aria-hidden="true" />
            </figure>
            <figure className="h-[176px] w-[234px] overflow-hidden rounded-[15px]">
              <img src={building_3} alt="" aria-hidden="true" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
