import { faCog } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import "./index.scss"

interface Props {
  type: string
  onClick: () => void
}

const Fab: React.FC<Props> = ({ type, onClick }) => {
  let icon
  let color = ""
  let border = 0

  switch (type) {
    case "settings": {
      icon = <FontAwesomeIcon icon={faCog} />
      color = "#C5C5C5"
      border = 3
      break
    }
    default: {
      //statements;
      break
    }
  }

  return (
    <button className={type} onClick={onClick}>
      {icon}
    </button>
  )
}

export default Fab
