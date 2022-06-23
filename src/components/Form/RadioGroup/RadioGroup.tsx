import React from "react"

type RadioGroupProps = {
  children: React.ReactElement | React.ReactElement[]
  classNames?: string
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  children,
  classNames = "",
}) => {
  return (
    <div className={`${classNames} control `}>
      <div className="field columnns">{children}</div>
    </div>
  )
}

export default RadioGroup
