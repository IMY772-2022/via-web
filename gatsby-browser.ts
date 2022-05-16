import { Auth, Amplify } from "aws-amplify"
import {
  Predictions,
  AmazonAIPredictionsProvider,
} from "@aws-amplify/predictions"

import awsconfig from "./src/aws-exports"

Auth.configure(awsconfig)
Amplify.configure(awsconfig)
Predictions.addPluggable(new AmazonAIPredictionsProvider())
