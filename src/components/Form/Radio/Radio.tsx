import React from "react"

type RadioProps = {
  checked?: boolean
  classNames?: string
  id: string
  label: string
  name: string
  onClick: () => void
}

const Radio: React.FC<RadioProps> = ({
  checked = false,
  classNames = "",
  id,
  label,
  name,
  onClick,
}) => {
  return (
    <div className="column">
      <input
        className={`${classNames} is-checkradio m-0 p-0 `}
        id={id}
        type="radio"
        name={name}
        checked={checked}
        onClick={onClick}
        readOnly
      />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

export default Radio
