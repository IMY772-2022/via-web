import React from "react"
import { ThemeProvider } from "theme-ui"
import theme from "./gatsby-plugin-theme-ui"

interface RootElementProps {
  element: React.ReactElement[] | React.ReactElement
}

const WrapRootElement: React.FC<RootElementProps> = ({
  element,
}: RootElementProps) => {
  return <ThemeProvider theme={theme}>{element}</ThemeProvider>
}

export default WrapRootElement
