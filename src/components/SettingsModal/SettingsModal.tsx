/* eslint-disable jsx-a11y/no-static-element-interactions */
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
        <div className="modal-background" onClick={toggle} />
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Accessibility Settings</p>
            <button className="delete" onClick={toggle} />
          </header>
          <section className="modal-card-body">
            <div className="">
              <div className="field">
                <input
                  id="switchLarge"
                  type="checkbox"
                  name="switchLarge"
                  className="switch is-outlined is-large is-rtl"
                />
                <label htmlFor="switchLarge">Colour detect</label>
              </div>
              <div className="field">
                <input
                  id="switchLarge"
                  type="checkbox"
                  name="switchLarge"
                  className="switch is-outlined is-large is-rtl"
                />
                <label htmlFor="switchLarge">Cash detect</label>
              </div>
              <div className="is-flex is-flex-direction-row is-justify-content-space-between is-align-items-center">
                <p>Font size</p>
                <input
                  className="slider is-Large"
                  min={0}
                  max={100}
                  value={50}
                  step={1}
                  type={"range"}
                />
              </div>
              <div className="is-flex is-flex-direction-row is-justify-content-space-between is-align-items-center">
                <p>contrast</p>
                <input
                  className="slider is-Large"
                  min={0}
                  max={100}
                  value={50}
                  step={1}
                  type={"range"}
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
          <footer className="modal-card-foot is-flex is-justify-content-center">
            <button className="button is-success">Apply</button>
          </footer>
        </div>
      </div>
    </React.Fragment>,
    document.body
  )
}

export default SettingsModal
