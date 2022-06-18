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
      <div className="columns is-7">
        <div className="column is-offset-2">
          <QueryClientProvider client={queryClient}>
            <Navigation />
            {heading}
            {children}
          </QueryClientProvider>
        </div>
      </div>
    </div>
  )
}
