import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import RecipesList from "../components/RecipesList"

function TagTemplate({ data, pageContext }) {
  const recipes = data.allContentfulRecipe.nodes

  return (
    <Layout>
      <SEO title={pageContext.tag} />
      <main className="page">
        <div className="tag-recipes">
          <RecipesList recipes={recipes} />
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query GetRecipesByTag($tag: String) {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { content: { tags: { eq: $tag } } }
    ) {
      nodes {
        title
        id
        prepTime
        cookTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

export default TagTemplate
