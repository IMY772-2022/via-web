import { Auth } from "aws-amplify"
import React from "react"

import { User } from "./SignIn"

export async function signUp(userInput: User) {
  const { username, password } = userInput
  try {
    const { user } = await Auth.signUp({
      username,
      password,
      attributes: {},
    })
    if (user) {
      return "Successfully sent code to your email"
    }
  } catch (error) {
    return JSON.stringify(error)
  }
}

export async function confirmSignUp(username: string, code: string) {
  try {
    await Auth.confirmSignUp(username, code)
    return "Success! Successfully signed up"
  } catch (error) {
    return JSON.stringify(error)
  }
}

export async function signIn(userInput: User) {
  const { username, password } = userInput
  try {
    const user = await Auth.signIn(username, password)
    if (user) {
      return "Success! Successfully logged in"
    }
  } catch (error) {
    return JSON.stringify(error)
  }
}

export async function signOut() {
  try {
    await Auth.signOut()
    return
  } catch (error) {
    return <p> Error signing out: {error} </p>
  }
}

export async function forgotPassword(username: string) {
  try {
    const password = await Auth.forgotPassword(username)
    if (password) {
      return "Successfully sent reset code to your email"
    }
  } catch (error) {
    return JSON.stringify("error")
  }
}

export async function setNewPassword(user: User, code: string) {
  const { username, password } = user
  try {
    await Auth.forgotPasswordSubmit(username, code, password)
    return "Successfully reset password"
  } catch (error) {
    return JSON.stringify(error)
  }
}

const isBrowser = typeof window !== "undefined"

export const fetchUser = () => {
  if (isBrowser) {
    return localStorage.getItem("username")
  }
  return null
}

export const storeUser = (id: string) => {
  if (isBrowser) {
    localStorage.setItem("username", id)
  }
}

export const clearUser = () => {
  if (isBrowser) {
    localStorage.removeItem("username")
  }
}
