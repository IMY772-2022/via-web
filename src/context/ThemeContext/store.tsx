import React, { createContext, useEffect, useMemo, useState } from "react"
import {
  COLORS,
  COLOR_MODE_KEY,
  INITIAL_COLOR_MODE_CSS_PROP,
} from "../../theme"

const emptyFn = (): void | Promise<void> => {
  console.warn(`ThemeContext not ready!`)
}

type ThemeState = {
  colorMode: string | undefined
  setColorMode: (newValue: string) => void
}

export const INITIAL_VALUES: ThemeState = {
  colorMode: "light",
  setColorMode: () => emptyFn,
}

export const ThemeContext = createContext(INITIAL_VALUES)

type ThemeProviderProps = {
  children: React.ReactNode | React.ReactNode[]
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [colorMode, rawSetColorMode] = useState<string | undefined>(
    INITIAL_VALUES.colorMode
  )

  useEffect(() => {
    const root = window.document.documentElement

    const initialColorValue = root.style.getPropertyValue(
      INITIAL_COLOR_MODE_CSS_PROP
    )

    rawSetColorMode(initialColorValue)
  }, [])

  const values = useMemo(() => {
    function setColorMode(newValue: string) {
      const root = window.document.documentElement

      localStorage.setItem(COLOR_MODE_KEY, newValue)

      Object.entries(COLORS).forEach(([name, colorByTheme]) => {
        const cssVarName = `--color-${name}`

        root.style.setProperty(cssVarName, colorByTheme[newValue])
      })

      rawSetColorMode(newValue)
    }

    return {
      colorMode,
      setColorMode,
    }
  }, [colorMode, rawSetColorMode])

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  )
}
