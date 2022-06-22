import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { faEye } from "@fortawesome/free-regular-svg-icons"
import Alert, { NotificationType } from "../Alert/Alert"

import { forgotPasswordSubmit } from "./utils"
import "./Register.scss"

const ForgotPassword: React.FC = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
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

  const submitNewPassword = () => {
    setDisplayError({
      ...displayError,
      isError: false,
    })
    forgotPasswordSubmit(
      formValues.username,
      formValues.code,
      formValues.password
    ).then(message => {
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
            <Alert
              message={"We're sent you a confirmation code, check your email"}
              notificationType={NotificationType.isSuccess}
            />
            {displayError.isError ? (
              <Alert
                message={displayError.message}
                notificationType={NotificationType.isError}
              />
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
            <div className="field">
              <label className="label" htmlFor="password">
                New Password
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
              <label className="label" htmlFor="code">
                Confirmation Code
              </label>
              <div className="control has-icons-right">
                <input
                  className="input"
                  type="password"
                  placeholder=""
                  name="code"
                  id="code"
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
                  <button className="button" onClick={submitNewPassword}>
                    Reset password
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return <div>{signUpForm}</div>
}

export default ForgotPassword
