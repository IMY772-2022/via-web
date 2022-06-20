import React from "react"
import "./confirmModal.scss"

interface ModalProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  action: () => void
  confirmationMessage: string
}

const ConfirmModal: React.FC<ModalProps> = modalProps => {
  if (modalProps.open) {
    return (
      <>
        <div className="overlay"></div>
        <div className="confirmation-modal">
          <div className="model-content">{modalProps.confirmationMessage}</div>
          <button
            className={"button is-large is-normal"}
            onClick={() => modalProps.setOpen(false)}
          >
            Cancel
          </button>
          <button
            className={"button is-danger is-large"}
            onClick={modalProps.action}
          >
            Yes
          </button>
        </div>
      </>
    )
  } else return null
}

export default ConfirmModal
