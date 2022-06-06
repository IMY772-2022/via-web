import React from "react"

import "./landing.scss"
import PhotoAnalysis from "../PhotoAnalysis/PhotoAnalysis"
import { faCamera } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

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
