import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Global/Layout"
import { motion } from "framer-motion"
import EcoFriendlyScreen from "../components/organ/EcoFriendlyScreen"
import TopKnotchScreen from "../components/organ/TopKnotchScreen"
import HatKeScreen from "../components/organ/HatKeScreen"
import ElectronicsScreen from "../components/organ/ElectronicsScreen"
import HomeDecorScreen from "../components/organ/HomeDecorScreen"
import PortableScreen from "../components/organ/PortableScreen"
import FirstScreen from "../components/organ/FirstScreen"
import ProductOfTheWeek from "../components/organ/ProductOfTheWeek"

const IndexPage = () => {
  const data = useStaticQuery(query)

  return (
    <Layout seo={data.strapiGlobal.seo}>
      <motion.div
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <FirstScreen />
        <hr className="border-2"></hr>
        <EcoFriendlyScreen />
        <hr className="border-2"></hr>
        <ElectronicsScreen />
        <hr className="border-2"></hr>
        <HomeDecorScreen />
        <hr className="border-2"></hr>
        <PortableScreen />
        <hr className="border-2"></hr>
        <HatKeScreen />
        <hr className="border-2"></hr>
        <TopKnotchScreen />
        <hr className="border-2"></hr>
        <ProductOfTheWeek />
      </motion.div>
    </Layout>
  )
}

const query = graphql`
  query {
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

export default IndexPage
