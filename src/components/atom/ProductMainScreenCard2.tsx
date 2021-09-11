import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"
import "../../assets/styles/index.scss"
import { Link } from "gatsby"

function ProductMainScreenCard2({
  uid,
  image1,
  name,
  productID,
  date,
  description_short,
}) {
  const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }

  const thumbnailVariants = {
    initial: { scale: 0.9, opacity: 0 },
    enter: { scale: 1, opacity: 1, transition },
    exit: { scale: 0.5, opacity: 0, transition },
  }
  return (
    <div key={productID}>
      <motion.div initial="initial" animate="enter" exit="exit">
        <motion.div variants={thumbnailVariants}>
          <Link className="flex flex-col" to={`/products/${uid}`}>
            <motion.div className="flex flex-col shadow-lg">
              <GatsbyImage image={getImage(image1)} alt={name} />
            </motion.div>
            <div className="mt-1 md:mt-2 lg:mt-2 xl:mt-2 2xl:mt-5">
              <div className="product-card-name-font text-left lg:text-md xl:text-xl 2xl:text-4xl uppercase mt-1">
                <h1>{name}</h1>
              </div>
              <h1 className="text-left text-xs xl:text-md 2xl:text-2xl mt-1 2xl:mt-3">
                {description_short}
              </h1>
              <h1 className="text-left text-gray-400 text-xs xl:text-md 2xl:text-2xl mt-1">
                Published On: {date}
              </h1>
            </div>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default ProductMainScreenCard2
