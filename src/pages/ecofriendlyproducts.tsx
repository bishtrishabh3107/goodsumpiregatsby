import React from "react"
import { graphql, StaticQuery, useStaticQuery } from "gatsby"
import "../assets/styles/index.scss"
import Layout from "../components/Global/Layout"
import { motion } from "framer-motion"
import ProductMainScreenCard2 from "../components/atom/ProductMainScreenCard2"
import ProductMainScreenCard3 from "../components/atom/ProductMainScreenCard3"
import { GiLindenLeaf } from "react-icons/gi"
import ReactTextTransition, { presets } from "react-text-transition"
import PortableScreen from "../components/organ/PortableScreen"
import HatKeScreen from "../components/organ/HatKeScreen"

const TEXTS = [
  "ENVIRONMENT SAFE PRODUCTS",
  "ECO FRIENDLY PRODUCTS",
  "CARBON SAFE PRODUCTS",
]

function ecofriendlyproducts() {
  const data = useStaticQuery(SecondScreenQuery)
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
    <Layout seo={data.strapiGlobal.seo}>
      <motion.div
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div>
          <div className="my-4 -mt-16">
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
            <StaticQuery
              query={SecondScreenQuery}
              render={data => {
                return (
                  <>
                    <motion.div
                      className="thumbnails"
                      initial="initial"
                      animate="enter"
                      exit="exit"
                      variants={{
                        exit: { transition: { staggerChildren: 0.1 } },
                      }}
                    >
                      <div className="sm:mx-6 md:mx-10 lg:mx-14 xl:mx-16 2xl:mx-20 my-5 grid grid-cols-1">
                        <div>
                          <div
                            key={data.strapiProduct.productID}
                            className="m-2 2xl:mr-5 md:p-10 lg:p-20 xl:p-20 2xl:p-24 md:-mt-8 lg:-mt-16 xl:-mt-16 2xl:-mt-20"
                          >
                            <motion.div variants={thumbnailVariants}>
                              <ProductMainScreenCard3
                                uid={data.strapiProduct.uid}
                                productID={data.strapiProduct.productID}
                                image1={
                                  data.strapiProduct.image1_Child
                                    .childImageSharp.gatsbyImageData
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
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 md:-mt-8 lg:-mt-16 xl:-mt-16 2xl:-mt-20">
                          {data.allStrapiProduct.edges.map(({ node }) => (
                            <div key={node.productID} className="m-2">
                              <motion.div variants={thumbnailVariants}>
                                <ProductMainScreenCard2
                                  uid={node.uid}
                                  productID={node.productID}
                                  image1={
                                    node.image1_Child.childImageSharp
                                      .gatsbyImageData
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
          <hr className="border-2"></hr>
          <PortableScreen />
          <hr className="border-2"></hr>
          <HatKeScreen />
        </div>
      </motion.div>
    </Layout>
  )
}

export default ecofriendlyproducts

const SecondScreenQuery = graphql`
  {
    allStrapiProduct(
      filter: {
        categories: { elemMatch: { name: { eq: "Eco Friendly" } } }
        inSpotlight: { eq: false }
      }
      sort: { fields: date, order: ASC }
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
      categories: { elemMatch: { name: { eq: "Eco Friendly" } } }
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
    strapiGlobal {
      defaultSeo {
        metaTitle
        metaDescription
        shareImage {
          url
        }
      }
    }
  }
`
