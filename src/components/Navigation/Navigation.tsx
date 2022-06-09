import React from "react"
import { Link } from "gatsby"
import BrandIcon from "../icons/BrandIcon"
import { useSignOut, useUser } from "../Auth/hooks"

export const Navigation = () => {
  const user = useUser()
  const signOut = useSignOut()

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
      <Link className="navbar-item" to="/album">
        Album
      </Link>
      {user ? (
        <span
          className="navbar-item"
          onClick={signOut}
          onKeyDown={signOut}
          role={"link"}
          tabIndex={0}
        >
          Sign Out
        </span>
      ) : (
        <Link className="navbar-item" to="/signin">
          Sign In
        </Link>
      )}
    </nav>
  )
}
