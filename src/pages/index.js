import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"

import { graphql } from "gatsby"

export default function Home({ data }) {
  const posts = data.allMarkdownRemark

  return (
    <Layout>
      {posts &&
        posts.edges.map(({ node }, index) => {
          return (
            <div className="col-md-4" key={index}>
              <div className="post">
                <Link className="post-img" to={node.fields.slug}>
                  <img
                    src={node.frontmatter.image}
                    alt={node.frontmatter.title}
                    style={{ width: 120 }}
                  />
                </Link>
                <div className="post-body">
                  <div className="post-meta">
                    <Link
                      className={`post-category cat-${node.frontmatter.cat}`}
                      to={node.frontmatter.topic}
                    >
                      {node.frontmatter.topic}
                    </Link>
                    <span className="post-date"> {node.frontmatter.date}</span>
                  </div>
                  <h3 className="post-title">
                    <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
                  </h3>
                </div>
              </div>
            </div>
          )
        })}
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
            topic
            slug
            image
            cat
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
