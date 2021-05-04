import React from "react"
import setupTags from "../utils/setupTags"
import { Link } from "gatsby"

function TagsList({ recipes }) {
  const tagsList = setupTags(recipes)
  return (
    <div className="tag-container">
      <h4>recipes</h4>
      <div className="tags-list">
        {tagsList.map((tag, index) => {
          const [text, count] = tag
          return (
            <Link key={index} to={`/tags/${text}`}>
              {text} ({count})
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default TagsList
