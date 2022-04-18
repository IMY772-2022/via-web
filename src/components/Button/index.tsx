import React from "react"

import "./index.scss"

interface Props {
  title?: string
  icon?: React.ReactNode
  onClick?: () => void
}

const Button: React.FC<Props> = ({ title, onClick, icon }) => {
  return (
    <button className="icon-button mt-4" onClick={onClick}>
      {icon ? icon : null} {title ? title : null}
    </button>
  )
}

export default Button
