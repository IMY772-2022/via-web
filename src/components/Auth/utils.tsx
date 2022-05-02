import React from "react"
import { Auth } from "aws-amplify"

import { User } from "./SignIn"

export async function signUp(userInput: User) {
  const { username, password } = userInput
  try {
    const { user } = await Auth.signUp({
      username,
      password,
      attributes: {},
    })
    return <p> {user} </p>
  } catch (error) {
    ;<p> Error: {error} </p>
  }
}

export async function confirmSignUp(username: string, code: string) {
  try {
    await Auth.confirmSignUp(username, code)
    return <p> Signin confirmed </p>
  } catch (error) {
    ;<p> Error confirming signup: {error} </p>
  }
}

export async function signIn(userInput: User) {
  const { username, password } = userInput
  try {
    const user = await Auth.signIn(username, password)
    if (user) <p> Success! Successfully logged in</p>
  } catch (error) {
    ;<p> Error signing in: {error} </p>
  }
}

export async function signOut() {
  try {
    await Auth.signOut()
    return
  } catch (error) {
    ;<p> Error signing out: {error} </p>
  }
}
