import React from "react"
import { FaFacebook, FaInstagram } from "react-icons/fa"
import { SiGmail } from "react-icons/si"
import "../../assets/styles/index.scss"
import GoodsUmpireIcon from "../atom/GoodsUmpireIcon"
import { Link } from "gatsby"
import AnchorLink from "react-anchor-link-smooth-scroll"

function Footer() {
  return (
    <footer className="footer bg-gray-900 relative pt-2 border-b-2 border-blue-700 pt-5">
      <div className="md:px-4 lg:px-4 xl:py-8 xxl:py-10">
        <div className="flex flex-row justify-center">
          <GoodsUmpireIcon />
        </div>
        <div className="my-8 md:mx-6 lg:mx-8 xl:mx-10 xxl:mx-12">
          <div className="justify-between flex flex-col md:flex-row lg:flex-row xl:flex-row xxl:flex-row justify-between">
            <div className="flex flex-col">
              <span className="text-xl lg:text-2xl xl:text-3xl xxl:4xl font-bold text-gray-600 uppercase mb-2">
                Hello Mate!
              </span>
              <span className="my-2">
                <Link
                  to="/"
                  className="text-blue-700 text-md lg:text-xl xl:text-2xl xxl:3xl hover:text-blue-500"
                >
                  Home
                </Link>
              </span>
              <span className="my-2">
                <div className="cursor-pointer text-blue-700 text-md lg:text-xl xl:text-2xl xxl:3xl hover:text-blue-500">
                  <AnchorLink id="MonthsSpecial">Month's Special</AnchorLink>
                </div>
              </span>
              <span className="my-2">
                <div className="cursor-pointer text-blue-700 text-md lg:text-xl xl:text-2xl xxl:3xl hover:text-blue-500">
                  <AnchorLink id="EcoFriendly">Eco Friendly</AnchorLink>
                </div>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-600 uppercase mt-4 text-lg lg:text-xl xl:text-2xl xxl:3xl mb-2 ">
                Popular Products
              </span>
              <span className="my-2">
                <div className="cursor-pointer text-blue-700 text-md lg:text-xl xl:text-2xl xxl:3xl hover:text-blue-500">
                  <AnchorLink href="#HatKeProducts">Hat Ke Products</AnchorLink>
                </div>
              </span>
              <span className="my-2">
                <div className="text-blue-700 text-md lg:text-xl xl:text-2xl xxl:3xl hover:text-blue-500">
                  <AnchorLink href="#TopKnotchProducts">
                    Top Knotch Quality
                  </AnchorLink>
                </div>
              </span>
              <span className="my-2">
                <div className="text-blue-700 text-md lg:text-xl xl:text-2xl xxl:3xl hover:text-blue-500">
                  <AnchorLink href="#PortableProducts">
                    Portable Products
                  </AnchorLink>
                </div>
              </span>
            </div>
            <div className="flex flex-col content-center items-center">
              <span className="font-bold text-gray-600 uppercase mt-4 mb-2 text-lg lg:text-xl xl:text-2xl xxl:3xl">
                Social Media
              </span>
              <span className="my-2">
                <a
                  href="https://gmail.com"
                  className="text-blue-700 text-md lg:text-xl xl:text-2xl xxl:3xl hover:text-blue-500"
                  target="_blank"
                >
                  <SiGmail className="twitter-icon" size="2em" />
                </a>
              </span>
              <span className="my-2">
                <a
                  href="https://facebook.com"
                  className="text-blue-700 text-md lg:text-xl xl:text-2xl xxl:3xl hover:text-blue-500"
                  target="_blank"
                >
                  <FaFacebook className="facebook-icon" size="2em" />
                </a>
              </span>
              <span className="my-2">
                <a
                  href="https://instagram.com"
                  className="text-blue-700 text-md lg:text-xl xl:text-2xl xxl:3xl hover:text-blue-500"
                  target="_blank"
                >
                  <FaInstagram className="instagram-icon" size="2em" />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="px-6">
        <div className="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
          <div className="text-center py-6">
            <p className="text-sm text-blue-700 font-bold mb-2">
              © 2021 by GOODS UMPIRE
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
