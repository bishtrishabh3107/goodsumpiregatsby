import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Seo from "./seo"
import Header from "../organ/Header"
import Footer from "../organ/Footer"
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button"

const Layout = ({ children, seo }) => {
  return (
    <StaticQuery
      query={graphql`
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
      `}
      render={data => (
        <div className="text-main-text text-center transition-all duration-500 min-h-screen m-2 sm:mx-4 md:mx-10 lg:mx-16 xl:mx-20 xxl:mx-24">
          <Seo seo={seo} />

          <div className="mb-24">
            <Header />
          </div>

          <main>{children}</main>

          <Footer />
          <div className="">
            <ScrollUpButton
              StopPosition={0}
              ShowAtPosition={150}
              EasingType="easeOutCubic"
              AnimationDuration={500}
              ContainerClassName="ScrollUpButton__Container"
              TransitionClassName="ScrollUpButton__Toggled"
              style={{}}
              ToggledStyle={{}}
            />
          </div>
        </div>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
