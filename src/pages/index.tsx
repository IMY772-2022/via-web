import * as React from "react"
import { Amplify, Auth } from "aws-amplify"
import {
  Predictions,
  AmazonAIPredictionsProvider,
} from "@aws-amplify/predictions"

import awsconfig from "../aws-exports"
import Landing from "../components/Landing/Landing"
import { Layout } from "../components/Layout/Layout"
import "../styles.scss"
import Seo from "../components/Seo/Seo"

Amplify.configure(awsconfig)
Auth.configure(awsconfig)
Predictions.addPluggable(new AmazonAIPredictionsProvider())

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
