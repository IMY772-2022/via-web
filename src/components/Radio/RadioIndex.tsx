import React from "react"

interface Props {
  label?: string
  id?: string
  radiovalue?: boolean
}

const Radio: React.FC<Props> = ({ label = "", id = "radio" }) => {
  return (
    <div className="radiocontainer">
      <input type="radio" id={id} name="settings" value="false" />
      <label>{label}</label>
    </div>
  )
}

export default Radio
