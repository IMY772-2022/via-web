import * as React from "react"
import { QueryClient, QueryClientProvider } from "react-query"

import { Navigation } from "../Navigation/Navigation"

export interface LayoutProps {
  pageTitle?: string
  children: React.ReactNode
}

const queryClient = new QueryClient()

export const Layout = (props: LayoutProps) => {
  const { pageTitle, children } = props
  const heading = <h1>{pageTitle}</h1>
  return (
    <div className="container">
      <QueryClientProvider client={queryClient}>
        <Navigation />
        {/* <div className="is-flex is-justify-content-center"> */}
        {heading}
        {children}
        {/* </div> */}
      </QueryClientProvider>
    </div>
  )
}
