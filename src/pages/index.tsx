import * as React from "react"
import { Amplify, Auth } from "aws-amplify"
import {
  Predictions,
  AmazonAIPredictionsProvider,
} from "@aws-amplify/predictions"

import awsconfig from "../aws-exports"
import Landing from "../components/Landing"
import { Layout } from "../components/Layout/index"
import "../styles.scss"

Amplify.configure(awsconfig)
Auth.configure(awsconfig)
Predictions.addPluggable(new AmazonAIPredictionsProvider())

const IndexPage = (): JSX.Element => (
  <div className="container">
    <div className="columns is-two-fifths">
      <Layout pageTitle="VIA">
        <Landing title="image labelling" />
      </Layout>
    </div>
  </div>
)

export default IndexPage
