import {
  faFont,
  faMagnifyingGlass,
  faMagnifyingGlassMinus,
  faMagnifyingGlassPlus,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useContext, useMemo, useState } from "react"

import { ThemeContext } from "../../context/ThemeContext/store"
import { ColorMode, FontSize, FontWeight } from "./constants"

const DarkToggle: React.FC = () => {
  const {
    colorMode,
    setColorMode,
    fontWeightMode,
    setFontWeightMode,
    fontSizeMode,
    setFontSizeMode,
  } = useContext(ThemeContext)

  const [activeColorMode, setActiveColorMode] = useState<string | undefined>(
    ColorMode.normal
  )
  const [activeWeight, setActiveWeight] = useState<string | undefined>(
    FontWeight.normal
  )
  const [activeFontSize, setActiveFontSize] = useState<string | undefined>(
    FontSize.normal
  )

  useMemo(() => setActiveWeight(fontWeightMode), [fontWeightMode])

  useMemo(() => setActiveColorMode(colorMode), [colorMode])

  useMemo(() => setActiveFontSize(fontSizeMode), [fontSizeMode])

  return (
    <>
      <h4 className="is-size-4">Font Size</h4>
      <div className="field has-addons">
        <p className="control">
          <button
            className={`button py-5 ${
              activeFontSize == FontSize.smaller ? " has-text-black " : ""
            }`}
            onClick={() => {
              setFontSizeMode(FontSize.smaller)
            }}
          >
            <span className="icon is-small">
              <FontAwesomeIcon className="fa" icon={faMagnifyingGlassMinus} />
            </span>
          </button>
        </p>
        <p className="control">
          <button
            className={`button py-5 ${
              activeFontSize == FontSize.normal ? " has-text-black " : ""
            }`}
            onClick={() => {
              setFontSizeMode(FontSize.normal)
            }}
          >
            <span className="icon">
              <FontAwesomeIcon className="fa" icon={faMagnifyingGlass} />
            </span>
          </button>
        </p>
        <p className="control">
          <button
            className={`button py-5 ${
              activeFontSize == FontSize.larger ? " has-text-black " : ""
            }`}
            onClick={() => {
              setFontSizeMode(FontSize.larger)
            }}
          >
            <span className="icon is-small">
              <FontAwesomeIcon className="fa" icon={faMagnifyingGlassPlus} />
            </span>
          </button>
        </p>
      </div>

      <h4 className="is-size-4">Font Weight</h4>
      <div className="field has-addons">
        <p className="control">
          <button
            className={`button py-5 ${
              activeWeight == FontWeight.light ? " has-text-black " : ""
            }`}
            onClick={() => {
              setFontWeightMode(FontWeight.light)
            }}
          >
            <span className="icon is-small">
              <FontAwesomeIcon className="fas" icon={faFont} />
            </span>
          </button>
        </p>
        <p className="control">
          <button
            className={`button py-5 ${
              activeWeight == FontWeight.normal ? " has-text-black " : ""
            }`}
            onClick={() => {
              setFontWeightMode(FontWeight.normal)
            }}
          >
            <span className="icon">
              <FontAwesomeIcon className="fa-lg" icon={faFont} />
            </span>
          </button>
        </p>
        <p className="control">
          <button
            className={`button py-5 ${
              activeWeight == FontWeight.bold ? " has-text-black " : ""
            }`}
            onClick={() => {
              setFontWeightMode(FontWeight.bold)
            }}
          >
            <span className="icon is-small">
              <FontAwesomeIcon className="fa-2x" icon={faFont} />
            </span>
          </button>
        </p>
      </div>

      <h4 className="is-size-4">Color Mode</h4>
      <div className="field has-addons">
        <p className="control">
          <button
            className={`button py-5 ${
              activeColorMode == ColorMode.light ? " has-text-black " : ""
            }`}
            onClick={() => {
              setColorMode(ColorMode.light)
            }}
          >
            <span className="icon is-small">
              <FontAwesomeIcon className="fa" icon={faMagnifyingGlassMinus} />
            </span>
          </button>
        </p>
        <p className="control">
          <button
            className={`button py-5 ${
              activeColorMode == ColorMode.normal ? " has-text-black " : ""
            }`}
            onClick={() => {
              setColorMode(ColorMode.dark)
            }}
          >
            <span className="icon">
              <FontAwesomeIcon className="fa" icon={faMagnifyingGlass} />
            </span>
          </button>
        </p>
      </div>
    </>
  )
}

export default DarkToggle
