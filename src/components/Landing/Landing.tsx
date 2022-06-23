import React from "react"

import PhotoAnalysis from "../PhotoAnalysis/PhotoAnalysis"
import "./landing.scss"

interface Props {
  title: string
  subtitle?: string
}

const Landing: React.FC<Props> = () => {
  const pageData = (
    <div className="mainContainer">
      {/* <div className="rightControls">
        <div className="controls">
          <button className="icon-button"></button>
        </div>
      </div> */}
      <br />
      <PhotoAnalysis />
    </div>
  )
  return pageData
}

export default Landing
