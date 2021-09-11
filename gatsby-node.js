const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

exports.createResolvers = ({
  actions,
  cache,
  createNodeId,
  createResolvers,
  store,
}) => {
  const { createNode } = actions

  createResolvers({
    StrapiProduct: {
      image1_Child: {
        type: `File`,
        resolve(source, args, context, info) {
          return createRemoteFileNode({
            url: `${source.image1.url}`,
            store,
            cache,
            createNode,
            createNodeId,
          })
        },
      },
    },
  })
  createResolvers({
    StrapiProduct: {
      image2_Child: {
        type: `File`,
        resolve(source, args, context, info) {
          return createRemoteFileNode({
            url: `${source.image2.url}`,
            store,
            cache,
            createNode,
            createNodeId,
          })
        },
      },
    },
  })
  createResolvers({
    StrapiProduct: {
      image3_Child: {
        type: `File`,
        resolve(source, args, context, info) {
          return createRemoteFileNode({
            url: `${source.image3.url}`,
            store,
            cache,
            createNode,
            createNodeId,
          })
        },
      },
    },
  })
  createResolvers({
    StrapiProduct: {
      AO_image_Child: {
        type: `File`,
        resolve(source, args, context, info) {
          return createRemoteFileNode({
            url: `${source.AO_Image.url}`,
            store,
            cache,
            createNode,
            createNodeId,
          })
        },
      },
    },
  })
}

const { slugify } = require("./src/assets/utilityFunctions")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(
    `
      {
        products: allStrapiProduct {
          edges {
            node {
              id
              uid
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  const products = result.data.products.edges

  const ProductTemplate = require.resolve("./src/templates/productTemplate.tsx")

  products.forEach((product, index) => {
    createPage({
      path: `/products/${slugify(product.node.uid)}`,
      component: ProductTemplate,
      context: {
        productuid: product.node.uid,
      },
    })
  })
}
