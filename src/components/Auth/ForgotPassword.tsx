import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { faEye } from "@fortawesome/free-regular-svg-icons"

import { forgotPassword, setNewPassword } from "./utils"
import { Link } from "gatsby"
import "./Register.scss"

const ForgotPassword: React.FC = () => {
  const [displayConfirmationCodeForm, setDisplayConfirmationCodeForm] =
    useState(true)

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

  const getConfirmationCode = () => {
    setDisplayError({
      isError: false,
      message: "",
    })
    const email = formValues.username
    forgotPassword(email).then(message => {
      setDisplayError({
        isError: true,
        message: message as string,
      })
    })
    setDisplayConfirmationCodeForm(false)
  }

  const submitForgotPassword = () => {
    setDisplayError({
      isError: false,
      message: "",
    })
    if (
      regex.test(formValues.password) &&
      regex.test(formValues.confirmPassword)
    ) {
      confirmSubmit()
    } else if (formValues.password !== formValues.confirmPassword) {
      return setDisplayError({
        isError: true,
        message: "Passwords do not match",
      })
    } else {
      return setDisplayError({
        isError: true,
        message: "Please refer to password specifications",
      })
    }
  }

  const confirmSubmit = () => {
    const user = {
      username: formValues.username,
      password: formValues.password,
    }
    setNewPassword(user, formValues.code).then(message => {
      setDisplayError({
        isError: true,
        message: message as string,
      })
    })
  }

  const getConfirmationCodeForm = (
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
              <div className="field">
                <div className="field is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
                  <p className="control">
                    <button className="button" onClick={getConfirmationCode}>
                      Submit
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  const forgotPasswordForm = (
    <div className="card">
      <div className="card-content">
        <div className="content">
          <div className="form">
            <div className="field">
              {displayError.isError ? (
                <div className={`notification is-danger`}>
                  <button className="delete" onClick={dismissError}></button>
                  {displayError.message}
                </div>
              ) : null}
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
            <div className="field is-size-7 color-primary">
              Passwords must contain 8 characters and at least 1 uppercase, 1
              lowercase, 1 number and 1 special character.
            </div>
            <div className="field">
              <label className="label" htmlFor="password">
                New password
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
                  <button className="button" onClick={submitForgotPassword}>
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
      {displayConfirmationCodeForm ? getConfirmationCodeForm : null}{" "}
      {!displayConfirmationCodeForm ? forgotPasswordForm : null}
    </div>
  )
}

export default ForgotPassword
