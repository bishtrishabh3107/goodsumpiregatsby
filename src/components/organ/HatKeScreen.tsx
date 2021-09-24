import React from "react"
import { graphql, StaticQuery } from "gatsby"
import "../../assets/styles/index.scss"
import { motion } from "framer-motion"
import ProductMainScreenCard2 from "../atom/ProductMainScreenCard2"
import { BsFillAwardFill } from "react-icons/bs"
import ReactTextTransition, { presets } from "react-text-transition"

const TEXTS = ["HAT KE PRODUCTs", "UNIQUE PRODUCTS", "HIDDEN GEMS"]

function HatKeScreen() {
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
    <div className="my-5 lg:my-4 xl:my-6 2xl:my-10">
      <h1 className="flex flex-row justify-start goodsumpire-font uppercase font-extrabold text-sm lg:text-lg xl:text-xl 2xl:text-5xl">
        <ReactTextTransition
          text={TEXTS[index % TEXTS.length]}
          springConfig={presets.wobbly}
        />

        <div className="text-green-500 flex flex-row mx-1 mt-1">
          <BsFillAwardFill />
          <BsFillAwardFill />
        </div>
      </h1>

      <StaticQuery
        query={ThirdScreenQuery}
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
                <div className="sm:mx-6 md:mx-10 lg:mx-14 xl:mx-16 xxl:mx-20 my-5 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 xxl:grid-cols-4 gap-4">
                  {data.allStrapiProduct.edges.map(({ node }) => (
                    <div className="m-2" key={node.productID}>
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

export default HatKeScreen

const ThirdScreenQuery = graphql`
  {
    allStrapiProduct(
      filter: { categories: { elemMatch: { name: { eq: "Hat Ke Products" } } } }
      limit: 4
      sort: { fields: date, order: DESC }
    ) {
      edges {
        node {
          name
          uid
          productID
          description_short
          date
          image1_Child {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
                aspectRatio: 0.9
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
