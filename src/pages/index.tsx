import * as React from "react"

import Landing from "../components/Landing/Landing"
import Seo from "../components/Seo/Seo"

import "../styles.scss"

const IndexPage = (): JSX.Element => (
  <main className="section">
    <Seo title="Home" />
    <Landing title="image labelling" />
  </main>
)

export default IndexPage
