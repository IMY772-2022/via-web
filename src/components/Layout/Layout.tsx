import * as React from "react"

import { Navigation } from "../Navigation/Navigation"

export interface LayoutProps {
  pageTitle?: string
  children: React.ReactNode
}

export const Layout = (props: LayoutProps) => {
  const { pageTitle, children } = props
  const heading = <h1>{pageTitle}</h1>
  return (
    <div className="container">
      <div className="columns is-7">
        <div className="column is-offset-2">
          <Navigation />
          {heading}
          {children}
        </div>
      </div>
    </div>
  )
}
