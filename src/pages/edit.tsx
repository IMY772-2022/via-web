import React from "react"
import Edit from "../components/Edit/Edit"
import { Layout } from "../components/Layout/Layout"

export default function EditPage() {
  return (
    <div className="section">
      <div className="container is-fluid">
        <Layout pageTitle="Photo Edit Page">
          <Edit />
        </Layout>
      </div>
    </div>
  )
}
