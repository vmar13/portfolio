import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Vanessa Martinez, Full Stack Developer</h1>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <button><Link to="/about/">About</Link></button> <br />
    <button><Link to="/projects/">Projects</Link></button> <br />
    <button><Link to="/resume/">Resume</Link></button> <br />

  </Layout>
)

export default IndexPage
