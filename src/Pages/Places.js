import React from 'react'
import ProductCard from '../Components/ProductCard'
import { data } from '../Assets/data'
import settings from '../Assets/SVG/Functional/settings.svg'

function Places() {
  return (
    <div className="section_x_padding pt-[91px]">
      <div className="flex h-fit w-full items-center justify-between pb-16 font-normal 2xl:pr-8">
        <ul className="flex flex-wrap gap-2 text-sm text-meta-grey sm:gap-3 md:gap-4 md:text-base lg:gap-6 xl:gap-9 xl:text-xl 2xl:gap-12 2xl:px-12 [&>*]:cursor-pointer">
          <li>Restaurant</li>
          <li>Cottage</li>
          <li>Castle</li>
          <li>Fantast city</li>
          <li>Beach</li>
          <li>Carbins</li>
          <li>Off-grid</li>
          <li>Farm</li>
        </ul>
        <div className="flex h-12 w-fit items-center justify-around rounded-lg border border-[#B4B4B4] px-3 text-base text-[#333333] sm:w-40 ">
          <span className="hidden sm:block">Location</span>
          <img src={settings} alt="Location settings" />
        </div>
      </div>

      {/*  */}
      <div className="mx-auto grid w-fit gap-6 pb-[92px] sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 [&>*]:cursor-pointer">
        {data.map((data) => (
          <ProductCard
            key={data.id}
            name={data.name}
            rating={data.rating}
            cost={data.cost}
            availability={data.availability}
            distance={data.distance}
            image={data.image}
          />
        ))}
      </div>
    </div>
  )
}

export default Places
