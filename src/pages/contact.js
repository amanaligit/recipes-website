import React from "react"
import Layout from "../components/Layout"

const Contact = () => {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want to get in touch?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              cumque corrupti magnam culpa dolor illo, enim autem corporis
              deserunt sint!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              harum commodi, cum veritatis ratione dignissimos vitae quasi iure
              ullam sed esse quisquam iusto ea, explicabo perspiciatis nostrum
              odit! Nostrum, explicabo.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              vitae debitis voluptatem dolores reprehenderit omnis quod, ipsum
              cum doloremque sint corrupti beatae praesentium eaque dolorem
              impedit, necessitatibus quam. Sapiente amet nostrum, labore fugit
              libero ratione. Molestiae eveniet a ab ipsum!
            </p>
          </article>
          <article>
            <form className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">Your Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">Your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">Your Message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                Submit
              </button>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export default Contact
