import React from "react"
import { Layout } from "./components/Layout/Layout"
import { AuthProvider } from "./context/AuthContext/store"

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
