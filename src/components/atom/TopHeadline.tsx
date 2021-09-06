import React from "react"
import "../../assets/styles/index.scss"

function TopHeadline() {
  return (
    <div className="flex flex-row justify-end sm:invisible md:visible lg:visible xl:visible xxl:visible">
      <h1 className="top-headline text-gray-500 xl:text-lg xxl:text-2xl mx-1">
        <a href="https://wa.me/9690806397" target="_blank">
          Advertise with us
        </a>
      </h1>
      <h1 className="top-headline text-gray-500 xl:text-lg xxl:text-2xl mx-2">
        <a href="https://wa.me/9690806397" target="_blank">
          Sell on Goods Umpire
        </a>
      </h1>
    </div>
  )
}

export default TopHeadline
