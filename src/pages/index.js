import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Avatar from "../components/avatar"
import SEO from "../components/seo"
import Navbar from "../components/navbar"
import BackgroundImage from "gatsby-background-image"
import { graphql } from "gatsby"


const IndexPage = (props) => (
  <>
  <Navbar />
  <Layout>
    <SEO title="Home" />

    <BackgroundImage
      className='masthead'
      fluid={props.data.indexImage.childImageSharp.fluid}
    >
      <div className='name-and-title-container'>
        <h1 className='name'>Vanessa Martinez</h1>
        <h2 className='job-title'>Full Stack Developer</h2>
      </div>
    
      <div style={{ 
        maxWidth: `300px`, 
        marginBottom: `1.45rem`, 
        marginLeft: `auto`, 
        marginRight: `auto` }}>
        <Avatar />
      </div>
    </BackgroundImage>
  </Layout>
  </>
)

export default IndexPage;

export const pageQuery = graphql`
    query {
      indexImage: file(relativePath: { eq: "lucas-benjamin-wQLAGv4_OYs.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 6720) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
`;