import React from "react"

import "./landing.scss"
import PhotoAnalysis from "../PhotoAnalysis/PhotoAnalysis"

interface Props {
  title: string
  subtitle?: string
}

const Landing: React.FC<Props> = () => {
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
  )
  return pageData
}

export default Landing
