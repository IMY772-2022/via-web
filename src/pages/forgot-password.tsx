import React from "react"
import ForgotPassword from "../components/Auth/ForgotPassword"

import Seo from "../components/Seo/Seo"

const SignInPage = () => {
  return (
    <>
      <Seo title="Forgot password" />
      <ForgotPassword />
    </>
  )
}

export default SignInPage
