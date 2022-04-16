import React from "react"

interface Props {
  label?: string
  id?: string
  onSliderClicked: () => void
  maxvalue?: number
  minvalue?: number
}

const Slider: React.FC<Props> = ({
  label = "Hello",
  id = "Slider",
  maxvalue = 100,
  minvalue = 1,
  onSliderClicked,
}) => {
  return (
    <div className="slidecontainer">
      <label>{label}</label>
      {
        <input
          type="range"
          min={minvalue}
          max={maxvalue}
          value="50"
          className="slider"
          id={id}
        />
      }
    </div>
  )
}

export default Slider
