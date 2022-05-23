import * as React from "react"

import Landing from "../components/Landing/Landing"
import { Layout } from "../components/Layout/Layout"
import Seo from "../components/Seo/Seo"

import "../styles.scss"

const IndexPage = (): JSX.Element => (
  <main className="section">
    <Seo
      title="Home"
      description="A service to assist visually impaired users to “see” the world around them."
    />
    <div className="container is-fluid">
      <Layout pageTitle="">
        <div className="columns">
          <div className="column is-4 is-full-mobile ">
            <Landing title="image labelling" />
          </div>
        </div>
      </Layout>
    </div>
  </main>
)

export default IndexPage
