import React from "react"
import { AuthProvider } from "./components/Auth/store"
import { Layout } from "./components/Layout/Layout"

interface PageElementProps {
  element: React.ReactElement[] | React.ReactElement
}

const WrapPageElement: React.FC<PageElementProps> = ({
  element,
  ...props
}: PageElementProps) => {
  return (
    <>
      <AuthProvider>
        <Layout {...props}>{element}</Layout>
      </AuthProvider>
    </>
  )
}

export default WrapPageElement
