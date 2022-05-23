import React, { useState } from "react"
import Alert from "../Alert/Alert"

import { confirmSignUp, signUp } from "./utils"

const Register: React.FC = () => {
  const [displaySignUpForm, setDisplaySignUpForm] = useState(true)

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

  const signin = () => {
    setDisplayError({
      ...displayError,
      isError: false,
    })
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
    <div className="form">
      {displayError.isError ? <Alert error={displayError.message} /> : null}
      <div className="field">
        <label className="label" htmlFor="email">
          Email
        </label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Email"
            name="username"
            id="email"
            onChange={e => updateForm(e)}
          />
        </div>
      </div>
      <div className="field">
        <label className="label" htmlFor="password">
          Password
        </label>
        <div className="control">
          <input
            className="input"
            type="password"
            placeholder="Password"
            name="password"
            id="password"
            onChange={e => updateForm(e)}
          />
        </div>
      </div>
      <div className="field">
        <label className="label" htmlFor="confirmPassword">
          Confirm password
        </label>
        <div className="control">
          <input
            className="input"
            type="password"
            placeholder="Confirm password"
            name="confirmPassword"
            id="confirmPassword"
          />
        </div>
      </div>
      <div className="field">
        <p className="control">
          <button className="button" onClick={signin}>
            Register
          </button>
        </p>
      </div>
    </div>
  )
  const confirmSignUpForm = (
    <div className="form">
      {displayError.isError ? <Alert error={displayError.message} /> : null}
      <p>
        {" "}
        We have sent a confirmation code to your email. Please enter it below:{" "}
      </p>
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
        <p className="control">
          <button className="button" onClick={submitConfirmation}>
            Confirm
          </button>
        </p>
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
