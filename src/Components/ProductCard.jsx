import React from 'react'
import { ReactComponent as StarIcon } from '../Assets/SVG/Functional/star.svg'
import desert_king from '../Assets/SVG/ProductImages/desert_king.svg'
function ProductCard({ name, id }) {
  const rating = 5
  return (
    <div className="h-[372px] w-[292px] rounded-[15px] border border-[#D7D7D7] p-4 text-xs text-meta-grey">
      <figure className="mb-4 h-[265px] w-[260px] overflow-hidden rounded-[15px] border border-[#D7D7D7]">
        <img
          src={desert_king}
          alt={name}
          className="h-full w-full object-cover"
        />
      </figure>
      <div className="mb-2.5 flex justify-between">
        <p className="">desert king</p>
        <p className="font-bold">1MBT per night</p>
      </div>
      <div className="mb-[9px] flex justify-between">
        <p>2345km away</p>
        <p>available for 2weeks stay</p>
      </div>
      <div className="flex gap-2">
        {[...Array(rating)].map((rate, index) => (
          <StarIcon key={id} />
        ))}
      </div>
    </div>
  )
}

export default ProductCard
