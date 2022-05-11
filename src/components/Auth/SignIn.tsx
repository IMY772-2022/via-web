import React, { useState } from "react"
import Alert from "../Alert/Alert"

import { signIn } from "./utils"

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
    <div className="form">
      {displayError.isError ? <Alert error={displayError.message} /> : null}
      <div className="field">
        <label className="label" htmlFor="username">
          Username
        </label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="username"
            name="username"
            id="username"
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
            Sign in
          </button>
        </p>
      </div>
    </div>
  )
}

export default SignIn
