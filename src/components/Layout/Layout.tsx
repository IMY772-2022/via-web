import * as React from "react"
import { useColorMode } from "theme-ui"

import { Navigation } from "../Navigation/Navigation"

export interface LayoutProps {
  pageTitle?: string
  children: React.ReactNode
}

export const Layout = (props: LayoutProps) => {
  const [colorMode, setColorMode] = useColorMode()
  const nextColorMode = colorMode === `light` ? `dark` : `light`

  const { pageTitle, children } = props
  const heading = <h1>{pageTitle}</h1>
  return (
    <div className="container">
      <Navigation />
      <h1>Color mode is: {colorMode}</h1>
      <button className="button" onClick={() => setColorMode(nextColorMode)}>
        Change colour mode
      </button>
      {heading}
      {children}
    </div>
  )
}
