import React from "react"

import Album from "../components/Album/Album"
import { Layout } from "../components/Layout/Layout"

const UserAlbum = () => {
  return (
    <div className="section">
      <div className="container is-fluid">
        <Layout pageTitle="Album">
          <Album />
        </Layout>
      </div>
    </div>
  )
}

export default UserAlbum
