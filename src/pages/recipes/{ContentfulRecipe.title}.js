import { graphql, Link } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import { BsClock, BsClockHistory, BsPeople } from "react-icons/bs"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"

function RecipeTemplate({ data }) {
  const {
    title,
    cookTime,
    content,
    prepTime,
    servings,
    description: { description },
    image,
  } = data.contentfulRecipe
  const { ingredients, instructions, tags, tools } = content
  const pathToImage = getImage(image)
  return (
    <Layout>
      <SEO title={title} description={description} />
      <main className="page">
        <div className="recipe-page">
          <section className="recipe-hero">
            <GatsbyImage
              image={pathToImage}
              alt="title"
              className="about-img"
            />
            <article className="recipe-info">
              <h2>{title}</h2>
              <p>{description}</p>
              <div className="recipe-icons">
                <article>
                  <BsClock />
                  <h5>Prep Time</h5>
                  <div>{prepTime} min.</div>
                </article>
                <article>
                  <BsClockHistory />
                  <h5>Cook Time</h5>
                  <div>{cookTime} min.</div>
                </article>
                <article>
                  <BsPeople />
                  <h5>Servings</h5>
                  <div>{servings}</div>
                </article>
              </div>

              <p className="recipe-tags">
                Tags:{" "}
                {tags.map((tag, index) => (
                  <Link to={`/tags/${tag}`} key={index}>
                    {tag}
                  </Link>
                ))}
              </p>
            </article>
          </section>
          <section className="recipe-content">
            <article>
              <h4>Instructions</h4>
              {instructions.map((item, index) => (
                <div className="single-instruction" key={index}>
                  <header>
                    <p>Step {index + 1}</p>
                    <div></div>
                  </header>
                  <p>{item}</p>
                </div>
              ))}
            </article>
            <article className="second-column">
              <div>
                <h4>Ingredients</h4>
                {ingredients.map((item, index) => (
                  <p className="single-ingredient" key={index}>
                    {item}
                  </p>
                ))}
              </div>
              <div>
                <h4>Tools</h4>
                {tools.map((item, index) => (
                  <p className="single-ingredient" key={index}>
                    {item}
                  </p>
                ))}
              </div>
            </article>
          </section>
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query getSingleRecipe($title: String) {
    contentfulRecipe(title: { eq: $title }) {
      title
      cookTime
      prepTime
      servings
      content {
        ingredients
        instructions
        tags
        tools
      }
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
      description {
        description
      }
    }
  }
`

export default RecipeTemplate
