import React from "react"
import { graphql, StaticQuery } from "gatsby"
import "../../assets/styles/index.scss"
import { motion } from "framer-motion"
import ProductMainScreenCard2 from "./ProductMainScreenCard2"

function CenterScreen() {
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
    <div className="mx-3">
      <StaticQuery
        query={CenterScreenQuery}
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
                <div className="grid grid-cols-2 gap-2 lg:gap-4 xl:gap-6 2xl:gap-6">
                  {data.allStrapiProduct.edges.map(({ node }) => (
                    <div key={node.productID} className="mb-6 mt-2">
                      <motion.div variants={thumbnailVariants}>
                        <ProductMainScreenCard2
                          uid={node.uid}
                          productID={node.productID}
                          image1={
                            node.image1_Child.childImageSharp.gatsbyImageData
                          }
                          name={node.name}
                          date={node.date}
                          description_short={node.description_short}
                        />
                      </motion.div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </>
          )
        }}
      />
    </div>
  )
}

export default CenterScreen

const CenterScreenQuery = graphql`
  {
    allStrapiProduct(
      filter: {
        categories: { elemMatch: { name: { eq: "Product Of This Week" } } }
      }
      limit: 6
      sort: { fields: createdAt, order: ASC }
    ) {
      edges {
        node {
          name
          uid
          productID
          description_short
          date(formatString: "DD MM YYYY")
          image1_Child {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
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
