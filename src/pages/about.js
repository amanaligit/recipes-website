import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

import RecipesList from "../components/RecipesList"

const About = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) => {
  return (
    <Layout>
      <SEO title="About" description="This is about page" />

      <main className="page">
        <section className="about-page">
          <article>
            <h2>Lorem ipsum dolor sit amet consecte, fugiat!</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              amet laborum facere id est possimus, asperiores odit nulla
              repudiandae ducimus!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Praesentium non earum ex quas sint sit nulla? Ratione accusamus
              debitis cupiditate molestias magnam. Dignissimos expedita est
              iusto hic iure ullam ratione praesentium debitis libero?
            </p>
            <Link to="/contact" className="btn">
              Contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="Person Pouring salt in bowl"
            className="about-img"
            placeholder="tracedSVG"
          ></StaticImage>
        </section>
        <section className="featured-recipes">
          <h5>Look at this Awesomesouce!</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

export default About
