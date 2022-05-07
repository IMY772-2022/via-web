import React from "react"

import { Layout } from "../components/Layout/Layout"
import Register from "../components/Auth/Register"

const SignInPage = () => {
  return (
    <div className="section">
      <div className="container is-fluid">
        <Layout pageTitle="Photo Analysis">
          <Register />
        </Layout>
      </div>
    </div>
  )
}

export default SignInPage
