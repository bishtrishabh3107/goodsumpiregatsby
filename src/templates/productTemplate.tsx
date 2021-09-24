import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Global/Layout"
import ProductPage from "../components/ProductPage"
import EcoFriendlyScreen from "../components/organ/EcoFriendlyScreen"
import HatKeScreen from "../components/organ/HatKeScreen"
import { motion } from "framer-motion"

export const query = graphql`
  query ($productuid: String!) {
    allStrapiProduct(filter: { uid: { in: [$productuid] } }) {
      edges {
        node {
          name
          uid
          description_short
          description
          keywords
          productID
          rating1
          rating2
          rating3
          amazon_link
          amazon_price
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
          image2_Child {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
                layout: CONSTRAINED
                transformOptions: { cropFocus: CENTER }
              )
            }
          }
          image3_Child {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
                layout: CONSTRAINED
                transformOptions: { cropFocus: CENTER }
              )
            }
          }
          AO_Name
          AO_Price
          AO_Link
          AO_Description
          AO_image_Child {
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
    strapiProduct(uid: { in: [$productuid] }) {
      name
      description
      keywords
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
`

const ProductTemplate = ({ data }) => {
  const product = data.strapiProduct
  var str = product.keywords
  var temp = new Array()
  temp = str.split(",")
  const seo = {
    metaTitle: product.name,
    metaDescription: product.description,
    keyword1: temp[0],
    keyword2: temp[1],
    keyword3: temp[2],
    keyword4: temp[3],
    keyword5: temp[4],
    keyword6: temp[5],
    keyword7: temp[6],
    keyword8: temp[7],
    keyword9: temp[8],
    keyword10: temp[9],
    keyword11: temp[10],
    keyword12: temp[11],
    keyword13: temp[12],
    keyword14: temp[13],
    keyword15: temp[14],
    shareImage: product.image1,
  }

  return (
    <Layout seo={seo}>
      <motion.div
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-col pt-14">
          <div className="-mt-20 px-2 mb-10">
            {data.allStrapiProduct.edges.map(({ node }) => (
              <div key={node.productID}>
                <ProductPage
                  name={node.name}
                  image1={node.image1_Child.childImageSharp.gatsbyImageData}
                  image2={node.image2_Child.childImageSharp.gatsbyImageData}
                  image3={node.image3_Child.childImageSharp.gatsbyImageData}
                  description_short={node.description_short}
                  description={node.description}
                  rating1={node.rating1}
                  rating2={node.rating2}
                  rating3={node.rating3}
                  amazon_price={node.amazon_price}
                  amazon_link={node.amazon_link}
                  date={node.date}
                  AO_Name={node.AO_Name}
                  AO_Price={node.AO_Price}
                  AO_Link={node.AO_Link}
                  AO_Description={node.AO_Description}
                  AO_image_Child={
                    node.AO_image_Child.childImageSharp.gatsbyImageData
                  }
                />
              </div>
            ))}
          </div>
          <hr className="border-2"></hr>
          <EcoFriendlyScreen />
          <hr className="border-2"></hr>
          <HatKeScreen />
        </div>
      </motion.div>
    </Layout>
  )
}

export default ProductTemplate
