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
      <div className="is-flex is-flex-direction-column is-align-items-center has-text-left-mobile">
        <Navigation />

        <main>
          {heading}
          {children}
        </main>
      </div>
    </div>
  )
}
