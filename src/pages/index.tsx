import React from "react"

import Onboarding from "../components/Onboarding/Onboarding"
import Seo from "../components/Seo/Seo"

const IndexPage = () => {
  return (
    <>
      <Seo title="Welcome" />
      <Onboarding />
    </>
  )
}

export default IndexPage
