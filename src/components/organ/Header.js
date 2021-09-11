import PropTypes from "prop-types"
import React from "react"
import "../../assets/styles/index.scss"
import { DarkModeSwitch } from "react-toggle-dark-mode"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import GoodsUmpireIcon from "../atom/GoodsUmpireIcon"
import TopHeadline from "../atom/topheadline"
import { ToogleMenu } from "../atom/ToogleMenu/ToogleMenu"
// import { motion } from "framer-motion"

function Header() {
  return (
    <div className="">
      <TopHeadline />
      <div className="">
        <div>
          <ToogleMenu />
        </div>
        <div className="flex flex-row justify-center">
          <GoodsUmpireIcon />
        </div>
        <div className="fixed top-6 right-3 z-50 lg:top-10 xl:top-11 xxl:top-12">
          <ThemeToggler>
            {({ theme, toggleTheme }) => (
              <div>
                <DarkModeSwitch
                  checked={theme === "dark" ? true : false}
                  onChange={() =>
                    theme === "dark"
                      ? toggleTheme("light")
                      : toggleTheme("dark")
                  }
                  size={24}
                />
              </div>
            )}
          </ThemeToggler>
        </div>
      </div>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

// const HatKeProductsQuery = graphql`
//   {
//     allStrapiCategory(filter: { name: { eq: "Hat Ke Products" } }) {
//       edges {
//         node {
//           products {
//             name
//             uid
//           }
//         }
//       }
//     }
//   }
// `
