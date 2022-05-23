import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { faEyeSlash } from "@fortawesome/free-regular-svg-icons"
import { Link } from "gatsby"
import Alert from "../Alert/Alert"

import { signIn } from "./utils"
import "./SignIn.scss"

export interface User {
  username: string
  password: string
}

const SignIn: React.FC = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  })

  const [displayError, setDisplayError] = useState({
    isError: false,
    message: "",
  })
  const updateForm = (event: any) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    })
  }

  const signin = () => {
    setDisplayError({
      ...displayError,
      isError: false,
    })
    const user = {
      username: formValues.username,
      password: formValues.password,
    }
    signIn(user).then(message => {
      setDisplayError({
        isError: true,
        message: message as string,
      })
    })
  }
  return (
    <div className="card">
      <div className="card-content">
        <div className="content">
          <div className="form">
            {displayError.isError ? (
              <Alert error={displayError.message} />
            ) : null}
            <div className="field">
              <label className="label" htmlFor="email">
                Email
              </label>
              <div className="control has-icons-left">
                <input
                  className="input"
                  type="email"
                  placeholder="Email"
                  name="username"
                  id="username"
                  onChange={e => updateForm(e)}
                />
                <span className="icon is-small is-left">
                  <FontAwesomeIcon icon={faEnvelope} fontSize="15" />
                </span>
              </div>
            </div>
            <div className="field">
              <label className="label" htmlFor="password">
                Password
              </label>
              <div className="control has-icons-right">
                <input
                  className="input"
                  type="password"
                  placeholder="Password"
                  name="password"
                  id="password"
                  onChange={e => updateForm(e)}
                />
                <span className="icon is-small is-right">
                  <FontAwesomeIcon icon={faEyeSlash} fontSize="15" />
                </span>
                <p className="forgotPassword">Forgot your password?</p>
              </div>
            </div>
            <div className="field is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
              <p className="control">
                <button className="button" onClick={signin}>
                  Sign in
                </button>
              </p>
            </div>
            <div className="field is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
              <p className="notRegistered">
                Not registered? <Link to="/register">Create an account</Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn
