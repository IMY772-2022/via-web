import React from "react"
import Edit from "../components/Edit/Edit"
import Seo from "../components/Seo/Seo"

export default function EditPage({ location }: any) {
  return (
    <>
      <Seo title="Edit" />
      <Edit recordData={location} />
    </>
  )
}
