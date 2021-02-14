import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ post }) => {
  const { site } = useStaticQuery(graphql`
    query SEO {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <link rel="icon" href="favicon.jpg" />
      <title>{site.siteMetadata.title}</title>

      <meta
        property="og:title"
        content={post ? post.frontmatter.title : "Get X"}
      />
      <meta
        property="og:description"
        content={post ? post.excerpt : "အထွေထွေ ဗဟုသုတ စုစည်းရာ"}
      />
      <meta
        property="og:image"
        content={post ? post.frontmatter.image : "favicon.jpg"}
      />
    </Helmet>
  )
}

export default SEO
