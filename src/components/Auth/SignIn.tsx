import { faEnvelope, faEyeSlash } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import Alert from "../Alert/Alert"
import { useSignIn } from "./hooks"

import "./SignIn.scss"

export interface User {
  username: string
  password: string
}

const SignIn: React.FC = () => {
  const { signIn, error, loading } = useSignIn()

  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  })

  const updateForm = (event: any) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    })
  }

  const submitForm = async () => {
    const user = {
      username: formValues.username,
      password: formValues.password,
    }

    try {
      await signIn(user)
    } catch (error) {
      console.warn(error)
    }
  }

  useEffect(() => {
    console.warn(error)
  }, [error])

  return (
    <div className="card">
      <div className="card-content">
        <div className="content">
          <div className="form">
            {error ? <Alert error={error} /> : null}
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
                <button
                  className={`button ${loading ? " is-loading " : ""}`}
                  onClick={submitForm}
                >
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
