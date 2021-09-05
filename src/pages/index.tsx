import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Global/Layout"
import FirstScreen from "../components/organ/FirstScreen"
import SecondScreen from "../components/organ/SecondScreen"
import ThirdScreen from "../components/organ/ThirdScreen"
import FourthScreen from "../components/organ/FourthScreen"
import FifthScreen from "../components/organ/FifthScreen"
import { motion } from "framer-motion"
import SixthScreen from "../components/organ/SixthScreen"

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

        <hr></hr>
        <section id="EcoFriendly">
          <SecondScreen />
        </section>
        <hr></hr>
        <section id="HatKeProducts">
          <ThirdScreen />
        </section>
        <hr></hr>
        <section id="TopKnotchProducts">
          <FourthScreen />
        </section>
        <hr></hr>
        <section id="PortableProducts">
          <FifthScreen />
        </section>
        <hr></hr>
        <section id="MonthsSpecial">
          <SixthScreen />
        </section>
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