import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

function Images() {
  return (
    <Wrapper>
      <article>
        <h4>constrained/default</h4>
        <StaticImage
          src="../assets/images/recipe-1.jpeg"
          alt="food"
          placeholder="tracedSVG"
          layout="constrained"
          className="example-img"
          as="section"
        />
      </article>
      <article>
        <h4>fixed/default</h4>
        <StaticImage
          src="../assets/images/recipe-1.jpeg"
          alt="food"
          placeholder="blurred"
          layout="fullWidth"
          className="example-img"
          as="section"
        />
      </article>
      <article>
        <h4>fixed/default</h4>
        <StaticImage
          src="../assets/images/recipe-1.jpeg"
          alt="food"
          placeholder="blurred"
          layout="fixed"
          width={200}
          className="example-img"
          as="section"
        />
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 70vw;
  margin: 0 auto;
  display: grid;
  text-align: center;
  article {
    border: 2px solid red;
  }
  .example-img {
    border-radius: 1rem;
    height: 300;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

export default Images
