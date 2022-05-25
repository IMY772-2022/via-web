/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react"
import ReactDOM from "react-dom"
import "./SettingsModal.scss"

interface Props {
  isActive: boolean
  toggle: () => void
}

const SettingsModal: React.FC<Props> = ({ isActive, toggle }) => {
  if (!isActive) {
    return null
  }

  return ReactDOM.createPortal(
    <React.Fragment>
      <div className="modal is-active">
        <div
          role="button"
          tabIndex={0}
          className="modal-background"
          onClick={toggle}
        />
        <div className="modal-card">
          <section className="modal-card-body">
            <div className="">
              <div className="field p-0 column"></div>
              <div className="is-flex is-flex-direction-row is-justify-content-space-between is-align-items-center">
                <div className="SettingsText">
                  <i>Customise your settings</i>
                </div>
                <div className="SettingsText">Font size </div>
                <input
                  className="slider is-fullwidth is-large is-danger is-circle"
                  step="1"
                  min="0"
                  max="100"
                  value="20"
                  type="range"
                ></input>
              </div>
              <div className="is-flex is-flex-direction-row is-justify-content-space-between is-align-items-center">
                <div className="SettingsText">Contrast</div>
                <input
                  className="slider is-fullwidth is-large is-danger is-circle"
                  step="1"
                  min="0"
                  max="100"
                  value="20"
                  type="range"
                ></input>
              </div>
              <div>
                <p>Colour Mode</p>
              </div>
              <div className="RadioSelect">
                <div>
                  Standard
                  <input
                    type="radio"
                    id="Standard"
                    name="Standard"
                    value="Standard"
                  ></input>
                </div>
                <div>
                  Monochromatism
                  <input
                    type="radio"
                    id="Monochromatism"
                    name="Monochromatism"
                    value="Monochromatism"
                  ></input>
                </div>
                <div>
                  Dichromatism
                  <input
                    type="radio"
                    id="Dichromatism"
                    name="Dichromatism"
                    value="Dichromatism"
                  ></input>
                </div>
                <div>
                  Anomalous Trichromacy
                  <input
                    type="radio"
                    id="AnomalousTrichromacy"
                    name="AnomalousTrichromacy"
                    value="AnomalousTrichromacy"
                  ></input>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </React.Fragment>,
    document.body
  )
}

export default SettingsModal
