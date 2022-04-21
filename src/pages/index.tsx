import * as React from "react"
import { Amplify, Auth } from "aws-amplify"
import {
  Predictions,
  AmazonAIPredictionsProvider,
} from "@aws-amplify/predictions"

import awsconfig from "../aws-exports"
import Landing from "../components/Landing/LandingIndex"
import Slider from "../components/Slider/SliderIndex"
import { Layout } from "../components/Layout/LayoutIndex"
import "../styles.scss"
import Settings from "../components/Settings/SettingsIndex"
import Radio from "../components/Radio/RadioIndex"

Amplify.configure(awsconfig)
Auth.configure(awsconfig)
Predictions.addPluggable(new AmazonAIPredictionsProvider())

const IndexPage = (): JSX.Element => (
  <div className="section">
    <div className="container is-fluid">
      <Layout pageTitle="">
        <div className="columns">
          <div className="column is-4 is-full-mobile ">
            <Landing title="image labelling" />
          </div>
        </div>
      </Layout>
    </div>
  </div>
)

export default IndexPage
