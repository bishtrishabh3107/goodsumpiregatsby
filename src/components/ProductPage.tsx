import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Carousel } from "react-responsive-carousel"
import ReactMarkdown from "react-markdown"
import { ImAmazon } from "react-icons/Im"
import { HiOutlineBackspace } from "react-icons/hi"
import { Link } from "gatsby"
import { Progress } from "@chakra-ui/react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { motion } from "framer-motion"

function ProductPage({
  name,
  image1,
  image2,
  image3,
  description,
  rating1,
  rating2,
  rating3,
  amazon_price,
  amazon_link,
  date,
  description_short,
  AO_Name,
  AO_Price,
  AO_Link,
  AO_Description,
  AO_image_Child,
}) {
  const transition = {
    duration: 0.6,
    ease: [0.43, 0.13, 0.23, 0.96],
  }

  const imageVariants = {
    initial: { y: "50%", opacity: 0, transition },
    exit: { y: "50%", opacity: 0, transition },
    enter: { y: "0%", opacity: 1, transition },
  }

  const backVariants = {
    initial: { x: 0, opacity: 1, transition: { delay: 0.5, ...transition } },
    exit: { x: 100, opacity: 0, transition },
    enter: { x: 0, opacity: 1, transition: { delay: 0.5, ...transition } },
  }

  return (
    <div>
      <div className="grid md:grid-cols-2 py-2 xl:py-2 2xl:py-5 2xl:px-8 border-2 lg:border-4 xl:border-8 xxl:border-8 border-indigo-600 divide-x divide-blue-400 shadow-lg shadow-inner sm:grid-cols-1">
        <div>
          <div className="product-name-font uppercase text-lg xl:text-xl 2xl:text-6xl font-bold md:mt-6 lg:mt-6 xl:mt-6 xxl:mt-6">
            <h1>{name}</h1>
          </div>

          <motion.div
            className="-mt-20 md:-mt-16 lg:-mt-16 xl:-mt-16 2xl:-mt-16 m-4 md:m-6 lg:m-8 xl:m-10 2xl:m-12"
            initial="initial"
            animate="enter"
            exit="exit"
          >
            <motion.div variants={imageVariants}>
              <Carousel
                autoPlay={true}
                swipeable={true}
                showArrows={false}
                infiniteLoop={true}
                showIndicators={false}
                showStatus={false}
                interval={4000}
                showThumbs={false}
              >
                <div>
                  <a href={`${amazon_link}`} target="_blank">
                    <GatsbyImage image={getImage(image1)} alt={name} />
                  </a>
                </div>
                <div>
                  <a href={`${amazon_link}`} target="_blank">
                    <GatsbyImage image={getImage(image2)} alt={name} />
                  </a>
                </div>
                <div>
                  <a href={`${amazon_link}`} target="_blank">
                    <GatsbyImage image={getImage(image3)} alt={name} />
                  </a>
                </div>
              </Carousel>
              <h1 className="my-3 text-xs lg:text-md xl:text-md 2xl:text-3xl 2xl:mt-5">
                {description_short}
              </h1>
            </motion.div>
          </motion.div>
        </div>
        <motion.div initial="exit" animate="enter" exit="exit">
          <motion.div variants={backVariants}>
            <div className="px-3 font-bold py-1 md:py-2 lg:py-4 xl:py-5 2xl:py-6">
              <div>
                <h1 className="mb-3 text-2xl md:-mt-3 lg:-mt-1 xl:-mt-1 2xl:-mt-1 2xl:text-4xl">
                  <Link to="/">
                    <HiOutlineBackspace />
                  </Link>
                </h1>
                <h1 className="product-description-font text-left lg:text-md xl:text-md 2xl:text-3xl mt-2 2xl:mt-4">
                  <ReactMarkdown>{description}</ReactMarkdown>
                </h1>
              </div>
              <div className="mt-4 text-left text-xs lg:text-md xl:text-md 2xl:text-3xl">
                <h1>Popularity:</h1>
                <div className="xl:mt-2 2xl:mt-4">
                  <Progress colorScheme="yellow" size="sm" value={rating1} />
                </div>
              </div>
              <div className="mt-2 text-left text-xs lg:text-md xl:text-md 2xl:text-3xl">
                <h1>Usefullness: </h1>
                <div className="xl:mt-2 2xl:mt-4">
                  <Progress colorScheme="blue" size="sm" value={rating2} />
                </div>
              </div>
              <div className="mt-2 text-left text-xs lg:text-md xl:text-md 2xl:text-3xl">
                <h1>Buyability:</h1>
                <div className="xl:mt-2 2xl:mt-4">
                  <Progress colorScheme="green" size="sm" value={rating3} />
                </div>
              </div>
              <div className="flex flex-row justify-evenly mt-4">
                <div className="flex flex-row text-xs lg:text-md xl:text-md 2xl:text-3xl">
                  <h1>Approx. ₹ on Amazon:</h1>
                  <div className="mx-1 text-green-400">₹ {amazon_price}</div>
                </div>
                <div className="flex flex-row text-xs lg:text-md xl:text-md 2xl:text-3xl">
                  <h1>Buy From:</h1>
                  <div className="m-1 mx-2 2xl:mx-4 text-yellow-500 text-xs lg:text-md xl:text-md 2xl:text-3xl">
                    <a href={`${amazon_link}`} target="_blank">
                      <ImAmazon />
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-5 text-xs lg:text-md xl:text-md 2xl:text-3xl">
                <h1>Published On: {date} </h1>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="m-4 p-2 mt-4 border-2 border-blue-600 shadow-lg shadow-inner">
        <h1 className="flex flex-row justify-center border-b-2 border-blue-500 goodsumpire-font uppercase font-extrabold text-sm lg:text-lg xl:text-xl 2xl:text-5xl mb-3 md:mb-4 lg:mb-5 xl:mb-8 2xl:mb-10">
          ALTERNATE OPTION
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 divide-x divide-blue-400">
          <div className="">
            <div className="product-name-font uppercase text-lg xl:text-xl 2xl:text-5xl font-bold md:mt-6 lg:mt-6 xl:mt-6 2xl:mt-8 2xl:mb-6">
              <h1>{AO_Name}</h1>
            </div>
            <div className="m-4 md:m-6 lg:m-8 xl:m-10 2xl:m-12">
              <a href={`${AO_Link}`} target="_blank">
                <GatsbyImage image={getImage(AO_image_Child)} alt={AO_Name} />
              </a>
            </div>
            <h1 className="my-3 text-xs lg:text-md xl:text-md 2xl:text-3xl 2xl:mt-4">
              {description_short}
            </h1>
          </div>
          <div className="pl-2 font-bold py-1 md:py-2 lg:py-4 xl:py-5 xxl:py-6">
            <h1 className="mb-2 md:mb-3 lg:mb-5 xl:mb-8 xxl:mb-10 text-2xl 2xl:text-4xl">
              <Link to="/">
                <HiOutlineBackspace />
              </Link>
            </h1>
            <h1 className="product-description-font text-left lg:text-md xl:text-md 2xl:text-3xl mb-3 md:mb-4 lg:mb-5 xl:mb-8 2xl:mb-10">
              <ReactMarkdown>{AO_Description}</ReactMarkdown>
            </h1>
            <div className="mt-4 mx-2 2xl:px-6">
              <div className="flex flex-row justify-evenly text-xs lg:text-md xl:text-md 2xl:text-3xl mb-3 md:mb-4 lg:mb-5 xl:mb-8 2xl:mb-10">
                <h1>Approx. ₹ on Amazon:</h1>
                <div className="mx-1 text-green-400">₹ {AO_Price}</div>
              </div>
              <div className="flex flex-row justify-evenly text-xs lg:text-md xl:text-md 2xl:text-3xl mb-3 md:mb-4 lg:mb-5 xl:mb-8 2xl:mb-10">
                <h1>Buy From:</h1>
                <div className="mx-2 text-yellow-500 text-md lg:text-md xl:text-md 2xl:text-3xl">
                  <a href={`${AO_Link}`} target="_blank">
                    <ImAmazon />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
