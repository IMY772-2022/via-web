import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { faEye } from "@fortawesome/free-regular-svg-icons"
import Alert, { NotificationType } from "../Alert/Alert"

import { confirmSignUp, signUp } from "./utils"
import "./Register.scss"
import { Link } from "gatsby"

const Register: React.FC = () => {
  const [displaySignUpForm, setDisplaySignUpForm] = useState(true)

  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    code: "",
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

  const dismissError = () => {
    setDisplayError({
      isError: false,
      message: "",
    })
  }

  const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/

  const signin = () => {
    if (
      regex.test(formValues.password) &&
      regex.test(formValues.confirmPassword)
    ) {
      register()
    } else if (formValues.password !== formValues.confirmPassword) {
      return setDisplayError({
        isError: true,
        message: "passwords do not match",
      })
    } else {
      return setDisplayError({
        isError: true,
        message: "Please refer to password specifications",
      })
    }
  }

  const register = () => {
    const user = {
      username: formValues.username,
      password: formValues.password,
    }
    signUp(user).then(message => {
      setDisplayError({
        isError: true,
        message: message as string,
      })
    })
    setDisplaySignUpForm(false)
  }

  const submitConfirmation = () => {
    setDisplayError({
      ...displayError,
      isError: false,
    })
    confirmSignUp(formValues.username, formValues.code).then(message => {
      setDisplayError({
        isError: true,
        message: message as string,
      })
    })
  }

  const signUpForm = (
    <div className="card">
      <div className="card-content">
        <div className="content">
          <div className="form">
            {displayError.isError ? (
              <div className={`notification is-danger`}>
                <button className="delete" onClick={dismissError}></button>
                {displayError.message}
              </div>
            ) : null}
            <div className="field">
              <label className="label" htmlFor="email">
                Email
              </label>
              <div className="control has-icons-left">
                <input
                  className="input"
                  type="text"
                  placeholder="Email"
                  name="username"
                  id="email"
                  onChange={e => updateForm(e)}
                />
                <span className="icon is-small is-left">
                  <FontAwesomeIcon icon={faEnvelope} fontSize="15" />
                </span>
              </div>
            </div>
            <div>
              Passwords must contain 8 characters and at least 1 uppercase, 1
              lowercase, 1 number and 1 special character.
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
                  <FontAwesomeIcon icon={faEye} fontSize="15" />
                </span>
              </div>
            </div>
            <div className="field">
              <label className="label" htmlFor="confirmPassword">
                Confirm password
              </label>
              <div className="control has-icons-right">
                <input
                  className="input"
                  type="password"
                  placeholder="Confirm password"
                  name="confirmPassword"
                  id="confirmPassword"
                  onChange={e => updateForm(e)}
                />
                <span className="icon is-small is-right">
                  <FontAwesomeIcon icon={faEye} fontSize="15" />
                </span>
              </div>
            </div>
            <div className="field">
              <div className="field is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
                <p className="control">
                  <button className="button" onClick={signin}>
                    Register
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  const confirmSignUpForm = (
    <div className="card">
      <div className="card-content">
        <div className="content">
          <div className="form">
            <div className="field">
              {displayError.isError ? (
                <Alert
                  message={displayError.message}
                  notificationType={NotificationType.isError}
                />
              ) : null}
              <p>
                {" "}
                We have sent a confirmation code to your email. Please enter it
                below:{" "}
              </p>
            </div>
            <div className="field">
              <label className="label" htmlFor="signUpCode">
                Confirm signup code
              </label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Code"
                  name="code"
                  id="signUpCode"
                  onChange={e => updateForm(e)}
                />
              </div>
            </div>
            <div className="field">
              <div className="field is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
                <p className="control">
                  <button className="button" onClick={submitConfirmation}>
                    Confirm
                  </button>
                </p>
              </div>
            </div>
            <div className="field is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
              <p className="signinPage">
                Continue to <Link to="/signin">Sign in</Link> page
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  return (
    <div>
      {displaySignUpForm ? signUpForm : null}{" "}
      {!displaySignUpForm ? confirmSignUpForm : null}
    </div>
  )
}

export default Register
