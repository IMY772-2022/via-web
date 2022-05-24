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
      <div className="rightControls">
        <div className="controls">
          <label className="file-label">
            <input className="file-input" type="file" />
            <span className="file-cta">
              <span className="file-label">
                <FontAwesomeIcon
                  className="iconCam"
                  icon={faCamera}
                  fontSize="18"
                />
              </span>
            </span>
          </label>
        </div>
        <div className="controls">
          <button className="icon-button"></button>
        </div>
      </div>
      <br />

      <div className="card analysis-card has-text-light">
        {/* TODO in future we should be using GatsbyImage for dynamic and StaticImage for any fixed/static images */}
        {/* <div className="card-image">
        <figure className="image is-4by3">
          <img
            src="https://bulma.io/images/placeholders/1280x960.png"
            alt="Placeholder image"
          />
        </figure>
       </div> */}
        <div className="media-content">
          <div className="is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
            <div className="media">
              <div className="block">
                <div className="content">
                  <PhotoAnalysis />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  return pageData
}

export default Landing
