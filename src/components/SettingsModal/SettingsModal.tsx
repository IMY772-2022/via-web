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
            <div className="content is-flex is-flex-direction-column">
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
            </div>
          </section>
          <footer className="modal-card-foot">
            {/* eslint-disable-next-line no-console */}
            <button className="button" onClick={toggle}>
              Cancel
            </button>
          </footer>
        </div>
      </div>
    </React.Fragment>,
    document.body
  )
}

export default SettingsModal
