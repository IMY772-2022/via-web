import React from "react"

import {
  COLORS,
  COLOR_MODE_KEY,
  FONT_SIZES,
  FONT_SIZE_MODE_KEY,
  FONT_WEIGHTS,
  FONT_WEIGHT_MODE_KEY,
  INITIAL_COLOR_MODE_CSS_PROP,
  INITIAL_FONT_SIZE_MODE_CSS_PROP,
  INITIAL_FONT_WEIGHT_MODE_CSS_PROP,
} from "./src/theme"

const setColorsByTheme = () => {
  const colors = "🌈"
  const colorModeKey = "🔑"
  const colorModeCssProp = "⚡️"

  const mql = window.matchMedia("(prefers-color-scheme: dark)")
  const prefersDarkFromMQ = mql.matches
  const persistedPreference = localStorage.getItem(colorModeKey)

  let colorMode = "light"

  const hasUsedToggle = typeof persistedPreference === "string"

  if (hasUsedToggle) {
    colorMode = persistedPreference
  } else {
    colorMode = prefersDarkFromMQ ? "dark" : "light"
  }

  let root = document.documentElement

  root.style.setProperty(colorModeCssProp, colorMode)

  Object.entries(colors).forEach(([name, colorByTheme]) => {
    const cssVarName = `--color-${name}`

    root.style.setProperty(cssVarName, colorByTheme[colorMode])
  })
}

const setFontWeightModeByTheme = () => {
  const fontWeights = "🌈"
  const fontWeightModeKey = "🔑"
  const fontWeightModeCssProp = "⚡️"

  const persistedPreference = localStorage.getItem(fontWeightModeKey)

  const hasUsedToggle = typeof persistedPreference === "string"

  const fontWeightMode = hasUsedToggle ? persistedPreference : "normal"

  let root = document.documentElement

  root.style.setProperty(fontWeightModeCssProp, fontWeightMode)

  Object.entries(fontWeights).forEach(([name, weightByTheme]) => {
    const cssVarName = `--weight-${name}`

    root.style.setProperty(cssVarName, weightByTheme[fontWeightMode])
  })
}

const setFontSizeModeByTheme = () => {
  const fontSizes = "🌈"
  const fontSizeModeKey = "🔑"
  const fontSizeModeCssProp = "⚡️"

  const persistedPreference = localStorage.getItem(fontSizeModeKey)

  const hasUsedToggle = typeof persistedPreference === "string"

  const fontSizeMode = hasUsedToggle ? persistedPreference : "normal"

  let root = document.documentElement

  root.style.setProperty(fontSizeModeCssProp, fontSizeMode)

  Object.entries(fontSizes).forEach(([name, sizeByTheme]) => {
    const cssVarName = `--size-${name}`

    root.style.setProperty(cssVarName, sizeByTheme[fontSizeMode])
  })
}

const ColorsScript = () => {
  const colorsBoundFn = String(setColorsByTheme)
    .replace("🌈", JSON.stringify(COLORS))
    .replace("🔑", COLOR_MODE_KEY)
    .replace("⚡️", INITIAL_COLOR_MODE_CSS_PROP)

  const calledColorsFunction = `(${colorsBoundFn})()`

  // eslint-disable-next-line react/no-danger
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: calledColorsFunction,
      }}
    />
  )
}

const FontWeightsScript = () => {
  const weightsBoundFn = String(setFontWeightModeByTheme)
    .replace("'🌈'", JSON.stringify(FONT_WEIGHTS))
    .replace("🔑", FONT_WEIGHT_MODE_KEY)
    .replace("⚡️", INITIAL_FONT_WEIGHT_MODE_CSS_PROP)

  const calledWeightsFunction = `(${weightsBoundFn})()`

  // eslint-disable-next-line react/no-danger
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: calledWeightsFunction,
      }}
    />
  )
}

const FontSizesScript = () => {
  const sizesBoundFn = String(setFontSizeModeByTheme)
    .replace("'🌈'", JSON.stringify(FONT_SIZES))
    .replace("🔑", FONT_SIZE_MODE_KEY)
    .replace("⚡️", INITIAL_FONT_SIZE_MODE_CSS_PROP)

  const calledSizesFunction = `(${sizesBoundFn})()`

  // eslint-disable-next-line react/no-danger
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: calledSizesFunction,
      }}
    />
  )
}

/**
 * If the user has JS disabled, the injected script will never fire!
 * This means that they won't have any colors set, everything will be default
 * black and white.
 * We can solve for this by injecting a `<style>` tag into the head of the
 * document, which sets default values for all of our colors.
 * Only light mode will be available for users with JS disabled.
 */
const FallbackStyles = () => {
  // Create a string holding each CSS variable:
  /*
    `--color-text: black;
    --color-background: white;`
  */

  const colorsCssVariableString = Object.entries(COLORS).reduce(
    (acc, [name, colorByTheme]) => {
      return `${acc}\n--color-${name}: ${colorByTheme.light};`
    },
    ""
  )

  const weightsCssVariableString = Object.entries(FONT_WEIGHTS).reduce(
    (acc, [name, weightByTheme]) => {
      return `${acc}\n--weight-${name}: ${weightByTheme.normal};`
    },
    ""
  )

  const sizesCssVariableString = Object.entries(FONT_SIZES).reduce(
    (acc, [name, sizeByTheme]) => {
      return `${acc}\n--size-${name}: ${sizeByTheme.normal};`
    },
    ""
  )

  const wrappedInSelector = `html { ${colorsCssVariableString} ${weightsCssVariableString} ${sizesCssVariableString} }`

  return <style>{wrappedInSelector}</style>
}

export const onRenderBody = ({ setPreBodyComponents, setHeadComponents }) => {
  setHeadComponents(<FallbackStyles />)
  setPreBodyComponents(
    <ColorsScript />,
    <FontWeightsScript />,
    <FontSizesScript />
  )
}
