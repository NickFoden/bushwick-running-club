import React from "react"

import About from "../components/About"
import Body from "../components/Body"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Welcome from "../components/Welcome"
import WelcomeImage from "../components/WelcomeImage"

const IndexPage = () => (
  <Layout>
    <SEO title="Bushwick Running Club" />
    <Welcome />
    <WelcomeImage />
    <Body />
    <About />
  </Layout>
)

export default IndexPage
