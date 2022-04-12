/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react"
import PhotoAnalysis from "../PhotoAnalysis"

interface Props {
  title: string
  subtitle?: string
}

const Landing: React.FC<Props> = ({ title, subtitle }) => {
  const pageData = (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img
            src="https://bulma.io/images/placeholders/1280x960.png"
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img
                src="https://bulma.io/images/placeholders/96x96.png"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">{title}</p>
            <p className="subtitle is-6">
              {subtitle ? subtitle : "This is a subtitle"}
            </p>
          </div>
        </div>

        <div className="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
          iaculis mauris.
          <br />
          <PhotoAnalysis />
        </div>
      </div>
    </div>
  )
  return pageData
}

export default Landing
