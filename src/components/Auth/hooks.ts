import { Auth } from "aws-amplify"
import { navigate } from "gatsby"
import { useContext } from "react"

import { AuthContext } from "../../context/AuthContext"
import { User } from "./SignIn"

export const useSignUp = (): ((payload: User) => Promise<void>) => {
  const signIn = useSignIn()

  const signUp = async (payload: User) => {
    const { username, password } = payload
    try {
      const { user } = await Auth.signUp({ username, password, attributes: {} })

      if (user) {
        await signIn({
          username,
          password,
        })
      }
    } catch (error) {
      {
        error
      }
    }
  }

  return signUp
}

export const useSignIn = (): ((payload: User) => Promise<void>) => {
  const authContext = useContext(AuthContext)

  const signIn = async (payload: User) => {
    const { username, password } = payload

    try {
      const signedIn = await Auth.signIn({ username, password })

      if (signedIn) {
        localStorage.setItem("username", signedIn.username)
        authContext.setToken(signedIn.username)
        authContext.setIsAuthenticated(true)
        navigate("/")
      }
    } catch (error) {
      {
        error
      }
    }
  }

  return signIn
}

export const useUser = (): string | null => {
  return localStorage.getItem("username")
}

export const useSignOut = (): (() => Promise<void>) => {
  const signOut = async () => {
    try {
      await Auth.signOut()
      localStorage.removeItem("username")
      navigate("/")
    } catch (error) {
      {
        error
      }
    }
  }

  return signOut
}
