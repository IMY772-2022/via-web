import React from "react"
import { Link } from "gatsby"
import BrandIcon from "../icons/BrandIcon"

export const Navigation = () => {
  return (
    <nav className="navbar mb-5" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <BrandIcon />
        </Link>
      </div>
      <Link className="navbar-item" to="/">
        Home
      </Link>
      <Link className="navbar-item" to="/photo-analysis">
        Photo Analysis
      </Link>
      {/* <Link
        role="button"
        className="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        to=""
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </Link> */}
    </nav>
  )
}
