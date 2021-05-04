import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

export const query = graphql`
  {
    allFile(filter: { extension: { ne: "svg" } }) {
      totalCount
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            placeholder: BLURRED
            width: 200
            height: 200
          )
        }
      }
    }
  }
`

function Gallery() {
  const data = useStaticQuery(query)
  const nodes = data.allFile.nodes

  return (
    <Wrapper>
      {nodes.map((image, index) => {
        const { name } = image
        return (
          <article key={index} className="item">
            <GatsbyImage image={getImage(image)} className="gallery-img" />
            <p>{name}</p>
          </article>
        )
      })}
      <div>
        <h2>Simple image gallery</h2>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  .item {
    margin-right: 1rem;
  }
  .gallery-img {
    border-radius: 1rem;
  }
`

export default Gallery
