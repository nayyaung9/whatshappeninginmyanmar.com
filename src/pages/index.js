import React from "react"
import SEO from "../components/SEO"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import { Container } from "@material-ui/core"
import { graphql } from "gatsby"

export default function Home({ data }) {
  const posts = data.allMarkdownRemark

  return (
    <Layout>
      <SEO />
      <div className="app_banner" />
      <Container>
        <div style={{ maxWidth: "1400px", margin: "0 auto", marginTop: 80 }}>
          <h3>Recent News</h3>
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
      </Container>
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
