import React from "react"
import { Link } from "gatsby"
import BrandIcon from "../icons/BrandIcon"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCog, faHome } from "@fortawesome/free-solid-svg-icons"
import "./index.scss"
import Fab from "../Fab"

export const Navigation = () => {
  const openModal = () => {
    //console.log("button push")
  }

  return (
    <nav className="navbar mb-5" role="navigation" aria-label="main navigation">
      <div className="level navbar-brand is-flex is-align-content-center">
        <div className="level-left">
          <Link className="navbar-item" to="/">
            <BrandIcon />
          </Link>
        </div>
        <div className="level-right mt-0 is-flex is-align-content-center">
          <Fab type="settings" onClick={openModal}></Fab>
        </div>
      </div>
      <i className="fa-solid fa-gear"></i>
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
