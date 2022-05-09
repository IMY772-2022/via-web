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
              <div className="field p-0 column">
                {/* <input 
                  id="switchLarge"
                  type="checkbox"
                  name="switchLarge"
                  className="switch is-outlined is-large is-rtl is-flex"
                />
                <label
                  className="column is-full is-size-6"
                  htmlFor="switchLarge"
                >
                  Colour detect
                </label>
              </div>
              <div className="field p-0 column">
                <input
                  id="switchLarge"
                  type="checkbox"
                  name="switchLarge"
                  className="switch is-outlined is-large is-rtl"
                />
                <label
                  className="column is-full is-size-6"
                  htmlFor="switchLarge"
                >
                  Cash detect
                </label>
                 */}
              </div>
              <div className="is-flex is-flex-direction-row is-justify-content-space-between is-align-items-center">
                <p>Font size </p>
                <input
                  className="slider is-fullwidth is-large is-danger is-circle"
                  step="1"
                  min="0"
                  max="100"
                  value="50"
                  type="range"
                />
              </div>
              <div className="is-flex is-flex-direction-row is-justify-content-space-between is-align-items-center">
                <p>Contrast </p>
                <input
                  className="slider is-fullwidth is-large is-danger is-circle"
                  step="1"
                  min="0"
                  max="100"
                  value="50"
                  type="range"
                />
              </div>
              <div className="select">
                <select>
                  <option>Colour mode</option>
                  <option>With options</option>
                </select>
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
