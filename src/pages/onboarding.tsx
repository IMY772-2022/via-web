import React from "react"

import Onboarding from "../components/Onboarding/Onboarding"
import { Layout } from "../components/Layout/Layout"

const OnboardingPage = () => {
  return (
    <div className="section">
      <div className="container is-fluid">
        <Layout>
          <Onboarding />
        </Layout>
      </div>
    </div>
  )
}

export default OnboardingPage
