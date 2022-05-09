import React from "react"
import "./SliderStyle.scss"

interface Props {
  label?: string
  id?: string
  maxvalue?: number
  minvalue?: number
}

const Slider: React.FC<Props> = ({
  label = "Hello",
  id = "Slider",
  maxvalue = 100,
  minvalue = 1,
}) => {
  return (
    <div className="background">
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
    </div>
  )
}

export default Slider
