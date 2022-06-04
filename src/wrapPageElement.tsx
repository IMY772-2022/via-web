import React from "react"
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
      <Layout {...props}>{element}</Layout>
    </>
  )
}

export default WrapPageElement
