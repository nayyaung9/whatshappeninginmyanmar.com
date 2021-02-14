import React from "react"
import SEO from "../components/SEO"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import { Typography } from "@material-ui/core"
import { graphql } from "gatsby"

export default function Home({ data }) {
  const posts = data.allMarkdownRemark

  return (
    <Layout>
      <SEO />
      <h3 className="text-center">What is happening in Myanmar?</h3>
      <img
        src="https://ichef.bbci.co.uk/live-experience/cps/1680/cpsprodpb/32C1/production/_116939921_149979763_181155617133555_3277602999116746358_n.jpg"
        alt="banner"
        style={{ width: "100%" }}
      />
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <h4>Recent News</h4>
        <div className="post__container">
          {posts &&
            posts.edges.map(({ node }, index) => {
              return (
                <article className="post__article" key={index}>
                  <Link to={node.fields.slug}>
                    <img
                      src={node.frontmatter.image}
                      alt={node.frontmatter.title}
                      style={{ width: "100%" }}
                    />
                  </Link>
                  <div className="post__body">
                    <h4 className="post__title">
                      <Link to={node.fields.slug}>
                        {node.frontmatter.title}
                      </Link>
                    </h4>
                    <span className="post-date">{node.frontmatter.date}</span>
                  </div>
                </article>
              )
            })}
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            slug
            image
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
