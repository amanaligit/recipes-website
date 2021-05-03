import { StaticImage } from "gatsby-plugin-image"
import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/Layout"
import FetchData from "../examples/fetchData"

export default function Home() {
  return (
    <>
      <Layout>
        <FetchData />
        <main className="page">
          <header className="hero">
            <StaticImage
              src="../assets/images/main.jpeg"
              alt="eggs"
              className="hero-img"
              placeholder="tracedSVG"
              layout="fullWidth"
            ></StaticImage>
            <div className="hero-container">
              <div className="hero-text">
                <h1>Simply Recipes</h1>
                <h4>No flugg, Just Recipes</h4>
              </div>
            </div>
          </header>
        </main>
        <h1>Home Page</h1>
      </Layout>
    </>
  )
}
