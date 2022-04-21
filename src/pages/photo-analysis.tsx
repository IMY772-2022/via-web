import React from "react"
import { Layout } from "../components/Layout/LayoutIndex"
import Analysis from "../components/PhotoAnalysis/PhotoAnalyisIndex"

const PhotoAnalysis = () => {
  return (
    <div className="section">
      <div className="container is-fluid">
        <Layout pageTitle="Photo Analysis">
          <Analysis />
        </Layout>
      </div>
    </div>
  )
}

export default PhotoAnalysis
