import * as React from "react"
import Example from "../components/Example/Example"
import { Layout } from "../components/Layout/index"
import "../styles.scss"

const IndexPage = (): JSX.Element => (
  <div className="container">
    <div className="columns is-two-fifths">
      <Layout pageTitle="VIA">
        <Example title="homepage" />
      </Layout>
      s
    </div>
  </div>
)

export default IndexPage
