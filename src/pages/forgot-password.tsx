import React from "react"

import Seo from "../components/Seo/Seo"
import ForgotPassword from "../components/Auth/ForgotPassword"

const ForgotPasswordPage = () => {
  return (
    <>
      <Seo title="Forgot password" />
      <ForgotPassword />
    </>
  )
}

export default ForgotPasswordPage
