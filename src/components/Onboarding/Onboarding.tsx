import { navigate } from "gatsby"
import React from "react"
import "./onboarding.scss"

const Onboarding: React.FC = () => {
  const redirectToHome = () => {
    navigate("/photo-analysis")
  }

  const redirectToSettings = () => {
    navigate("/settings")
  }

  return (
    <div>
      <div className="card">
        <div className="media-content">
          <div className="is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
            <div className="media">
              <div className="block">
                <div className="content px-5">
                  <div className="logo">
                    <svg
                      height="130"
                      width="110"
                      viewBox="0 0 50 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 39L44 1M22 23C18.5 19 22.5 13 28.5 16.5M17.9998 26C10.9998 17.5 21.4998 5.50004 30.9998 13M1 20C18 2 32.5 2.99998 49 20C32.5 37 18 38 1 20Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="mainTitle is-size-4">Welcome to VIA!</p>

                  <p className="mainBody">
                    VIA is a help to aid users with visual impairment. <br />
                    <br />
                    In the photo analysis page, you can take a photo or upload
                    one from your camera roll and the items detected in the
                    image will be returned to you. You can also save these
                    searches and edit the values found in the images.
                    <br />
                    <br />
                    <span className="redirectText is-size-5">
                      Are you new here?
                    </span>
                  </p>

                  <div className="is-flex my-4 gap-4">
                    <button
                      className="button button-lg is-danger has-text-centered"
                      onClick={redirectToSettings}
                    >
                      Yes
                    </button>
                    <button
                      className="button button-lg is-danger is-align-content-center"
                      onClick={redirectToHome}
                    >
                      No
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Onboarding
