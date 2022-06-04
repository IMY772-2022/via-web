import { bulma } from "@theme-ui/preset-bulma"

const theme = {
  initialColorModeName: "light",
  useColorSchemeMediaQuery: false,
  ...bulma,
  fonts: {
    ...bulma.fonts,
    body: "system-ui, sans-serif",
    heading: '"Avenir Next", sans-serif',
    monospace: "Menlo, monospace",
  },
  colors: {
    ...bulma.colors,
    text: "#000",
    background: "#fff",
    primary: "#33e",
    modes: {
      dark: {
        text: "#fff",
        background: "#000",
        primary: "#cc1",
      },
    },
  },
}
export default theme
