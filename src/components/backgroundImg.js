import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const BackgroundImg = () => {
    const data = useStaticQuery(graphql`
    query {
        placeholderImage: file(relativePath: { eq: "lucas-benjamin-wQLAGv4_OYs.jpg" }) {
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
        width: `100%`,
        top: `0`,
        left: `0`,
        // backgroundPosition: `center`,
        backgroundRepeat: `no-repeat`,
        // backgroundSize: `cover`,
        margin: `0`,
        padding: `0`
        
    }
        
    if (!data?.placeholderImage?.childImageSharp?.fluid) {
        return <div>Picture not found</div>
        }
        
        return <Img style={styles} fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default BackgroundImg;