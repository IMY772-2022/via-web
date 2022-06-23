import React, { useContext, useMemo, useState } from "react"

import { ThemeContext } from "../../../context/ThemeContext/store"
import Radio from "../Radio/Radio"
import RadioGroup from "../RadioGroup/RadioGroup"
import { FontSize, FontWeight } from "./constants"

const ModesToggle: React.FC = () => {
  const { fontWeightMode, setFontWeightMode, fontSizeMode, setFontSizeMode } =
    useContext(ThemeContext)

  const [activeWeight, setActiveWeight] = useState<string | undefined>(
    FontWeight.normal
  )
  const [activeFontSize, setActiveFontSize] = useState<string | undefined>(
    FontSize.normal
  )

  useMemo(() => setActiveWeight(fontWeightMode), [fontWeightMode])

  useMemo(() => setActiveFontSize(fontSizeMode), [fontSizeMode])

  return (
    <>
      <div>
        <div className="card analysis-card has-text-light p-5">
          <div className="media-content">
            <div className="media">
              <div className="block">
                <div className="content">
                  <div>
                    <h4 className="is-size-4 mb-1 color-primary">Font Size</h4>
                    <RadioGroup>
                      <Radio
                        id="radio-size-small"
                        label="Smaller"
                        name="radio-size-small"
                        onClick={() => setFontSizeMode(FontSize.smaller)}
                        checked={activeFontSize === FontSize.smaller}
                      />
                      <Radio
                        id="radio-size-normal"
                        label="Normal"
                        name="radio-size-normal"
                        onClick={() => setFontSizeMode(FontSize.normal)}
                        checked={activeFontSize === FontSize.normal}
                      />
                      <Radio
                        id="radio-size-larger"
                        label="Larger"
                        name="radio-size-larger"
                        onClick={() => setFontSizeMode(FontSize.larger)}
                        checked={activeFontSize === FontSize.larger}
                      />
                    </RadioGroup>
                  </div>
                  <div className="mt-4">
                    <h4 className="is-size-4 mb-1 color-primary">
                      Font Weight
                    </h4>
                    <RadioGroup>
                      <Radio
                        id="radio-small"
                        label="Smaller"
                        name="radio-small"
                        onClick={() => setFontWeightMode(FontWeight.light)}
                        checked={activeWeight === FontWeight.light}
                      />
                      <Radio
                        id="radio-normal"
                        label="Normal"
                        name="radio-normal"
                        onClick={() => setFontWeightMode(FontWeight.normal)}
                        checked={activeWeight === FontWeight.normal}
                      />
                      <Radio
                        id="radio-larger"
                        label="Larger"
                        name="radio-larger"
                        onClick={() => setFontWeightMode(FontWeight.bold)}
                        checked={activeWeight === FontWeight.bold}
                      />
                    </RadioGroup>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ModesToggle
