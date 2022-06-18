import React from "react"
import Edit from "../components/Edit/Edit"
import { Layout } from "../components/Layout/Layout"

export default function EditPage({ location }: any) {
  return (
    <div className="section">
      <div className="container is-fluid">
        <Layout pageTitle="">
          <Edit recordData={location} />
        </Layout>
      </div>
    </div>
  )
}
