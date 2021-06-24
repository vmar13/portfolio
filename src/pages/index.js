import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Navbar from "../components/navbar"
import BackgroundImage from "gatsby-background-image"
import { graphql } from "gatsby"


const IndexPage = (props) => (
  <>
  <Navbar />
  <Layout>
    <SEO title="Vanessa Martinez" />

    <BackgroundImage
      className='background-img'
      fluid={props.data.indexImage.childImageSharp.fluid}
    />    
    <div className='name-and-title-container'>
        <h1 className='name'>Vanessa Martinez</h1>
        <h2 className='job-title'>Full Stack Developer</h2>
    </div>
  </Layout>
  </>
)

export default IndexPage;

export const pageQuery = graphql`
    query {
      indexImage: file(relativePath: { eq: "mohammad-rahmani-1bNQVGzuy0U.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 6720) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
`;