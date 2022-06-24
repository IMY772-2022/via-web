import React from "react"

import PhotoAnalysis from "../PhotoAnalysis/PhotoAnalysis"
import "./landing.scss"

interface Props {
  title: string
  subtitle?: string
}

const Landing: React.FC<Props> = () => {
  const pageData = (
    <>
      <PhotoAnalysis />
    </>
  )
  return pageData
}

export default Landing
