import React from "react"
import { graphql, StaticQuery } from "gatsby"
import "../../../assets/styles/index.scss"
import { Link } from "gatsby"

function HomeDecorCategoryHover() {
  const CategoriesHover = graphql`
    query {
      allStrapiProduct(
        filter: { categories: { elemMatch: { name: { eq: "Home Decor" } } } }
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

  return (
    <div className="inline-block relative group z-20">
      <div className="font-semibold px-4 py-1 rounded inline-flex items-center">
        Home Decor Products
      </div>
      <div className="w-96 absolute hidden bg-white text-black -ml-3 -mt-2 group-hover:block z-20">
        <StaticQuery
          query={CategoriesHover}
          render={data => {
            return (
              <>
                {data.allStrapiProduct.edges.map(({ node }) => (
                  <div key={node.productID}>
                    <div className="hover:bg-black hover:text-white text-xs z-40 my-1">
                      <Link to={`/products/${node.uid}`}>{node.name}</Link>
                    </div>
                  </div>
                ))}
              </>
            )
          }}
        />
      </div>
    </div>
  )
}

export default HomeDecorCategoryHover
