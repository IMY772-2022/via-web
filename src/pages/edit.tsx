import React from "react"
import { QueryClient, QueryClientProvider } from "react-query"

import Edit from "../components/Edit/Edit"
import Seo from "../components/Seo/Seo"

const queryClient = new QueryClient()

export default function EditPage({ location }: any) {
  return (
    <>
      <Seo title="Edit" />
      <QueryClientProvider client={queryClient}>
        <Edit recordData={location} />
      </QueryClientProvider>
    </>
  )
}
