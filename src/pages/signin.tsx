import React from "react"

import { Layout } from "../components/Layout/Layout"
import SignIn from "../components/Auth/SignIn"

const SignInPage = () => {
  return (
    <div className="section">
      <div className="container is-fluid">
        <Layout pageTitle="Photo Analysis">
          <SignIn />
        </Layout>
      </div>
    </div>
  )
}

export default SignInPage
