import React from "react"
import { graphql, StaticQuery } from "gatsby"
import "../../assets/styles/index.scss"
import ProductMainScreenCard2 from "../atom/ProductMainScreenCard2"
import ProductMainScreenCard3 from "../atom/ProductMainScreenCard3"
import { motion } from "framer-motion"
import { GiLindenLeaf } from "react-icons/gi"
import ReactTextTransition, { presets } from "react-text-transition"
import { Link } from "gatsby"

const TEXTS = ["ELECTRONIC PRODUCTS", "DIGITAL AGE PRODUCTS", "TECH PRODUCTS"]

function ElectronicsScreen() {
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
    exit: { scale: 0.5, opacity: 0, transition },
  }
  return (
    <div className="my-5 lg:my-6 xl:my-8 2xl:my-10">
      <Link to="/electronicproducts">
        <h1 className="flex flex-row justify-start goodsumpire-font uppercase font-extrabold text-sm lg:text-lg xl:text-xl 2xl:text-5xl">
          <ReactTextTransition
            text={TEXTS[index % TEXTS.length]}
            springConfig={presets.wobbly}
          />

          <div className="text-green-500 flex flex-row mx-1">
            <GiLindenLeaf />
            <GiLindenLeaf />
          </div>
        </h1>
      </Link>
      <StaticQuery
        query={ElectronicsScreenQuery}
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
                <div className="sm:mx-6 md:mx-10 lg:mx-14 xl:mx-16 2xl:mx-20 my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
                  <div>
                    <div
                      key={data.strapiProduct.productID}
                      className="m-2 2xl:mr-5"
                    >
                      <motion.div variants={thumbnailVariants}>
                        <ProductMainScreenCard2
                          uid={data.strapiProduct.uid}
                          productID={data.strapiProduct.productID}
                          image1={
                            data.strapiProduct.image1_Child.childImageSharp
                              .gatsbyImageData
                          }
                          name={data.strapiProduct.name}
                          description_short={
                            data.strapiProduct.description_short
                          }
                          date={data.strapiProduct.date}
                        />
                      </motion.div>
                    </div>
                  </div>
                  <div>
                    {data.allStrapiProduct.edges.map(({ node }) => (
                      <div key={node.productID} className="m-2">
                        <motion.div variants={thumbnailVariants}>
                          <ProductMainScreenCard3
                            uid={node.uid}
                            productID={node.productID}
                            image1={
                              node.image1_Child.childImageSharp.gatsbyImageData
                            }
                            name={node.name}
                            description_short={node.description_short}
                            date={node.date}
                          />
                        </motion.div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </>
          )
        }}
      />
    </div>
  )
}

export default ElectronicsScreen

const ElectronicsScreenQuery = graphql`
  {
    allStrapiProduct(
      filter: {
        categories: { elemMatch: { name: { eq: "Electronics" } } }
        inSpotlight: { eq: false }
      }
      limit: 4
      sort: { fields: date, order: DESC }
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
                aspectRatio: 1.2
                layout: CONSTRAINED
                transformOptions: { cropFocus: CENTER }
              )
            }
          }
        }
      }
    }
    strapiProduct(
      inSpotlight: { eq: true }
      categories: { elemMatch: { name: { eq: "Electronics" } } }
    ) {
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
            aspectRatio: 1.2
            layout: CONSTRAINED
            transformOptions: { cropFocus: CENTER }
          )
        }
      }
    }
  }
`
