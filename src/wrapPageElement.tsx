import React from "react"

import { Layout } from "./components/Layout/Layout"
import { AuthProviderTest } from "./context/store"

interface PageElementProps {
  element: React.ReactElement[] | React.ReactElement
}

const WrapPageElement: React.FC<PageElementProps> = ({
  element,
  ...props
}: PageElementProps) => {
  return (
    <>
      <AuthProviderTest>
        <Layout {...props}>{element}</Layout>
      </AuthProviderTest>
    </>
  )
}

export default WrapPageElement
