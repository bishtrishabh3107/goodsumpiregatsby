import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ seo = {} }) => {
  const { strapiGlobal } = useStaticQuery(query)
  const { defaultSeo, siteName, favicon } = strapiGlobal

  // Merge default and page-specific SEO values
  const fullSeo = { ...defaultSeo, ...seo }

  const getMetaTags = () => {
    const tags = []

    if (fullSeo.metaTitle) {
      tags.push(
        {
          name: "title",
          content: fullSeo.metaTitle,
        }
        // {
        //   property: 'og:title',
        //   content: fullSeo.metaTitle,
        // },
        // {
        //   name: 'twitter:title',
        //   content: fullSeo.metaTitle,
        // }
      )
    }
    if (fullSeo.metaDescription) {
      tags.push(
        {
          name: "description",
          content: fullSeo.metaDescription,
        }
        // {
        //   property: 'og:description',
        //   content: fullSeo.metaDescription,
        // },
        // {
        //   name: 'twitter:description',
        //   content: fullSeo.metaDescription,
        // }
      )
    }
    if (fullSeo.keyword1) {
      tags.push({
        name: "keyword",
        content: fullSeo.keyword1,
      })
    }
    if (fullSeo.keyword2) {
      tags.push({
        name: "keyword",
        content: fullSeo.keyword2,
      })
    }
    if (fullSeo.keyword3) {
      tags.push({
        name: "keyword",
        content: fullSeo.keyword3,
      })
    }
    if (fullSeo.keyword4) {
      tags.push({
        name: "keyword",
        content: fullSeo.keyword4,
      })
    }
    if (fullSeo.keyword5) {
      tags.push({
        name: "keyword",
        content: fullSeo.keyword5,
      })
    }
    if (fullSeo.keyword6) {
      tags.push({
        name: "keyword",
        content: fullSeo.keyword6,
      })
    }
    if (fullSeo.keyword7) {
      tags.push({
        name: "keyword",
        content: fullSeo.keyword7,
      })
    }
    if (fullSeo.keyword8) {
      tags.push({
        name: "keyword",
        content: fullSeo.keyword8,
      })
    }
    if (fullSeo.keyword9) {
      tags.push({
        name: "keyword",
        content: fullSeo.keyword9,
      })
    }
    if (fullSeo.keyword10) {
      tags.push({
        name: "keyword",
        content: fullSeo.keyword10,
      })
    }
    if (fullSeo.keyword11) {
      tags.push({
        name: "keyword",
        content: fullSeo.keyword11,
      })
    }
    if (fullSeo.keyword12) {
      tags.push({
        name: "keyword",
        content: fullSeo.keyword12,
      })
    }
    if (fullSeo.keyword13) {
      tags.push({
        name: "keyword",
        content: fullSeo.keyword13,
      })
    }
    if (fullSeo.keyword14) {
      tags.push({
        name: "keyword",
        content: fullSeo.keyword14,
      })
    }
    if (fullSeo.keyword15) {
      tags.push({
        name: "keyword",
        content: fullSeo.keyword15,
      })
    }
    if (fullSeo.shareImage) {
      const imageUrl =
        (process.env.GATSBY_ROOT_URL || "http://localhost:8000") +
        fullSeo.shareImage.publicURL
      tags.push(
        {
          name: "image",
          content: imageUrl,
        }
        // {
        //   property: 'og:image',
        //   content: imageUrl,
        // },
        // {
        //   name: 'twitter:image',
        //   content: imageUrl,
        // }
      )
    }
    if (fullSeo.product) {
      tags.push({
        property: "og:type",
        content: "product",
      })
    }
    tags.push({ name: "twitter:card", content: "summary_large_image" })
    return tags
  }

  const metaTags = getMetaTags()

  return (
    <div>
      <Helmet
        title={fullSeo.metaTitle}
        titleTemplate={`${siteName} | %s`}
        link={[
          {
            rel: "icon",
            href: favicon.url,
          },
          { rel: "canonical", href: "https://www.goodsumpire.com/" },
        ]}
        meta={metaTags}
      />
    </div>
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keyword1: PropTypes.string,
  keyword2: PropTypes.string,
  keyword3: PropTypes.string,
  keyword4: PropTypes.string,
  keyword5: PropTypes.string,
  keyword6: PropTypes.string,
  keyword7: PropTypes.string,
  keyword8: PropTypes.string,
  keyword9: PropTypes.string,
  keyword10: PropTypes.string,
  keyword11: PropTypes.string,
  keyword12: PropTypes.string,
  keyword13: PropTypes.string,
  keyword14: PropTypes.string,
  keyword15: PropTypes.string,
  image: PropTypes.string,
  product: PropTypes.bool,
}

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  product: false,
}

const query = graphql`
  query {
    strapiGlobal {
      siteName
      favicon {
        url
      }
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
