import React from "react"

import Seo from "../components/Seo/Seo"
import DarkToggle from "../components/Toggle/ModeToggle"

const SettingsPage = () => {
  return (
    <>
      <Seo title="Settings" />
      <h1>Hello There</h1>

      <DarkToggle />
    </>
  )
}

export default SettingsPage
