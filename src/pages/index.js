import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className='name'>Vanessa Martinez</h1>
    <h2 className='job-title'>Full Stack Developer</h2>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>

    <div className='home-nav-container'>
      <button className='home-nav-btn'><Link to="/about/">About</Link></button> 
      <button className='home-nav-btn'><Link to="/projects/">Projects</Link></button> 
      <button className='home-nav-btn'><Link to="/resume/">Resume</Link></button> 
    </div>
  </Layout>
)

export default IndexPage
