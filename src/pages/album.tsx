import React from "react"

import Album from "../components/Album/Album"
import Seo from "../components/Seo/Seo"

const UserAlbum = () => {
  return (
    <>
      <Seo title="Album" />
      <Album />
    </>
  )
}

export default UserAlbum
