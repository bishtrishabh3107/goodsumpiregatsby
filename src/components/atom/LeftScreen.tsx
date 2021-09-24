import React from "react"
import { graphql, StaticQuery } from "gatsby"
import "../../assets/styles/index.scss"
import { motion } from "framer-motion"
import ProductMainScreenCard1 from "./ProductMainScreenCard1"
import ReactTextTransition, { presets } from "react-text-transition"

const TEXTS = ["HAT KE PRODUCTs", "UNIQUE PRODUCTS", "HIDDEN GEMS"]

function LeftScreen() {
  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex(index => index + 1),
      2000 // every 3 seconds
    )
    return () => clearTimeout(intervalId)
  }, [])

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
      <div className="flex flex-row justify-center goodsumpire-font uppercase font-semibold lg:text-md xl:text-lg 2xl:text-4xl">
        <h1>
          <ReactTextTransition
            text={TEXTS[index % TEXTS.length]}
            springConfig={presets.wobbly}
          />
        </h1>
      </div>

      <StaticQuery
        query={LeftScreenQuery}
        render={data => {
          return (
            <>
              <motion.div
                className="thumbnails"
                initial="initial"
                animate="enter"
                exit="exit"
                variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
              >
                {data.allStrapiProduct.edges.map(({ node }) => (
                  <div key={node.productID} className="mb-6 mt-2">
                    <motion.div variants={thumbnailVariants}>
                      <ProductMainScreenCard1
                        uid={node.uid}
                        productID={node.productID}
                        image1={
                          node.image1_Child.childImageSharp.gatsbyImageData
                        }
                        name={node.name}
                        description_short={node.description_short}
                      />
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </>
          )
        }}
      />
    </div>
  )
}

export default LeftScreen

const LeftScreenQuery = graphql`
  {
    allStrapiProduct(
      filter: { categories: { elemMatch: { name: { eq: "Hat Ke Products" } } } }
      limit: 5
      sort: { fields: date, order: DESC }
    ) {
      edges {
        node {
          name
          uid
          productID
          description_short
          image1_Child {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
                aspectRatio: 1.2
                layout: CONSTRAINED
                transformOptions: { cropFocus: CENTER }
              )
            }
          }
        }
      }
    }
  }
`
