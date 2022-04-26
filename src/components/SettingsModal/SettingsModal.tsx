/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react"
import "./SettingsModal.scss"

interface Props {
  isActive: boolean
  toggle: () => void
}

const SettingsModal: React.FC<Props> = ({ isActive, toggle }) => {
  if (!isActive) {
    return null
  }
  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={() => toggle} />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">MODAL</p>
          <button className="delete" onClick={() => toggle} />
        </header>
        <section className="modal-card-body">
          <div className="content">{isActive}</div>
        </section>
        <footer className="modal-card-foot">
          {/* eslint-disable-next-line no-console */}
          <button className="button" onClick={toggle}>
            Cancel
          </button>
        </footer>
      </div>
    </div>
  )
}

export default SettingsModal
