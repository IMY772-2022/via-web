import * as React from "react"

import Landing from "../components/Landing/Landing"
import Seo from "../components/Seo/Seo"

import "../styles.scss"

const PhotoAnalysisPage = (): JSX.Element => (
  <>
    <Seo title="Home" />
    <Landing title="image labelling" />
  </>
)

export default PhotoAnalysisPage
