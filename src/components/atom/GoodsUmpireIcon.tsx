import React from "react"
import { GiShoppingCart } from "react-icons/gi"
import "../../assets/styles/index.scss"
import { motion } from "framer-motion"
import { Link } from "gatsby"

function GoodsUmpireIcon() {
  return (
    <div>
      <Link to="/">
        <div className=" flex flex-row justify-center md:-mt-2 lg:-mt-4 xl:-mt-3 xxl:-mt-3">
          <h1 className="goodsumpire-font mx-1 my-2 text-yellow-500 font-bold border-b-2 border-blue-500 text-sm lg:text-xl xl:text-3xl xxl:text-9xl">
            GOODS{" "}
          </h1>
          <h1 className="goodsumpire-font mr-1 my-1 text-blue-500 font-bold border-t-2  border-yellow-500 text-sm lg:text-xl xl:text-3xl xxl:text-9xl">
            UMPIRE{" "}
          </h1>
          <span className="text-green-500 mt-2 md:mt-0.5 lg:mt-1 text-lg md:text-2xl lg:text-3xl xl:text-4xl xxl:text-9xl">
            <motion.div
              initial={{ x: 1000 }}
              animate={{ x: 0 }}
              whileHover={{ scale: 1.4 }}
            >
              <GiShoppingCart />
            </motion.div>
          </span>
        </div>
      </Link>
    </div>
  )
}

export default GoodsUmpireIcon
