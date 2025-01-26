import React from "react"

const EmptyCard = ({ imgSrc, message }) => {
  return (
    <div className="flex flex-col items-center justify-center mt-0">
      

      <p className="w-1/2 text-lg font-semibold text-[#12296c] text-center leading-7 mt-5">
        {message}
      </p>
    </div>
  )
}

export default EmptyCard
