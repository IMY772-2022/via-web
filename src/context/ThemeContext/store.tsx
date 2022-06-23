// This code was heavily inspired by Josh Comeau and his
// tutorial on his blog, accessible at:

// https://www.joshwcomeau.com/react/dark-mode/

import React, { createContext, useEffect, useMemo, useState } from "react"
import {
  COLORS,
  COLOR_MODE_KEY,
  FONT_SIZE_MODE_KEY,
  FONT_WEIGHTS,
  FONT_WEIGHT_MODE_KEY,
  INITIAL_COLOR_MODE_CSS_PROP,
  INITIAL_FONT_SIZE_MODE_CSS_PROP,
  INITIAL_FONT_WEIGHT_MODE_CSS_PROP,
} from "../../theme"

const emptyFn = (): void | Promise<void> => {
  console.warn(`ThemeContext not ready!`)
}

type ThemeState = {
  colorMode: string | undefined
  setColorMode: (newValue: string) => void
  fontWeightMode: string | undefined
  setFontWeightMode: (newValue: string) => void
  fontSizeMode: string | undefined
  setFontSizeMode: (newValue: string) => void
}

export const INITIAL_VALUES: ThemeState = {
  colorMode: undefined,
  setColorMode: () => emptyFn,
  fontWeightMode: undefined,
  setFontWeightMode: () => emptyFn,
  fontSizeMode: undefined,
  setFontSizeMode: () => emptyFn,
}

export const ThemeContext = createContext(INITIAL_VALUES)

type ThemeProviderProps = {
  children: React.ReactNode | React.ReactNode[]
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [colorMode, rawSetColorMode] = useState<string | undefined>(
    INITIAL_VALUES.colorMode
  )
  const [fontWeightMode, rawSetFontWeightMode] = useState<string | undefined>(
    INITIAL_VALUES.fontWeightMode
  )
  const [fontSizeMode, rawSetFontSizeMode] = useState<string | undefined>(
    INITIAL_VALUES.fontSizeMode
  )

  useEffect(() => {
    const root = window.document.documentElement

    const initialColorValue = root.style.getPropertyValue(
      INITIAL_COLOR_MODE_CSS_PROP
    )
    const initialFontWeightValue = root.style.getPropertyValue(
      INITIAL_FONT_WEIGHT_MODE_CSS_PROP
    )
    const initialFontSizeModeValue = root.style.getPropertyValue(
      INITIAL_FONT_SIZE_MODE_CSS_PROP
    )

    rawSetColorMode(initialColorValue)
    rawSetFontWeightMode(initialFontWeightValue)
    rawSetFontSizeMode(initialFontSizeModeValue)
  }, [])

  const values = useMemo(() => {
    const setColorMode = (newValue: string) => {
      const root = window.document.documentElement

      localStorage.setItem(COLOR_MODE_KEY, newValue)

      Object.entries(COLORS).forEach(([name, colorByTheme]) => {
        const cssVarName = `--color-${name}`

        root.style.setProperty(cssVarName, colorByTheme[newValue])
      })

      rawSetColorMode(newValue)
    }

    const setFontWeightMode = (newValue: string) => {
      const root = window.document.documentElement

      localStorage.setItem(FONT_WEIGHT_MODE_KEY, newValue)

      Object.entries(FONT_WEIGHTS).forEach(([name, weightByTheme]) => {
        const cssVarName = `--weight-${name}`

        root.style.setProperty(cssVarName, weightByTheme[newValue])
      })

      rawSetFontWeightMode(newValue)
    }

    const setFontSizeMode = (newValue: string) => {
      const root = window.document.documentElement

      localStorage.setItem(FONT_SIZE_MODE_KEY, newValue)

      Object.entries(FONT_WEIGHTS).forEach(([name, sizeByTheme]) => {
        const cssVarName = `--size-${name}`

        root.style.setProperty(cssVarName, sizeByTheme[newValue])
      })

      rawSetFontSizeMode(newValue)
    }

    return {
      colorMode,
      setColorMode,
      fontWeightMode,
      setFontWeightMode,
      fontSizeMode,
      setFontSizeMode,
    }
  }, [colorMode, fontSizeMode, fontWeightMode])

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  )
}
