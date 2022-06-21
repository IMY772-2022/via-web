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
          <div className="is-align-self-auto">
            <div className="modal-content">
              {modalProps.confirmationMessage}
            </div>
            <button
              className={"button confirm is-normal is-align-items-center"}
              onClick={() => modalProps.setOpen(false)}
            >
              Cancel
            </button>
            <button
              className={"button confirm is-danger is-align-items-center "}
              onClick={modalProps.action}
            >
              Yes
            </button>
          </div>
        </div>
      </>
    )
  } else return null
}

export default ConfirmModal
