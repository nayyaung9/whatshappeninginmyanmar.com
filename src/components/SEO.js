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
      <link rel="icon" href="./favicon.png" />
      <title>{site.siteMetadata.title}</title>

      <meta
        property="og:title"
        content={post ? post.frontmatter.title : "What is happening in Myanmar"}
      />
      <meta
        property="og:description"
        content={post ? post.excerpt : "Once you read it, you have to know everything"}
      />
      <meta
        property="og:image"
        content={post ? post.frontmatter.image : "favicon.png"}
      />
    </Helmet>
  )
}

export default SEO
