import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"
import "../../assets/styles/index.scss"
import { Link } from "gatsby"

function ProductMainScreenCard({ uid, image1, name, productID }) {
  const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }

  const thumbnailVariants = {
    initial: { scale: 0.9, opacity: 0 },
    enter: { scale: 1, opacity: 1, transition },
    exit: {
      scale: 0.5,
      opacity: 0,
      transition: { duration: 1.5, ...transition },
    },
  }
  return (
    <div>
      <div key={productID}>
        <motion.div initial="initial" animate="enter" exit="exit">
          <motion.div variants={thumbnailVariants}>
            <Link className="flex flex-col" to={`/products/${uid}`}>
              <motion.div
                className="flex flex-col shadow-lg"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <GatsbyImage image={getImage(image1)} alt={name} />
              </motion.div>
              <div className="product-card-name-font lg:text-sm xl:text-xl xxl:text-2xl uppercase font-semibold my-2">
                <h1>{name}</h1>
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default ProductMainScreenCard
