import { useState } from 'react'
import { ReactComponent as StarIcon } from '../Assets/SVG/Functional/star.svg'

function ProductCard({
  name,
  id,
  cost,
  rating,
  distance,
  availability,
  image,
}) {
  const [isFavorite, setIsFavorite] = useState(false)
  return (
    <div className="h-[372px] w-[292px] rounded-[15px] border border-[#D7D7D7] p-4 text-xs text-meta-grey transition-shadow duration-300 hover:shadow-lg">
      <figure className="relative mb-4 h-[265px] w-[260px] overflow-hidden rounded-[15px] border border-[#D7D7D7]">
        <img src={image} alt={name} className="h-full w-full object-cover" />
        {/* Heart */}
        <svg
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-[11px] right-[10px]"
          width="20"
          height="18"
          viewBox="0 0 20 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.59964 2.62952L10 3.16465L10.4004 2.62952C11.3204 1.39973 12.7949 0.599998 14.44 0.599998C17.2315 0.599998 19.5 2.8738 19.5 5.69C19.5 6.82562 19.3189 7.87375 19.0043 8.84608L19.0032 8.84934C18.249 11.236 16.7035 13.1596 15.0354 14.5933C13.365 16.0289 11.6004 16.9483 10.4589 17.3366L10.4589 17.3366L10.4536 17.3385C10.3537 17.3737 10.1893 17.4 10 17.4C9.81075 17.4 9.64625 17.3737 9.54641 17.3385L9.54642 17.3385L9.54106 17.3366C8.3996 16.9483 6.635 16.0289 4.96465 14.5933C3.29649 13.1596 1.75096 11.236 0.996763 8.84934L0.996774 8.84934L0.995722 8.84609C0.681141 7.87375 0.5 6.82562 0.5 5.69C0.5 2.8738 2.76848 0.599998 5.56 0.599998C7.2051 0.599998 8.67958 1.39973 9.59964 2.62952Z"
            fill={isFavorite ? '#A02279' : '#D7D7D7'}
            stroke="url(#paint0_linear_15140_364)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_15140_364"
              x1="10"
              y1="17.9"
              x2="10"
              y2="0.0999985"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#1D0E3D" />
              <stop offset="1" stop-color="#0F051D" />
            </linearGradient>
          </defs>
        </svg>
        {/*  */}
      </figure>
      <div className="mb-2.5 flex justify-between">
        <p className="">{name}</p>
        <p className="font-bold">{cost}MBT per night</p>
      </div>
      <div className="mb-[9px] flex justify-between">
        <p>{distance}</p>
        <p>{availability}</p>
      </div>
      <div className="flex gap-2">
        {[...Array(rating)].map((rate, index) => (
          <StarIcon key={index} />
        ))}
      </div>
    </div>
  )
}

export default ProductCard
