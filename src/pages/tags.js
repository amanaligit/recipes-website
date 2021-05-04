import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import setupTags from "../utils/setupTags"

const Tags = ({ data }) => {
  const tags = setupTags(data.allContentfulRecipe.nodes)
  return (
    <Layout>
      <main className="page">
        <section className="tags-page">
          {tags.map((tag, index) => {
            const [text, count] = tag
            return (
              <Link key={index} className="tag" to={text}>
                <h5>{text}</h5>
                <p>{count} recipes</p>
              </Link>
            )
          })}
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`

export default Tags
