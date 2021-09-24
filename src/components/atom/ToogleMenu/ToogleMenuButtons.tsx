import React from "react"
import "../../../assets/styles/index.scss"
import { Link } from "gatsby"
import ElectronicsCategoryHover from "./ElectronicsCategoryHover"
import EcoFriendlyCategoryHover from "./EcoFriendlyCategoryHover"
import HomeDecorCategoryHover from "./HomeDecorCategoryHover"
import PortableCategoryHover from "./PortableCategoryHover"
import HatKeCategoryHover from "./HatKeCategoryHover"
import ThisFestivalCategoryHover from "./ThisFestivalCategoryHover"
import TopKnotchCategoryHover from "./TopKnotchCategoryHover"

export const ToogleMenuButtons = () => {
  return (
    <div className="flex flex-row justify-evenly item-list invisible w-0 h-0 md:visible md:w-full md:h-full lg:visible lg:w-full lg:h-full xl:visible xl:w-full xl:h-full 2xl:visible 2xl:w-full 2xl:h-full">
      <li key="1" className="item">
        <Link to="/ecofriendlyproducts/">
          <EcoFriendlyCategoryHover />
        </Link>
      </li>
      <li key="2" className="item">
        <Link to="/electronicproducts/">
          <ElectronicsCategoryHover />
        </Link>
      </li>
      <li key="3" className="item">
        <Link to="/homedecorproducts/">
          <HomeDecorCategoryHover />
        </Link>
      </li>
      <li key="4" className="item">
        <Link to="/thisFestival/">
          <ThisFestivalCategoryHover />
        </Link>
      </li>
      <li key="5" className="item">
        <HatKeCategoryHover />
      </li>
      <li key="6" className="item">
        <PortableCategoryHover />
      </li>
      <li key="7" className="item">
        <TopKnotchCategoryHover />
      </li>
    </div>
  )
}
