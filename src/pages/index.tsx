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
  <div className="section">
    <div className="container is-fluid">
      <Layout pageTitle="VIA">
        <div className="columns">
          <div className="column is-4 is-offset-one-quarter">
            <Landing title="image labelling" />
          </div>
        </div>
      </Layout>
    </div>
  </div>
)

export default IndexPage
