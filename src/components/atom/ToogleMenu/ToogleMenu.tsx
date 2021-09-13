import React, { useState } from "react"
import { motion } from "framer-motion"
import "../../../assets/styles/index.scss"
import { graphql, StaticQuery } from "gatsby"
import { Link } from "gatsby"
import ElectronicsCategoryHover from "./ElectronicsCategoryHover"
import EcoFriendlyCategoryHover from "./EcoFriendlyCategoryHover"
import HomeDecorCategoryHover from "./HomeDecorCategoryHover"
import PortableCategoryHover from "./PortableCategoryHover"
import HatKeCategoryHover from "./HatKeCategoryHover"

const Path = props => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="currentColor"
    strokeLinecap="round"
    {...props}
  />
)

const MenuButton1 = ({ onClick, isOpen }) => {
  return (
    <motion.button
      className="menu-button"
      onClick={onClick}
      animate={isOpen ? "open" : "closed"}
      initial={false}
    >
      <svg
        width="23"
        height="23"
        style={{ margin: "4px 0 0 2px" }}
        viewBox="0 0 23 23"
      >
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </motion.button>
  )
}

const leftMenu = ["1", "2", "3", "4", "5", "6"]
const rightMenu = ["1", "2", "3", "4", "5", "6"]

const slideVerticalAnimation = {
  open: {
    rotateX: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      mass: 0.8,
      type: "spring",
    },
    display: "block",
  },
  close: {
    rotateX: -15,
    y: -330,
    opacity: 0,
    transition: {
      duration: 0.3,
    },
    transitionEnd: {
      display: "none",
    },
  },
}

const slideHorizontalAnimation = {
  left: {
    x: -30,
    transition: {
      duration: 0.3,
    },
  },
  right: {
    x: -310,
    transition: {
      duration: 0.3,
    },
  },
}

export const ToogleMenu = () => {
  const [isOpen, toggleDropdown] = useState(false)
  const [isLeftMenu, toggleMenu] = useState(false)
  const leftMenuHeight = (leftMenu.length + 1) * 70
  const rightMenuHeight = (rightMenu.length + 1) * 70
  const height = isLeftMenu ? leftMenuHeight : rightMenuHeight

  return (
    <div className="wrapper">
      <MenuButton1 onClick={() => toggleDropdown(!isOpen)} isOpen={isOpen} />

      <motion.div
        className="dropdown-container"
        style={{ height }}
        initial="close"
        animate={isOpen ? "open" : "close"}
        variants={slideVerticalAnimation}
      >
        <motion.div
          className="dropdown"
          initial="left"
          animate={isLeftMenu ? "left" : "right"}
          variants={slideHorizontalAnimation}
        >
          <motion.div className="menu menu-categories">
            <h4 onClick={() => toggleMenu(!isLeftMenu)}>Navigate To &#8594;</h4>
            <ul className="item-list">
              <StaticQuery
                query={MonthsSpecialQuery}
                render={data => {
                  return (
                    <>
                      {data.allStrapiProduct.edges.map(({ node }) => (
                        <li key={node.productID} className="item2">
                          <Link to={`/products/${node.uid}`}>{node.name}</Link>
                        </li>
                      ))}
                    </>
                  )
                }}
              />
            </ul>
          </motion.div>
          <motion.div className="menu menu-sizes">
            <h4 onClick={() => toggleMenu(!isLeftMenu)}>
              {"    "}
              &#8592; Month's Special
            </h4>
            <ul className="item-list">
              <li key="1" className="item">
                <Link to="/ecofriendlyproducts/">
                  <EcoFriendlyCategoryHover />
                </Link>
              </li>
              <li key="2" className="item">
                <Link to="/electronicproducts/">
                  <ElectronicsCategoryHover />
                </Link>
              </li>
              <li key="3" className="item">
                <Link to="/homedecorproducts/">
                  <HomeDecorCategoryHover />
                </Link>
              </li>
              <li key="4" className="item">
                <HatKeCategoryHover />
              </li>
              <li key="5" className="item">
                <PortableCategoryHover />
              </li>
              <li key="6" className="item">
                <a href="https://wa.me/9690806397" target="_blank">
                  Advertise
                </a>
              </li>
              <li key="7" className="item">
                <a href="https://wa.me/9690806397" target="_blank">
                  Sell on Goods Umpire
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

const MonthsSpecialQuery = graphql`
  {
    allStrapiProduct(
      filter: {
        categories: { elemMatch: { name: { eq: "Product Of This Week" } } }
      }
      limit: 4
      sort: { fields: createdAt, order: ASC }
    ) {
      edges {
        node {
          name
          uid
          productID
        }
      }
    }
  }
`
