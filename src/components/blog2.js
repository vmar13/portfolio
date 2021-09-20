import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.com/docs/use-static-query/
 */

const Blog2 = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "breathing-technique.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const styles = {
    position: `fixed`,
    top: `65%`,
    width: `310px`,
    height: `250px`,
    marginLeft: `18%`, 
    marginRight: `41%`,
    border: `solid green 5px`
  }

  const linkStyles = {
    position: `fixed`,
    top: `60%`,
    width: `310px`,
    height: `250px`,
    marginLeft: `53%`, 
    marginRight: `41%`
  }

  if (!data?.placeholderImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return (
    <>
      <Img style={styles} fluid={data.placeholderImage.childImageSharp.fluid} />
      <a href='https://vmar76.medium.com/how-to-unroll-a-matrix-array-c75f0a3a8c83' style={linkStyles}>How to Unroll a Matrix Array</a>
    </>
  )
}

export default Blog2;