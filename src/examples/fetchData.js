import { graphql, useStaticQuery } from "gatsby"
import React from "react"

const getData = graphql`
  query {
    site {
      info: siteMetadata {
        author
        description
        simpleData
        title
        person {
          name
          age
        }
        complexData {
          age
          name
        }
      }
    }
  }
`

const FetchData = () => {
  const data = useStaticQuery(getData)
  return (
    <div>
      <h1>Hello from fetch data</h1>
    </div>
  )
}

export default FetchData
