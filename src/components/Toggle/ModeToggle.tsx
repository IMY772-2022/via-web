import React, { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext/store"

const DarkToggle: React.FC = () => {
  const { colorMode, setColorMode } = useContext(ThemeContext)

  return (
    <label>
      <input
        type="checkbox"
        checked={colorMode === "dark"}
        onChange={ev => {
          setColorMode(ev.target.checked ? "dark" : "light")
        }}
      />{" "}
      Dark
    </label>
  )
}

export default DarkToggle
