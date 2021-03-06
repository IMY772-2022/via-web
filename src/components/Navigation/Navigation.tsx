import { Link } from "gatsby"
import React, { useContext } from "react"
import { AuthContext } from "../../context/AuthContext/store"
import BrandIcon from "../icons/BrandIcon"

export const Navigation: React.FC = () => {
  const authContext = useContext(AuthContext)

  return (
    <nav className="navbar mb-5" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <BrandIcon />
          <span className="ml-4">Home</span>
        </Link>
      </div>
      <Link className="navbar-item" to="/photo-analysis">
        Photo Analysis
      </Link>
      <Link className="navbar-item" to="/settings">
        Settings
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
          <Link className="navbar-item" to="/signout">
            Sign Out
          </Link>
        </>
      )}
    </nav>
  )
}
