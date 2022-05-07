import React, { useState } from "react"

import { confirmSignUp, signUp } from "./utils"

const Register: React.FC = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
    code: "",
  })

  const updateForm = (event: any) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    })
  }

  const signin = () => {
    const user = {
      username: formValues.username,
      password: formValues.password,
    }
    signUp(user)
  }

  const submitConfirmation = () => {
    confirmSignUp(formValues.username, formValues.code)
  }

  const signUpForm = (
    <div className="form">
      <div className="field">
        <label className="label" htmlFor="email">
          Email
        </label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="email"
            name="username"
            id="email"
            onChange={e => updateForm(e)}
          />
        </div>
      </div>
      <div className="field">
        <label className="label" htmlFor="confirmEmail">
          Confirm Email
        </label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Confirm email"
            name="confirmEmail"
            id="confirmEmail"
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
            type="text"
            placeholder="Password"
            name="password"
            id="password"
            onChange={e => updateForm(e)}
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
      {signUpForm}
      {confirmSignUpForm}
    </div>
  )
}

export default Register
