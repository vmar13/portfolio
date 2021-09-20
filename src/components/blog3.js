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

const Blog3 = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "philippe-d-uxnWliBKBkg-unsplash.jpg" }) {
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
    top: `25%`,
    left: `35%`,
    width: `310px`,
    height: `250px`,
    marginLeft: `18%`, 
    marginRight: `41%`,
    border: `solid green 5px`
  }

  const linkStyles = {
    position: `fixed`,
    top: `95%`,
    width: `310px`,
    height: `250px`,
    marginLeft: `18%`, 
    marginRight: `41%`
  }

  if (!data?.placeholderImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return (
    <>
  <Img style={styles} fluid={data.placeholderImage.childImageSharp.fluid} />
  <a href='https://vmar76.medium.com/using-css-animations-to-visualize-breathing-techniques-7a20ee0aed5a' style={linkStyles}>Using CSS Animations to Visualize Breathing Techniques</a>
  </>
  )
}

export default Blog3;