import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const BackgroundImg = () => {
    const data = useStaticQuery(graphql`
    query {
        placeholderImage: file(relativePath: { eq: "laptop-on-desk.jpg" }) {
        childImageSharp {
            fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
            }
        }
        }
    }
`)

    const styles = {
        position: `absolute`,
        width: `100%`,
        top: `6%`,
        left: `0`,
        
    }
        
    if (!data?.placeholderImage?.childImageSharp?.fluid) {
        return <div>Picture not found</div>
        }
        
        return <Img style={styles} fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default BackgroundImg;