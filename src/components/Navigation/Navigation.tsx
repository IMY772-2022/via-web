import { Link } from "gatsby"
import React from "react"
import { useSignOut } from "../Auth/hooks"
import { AuthContext } from "../Auth/store"
import BrandIcon from "../icons/BrandIcon"

export const Navigation = () => {
  const authContext = React.useContext(AuthContext)
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
      {authContext.userId === null ? (
        <>
          <Link className="navbar-item" to="/signin">
            Sign In
          </Link>
        </>
      ) : (
        <>
          <Link className="navbar-item" to="/album">
            Album
          </Link>
          <Link className="navbar-item" to="/signout" onClick={signOut}>
            Sign Out
          </Link>
        </>
      )}
      <Link className="navbar-item" to="/onboarding">
        Onboarding
      </Link>
    </nav>
  )
}
