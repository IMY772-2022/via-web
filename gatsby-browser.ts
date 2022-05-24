import { Auth, Amplify } from "aws-amplify"
import {
  Predictions,
  AmazonAIPredictionsProvider,
} from "@aws-amplify/predictions"

import awsconfig from "./src/aws-exports"

Auth.configure(awsconfig)
Amplify.configure(awsconfig)
Amplify.configure({
  Storage: {
    AWSS3: {
      bucket: "viaweba3e7179aa111445aace0066c7bc6d2ce194052-dev",
      region: "eu-west-1",
    },
  },
})
Predictions.addPluggable(new AmazonAIPredictionsProvider())
