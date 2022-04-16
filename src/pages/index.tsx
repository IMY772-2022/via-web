import * as React from "react"
import { Amplify, Auth } from "aws-amplify"
import {
  Predictions,
  AmazonAIPredictionsProvider,
} from "@aws-amplify/predictions"

import awsconfig from "../aws-exports"
import Landing from "../components/Landing"
import Slider from "../components/Slider"
import { Layout } from "../components/Layout/index"
import "../styles.scss"
import Settings from "../components/Settings"

Amplify.configure(awsconfig)
Auth.configure(awsconfig)
Predictions.addPluggable(new AmazonAIPredictionsProvider())

const sayHello = () => {
  //console.log("Hello")
}

const IndexPage = (): JSX.Element => (
  <div className="section">
    <div className="container is-fluid">
      <Layout pageTitle="">
        <div className="columns">
          <div className="column is-4 is-full-mobile ">
            <Landing title="image labelling" />
            <Settings />
          </div>
        </div>
      </Layout>
    </div>
  </div>
)

export default IndexPage
