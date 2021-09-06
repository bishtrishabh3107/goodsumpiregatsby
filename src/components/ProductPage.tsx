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
      <div className="grid md:grid-cols-2 py-4 xl:py-8 xxl:py-8 border-2 lg:border-4 xl:border-8 xxl:border-8 border-indigo-600 divide-x divide-blue-400 shadow-lg shadow-inner sm:grid-cols-1">
        <div>
          <div className="product-name-font uppercase text-lg xl:text-3xl xxl:text-9xl font-bold md:mt-6 lg:mt-6 xl:mt-6 xxl:mt-6">
            <h1>{name}</h1>
          </div>

          <motion.div
            className="-mt-20 md:-mt-16 lg:-mt-16 xl:-mt-16 xxl:-mt-16 mx-2"
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
            </motion.div>
          </motion.div>
        </div>
        <motion.div initial="exit" animate="enter" exit="exit">
          <motion.div variants={backVariants}>
            <div className="px-5 font-bold py-5">
              <div className="product-description-font text-left lg:text-lg xl:text-xl xxl:text-2xl">
                <h1 className="mb-3 text-2xl -mt-3">
                  <Link to="/">
                    <HiOutlineBackspace />
                  </Link>
                </h1>
                <h1>
                  <ReactMarkdown>{description}</ReactMarkdown>
                </h1>
              </div>
              <div className="mt-4 text-left text-xs lg:text-lg xl:text-xl xxl:text-2xl">
                <h1>Popularity:</h1>
                <div className="">
                  <Progress colorScheme="yellow" size="sm" value={rating1} />
                </div>
              </div>
              <div className="mt-2 text-left text-xs lg:text-lg xl:text-xl xxl:text-2xl">
                <h1>Usefullness: </h1>
                <Progress colorScheme="blue" size="sm" value={rating2} />
              </div>
              <div className="mt-2 text-left text-xs lg:text-lg xl:text-xl xxl:text-2xl">
                <h1>Buyability:</h1>
                <Progress colorScheme="green" size="sm" value={rating3} />
              </div>
              <div className="flex flex-row justify-evenly mt-4">
                <div className="flex flex-row text-xs lg:text-lg xl:text-xl xxl:text-2xl">
                  <h1>Approx. ₹ on Amazon:</h1>
                  <div className="mx-1 text-green-400">₹ {amazon_price}</div>
                </div>
                <div className="flex flex-row text-xs lg:text-lg xl:text-xl xxl:text-2xl">
                  <h1>Buy From:</h1>
                  <div className="m-1 mx-2 text-yellow-500 text-xs lg:text-lg xl:text-xl xxl:text-2xl">
                    <a href={`${amazon_link}`} target="_blank">
                      <ImAmazon />
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-5 text-xs lg:text-lg xl:text-xl xxl:text-2xl">
                <h1>Published On: {date} </h1>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default ProductPage
