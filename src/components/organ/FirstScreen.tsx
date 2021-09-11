import React from "react"
import CenterScreen from "../atom/CenterScreen"
import LeftScreen from "../atom/LeftScreen"
import RightScreen from "../atom/RightScreen"

function FirstScreen() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-10 lg:grid-cols-10 xl:grid-cols-10 xxl:grid-cols-10 gap-x-4 my-5 lg:my-6 xl:my-8 2xl:my-10">
      <div className="w-0 h-0 md:w-full md:h-full lg:w-full lg:h-full xl:w-full xl:h-full xxl:w-full xxl:h-full invisible md:visible lg:visible xl:visible xxl:visible md:col-start-1 md:col-end-3 lg:col-start-1 lg:col-end-3 xl:col-start-1 xl:col-end-3 xxl:col-start-1 xxl:col-end-3 -mt-16">
        <LeftScreen />
      </div>
      <div className="md:col-start-3 md:col-end-9 lg:col-start-3 lg:col-end-9 xl:col-start-3 xl:col-end-9 xxl:col-start-3 xxl:col-end-9 -mt-16">
        <CenterScreen />
      </div>
      <div className="w-0 h-0 md:w-full md:h-full lg:w-full lg:h-full xl:w-full xl:h-full xxl:w-full xxl:h-full invisible md:visible lg:visible xl:visible xxl:visible md:col-start-9 md:col-end-11 lg:col-start-9 lg:col-end-11 xl:col-start-9 xl:col-end-11 xxl:col-start-9 xxl:col-end-11 -mt-16">
        <RightScreen />
      </div>
    </div>
  )
}

export default FirstScreen
