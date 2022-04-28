/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react"
import PhotoAnalysis from "../PhotoAnalysis/PhotoAnalysis"

import "./landing.scss"

interface Props {
  title: string
  subtitle?: string
}

const Landing: React.FC<Props> = ({ title, subtitle }) => {
  const pageData = (
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
        <div className="card-header">
          {/*
          <h1 className="card-header-title is-size-5 has-text-light">
            Audio for labels
          </h1>*/}
        </div>

        <div className="is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
          <div className="media">
            <div className="block">
              <i>Take or upload photo</i>
              <div className="content">
                <PhotoAnalysis />
              </div>
            </div>
          </div>
        </div>
        {/* TODO add slider for volume */}
        {/* <div className="media">
          <input step="1" min="0" max="100" value="50" type="range" />
        </div> */}

        {/*
        <div className="is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
          <Button
            icon={<FontAwesomeIcon icon={faPlay} fontSize="20" />}>
          </Button>
        </div>
        */}
      </div>
    </div>
  )
  return pageData
}

export default Landing
