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
      <Link className="navbar-item" to="/signin">
        Sign in
      </Link>
      <Link className="navbar-item" to="/album">
        Album
      </Link>
    </nav>
  )
}
