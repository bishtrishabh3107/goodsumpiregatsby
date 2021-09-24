import React from "react"
import { graphql, StaticQuery } from "gatsby"
import "../../../assets/styles/index.scss"
import { Link } from "gatsby"

function ThisFestivalCategoryHover() {
  const CategoriesHover = graphql`
    query {
      allStrapiProduct(
        filter: {
          categories: { elemMatch: { name: { eq: "This Festival Seasons" } } }
        }
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
    <div className="inline-block relative group">
      <div className="font-semibold px-4 py-1 rounded inline-flex items-center">
        This Festival
      </div>
      <div className="w-80 absolute hidden bg-blue-600 text-white -ml-3 px-1 group-hover:block z-100">
        <StaticQuery
          query={CategoriesHover}
          render={data => {
            return (
              <>
                {data.allStrapiProduct.edges.map(({ node }) => (
                  <div key={node.productID}>
                    <div className="hover:bg-black hover:text-white text-xs z-100 my-1">
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

export default ThisFestivalCategoryHover