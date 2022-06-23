import { Auth } from "aws-amplify"
import { navigate } from "gatsby"
import { useCallback, useContext, useState } from "react"

import { AuthContext } from "../../context/store"
import { User } from "./SignIn"
import { clearUser, storeUser } from "./utils"

export const useSignUp = (): ((payload: User) => Promise<void>) => {
  const { signIn } = useSignIn()

  const signUp = async (payload: User) => {
    const { username, password } = payload
    try {
      const { user } = await Auth.signUp({ username, password, attributes: {} })

      if (user) {
        await signIn({ username, password })
      }
    } catch (error) {
      {
        error
      }
    }
  }

  return signUp
}

export const useSignIn = () => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<any>({})
  const [error, setError] = useState<string | null>(null)
  const authContext = useContext(AuthContext)

  const signIn = useCallback(
    async (payload: User) => {
      const { username, password } = payload
      try {
        setLoading(true)
        const user = await Auth.signIn(username, password)
        if (user) {
          setData(user)
          storeUser(user.username)
          authContext.signIn(user.username)
          navigate("/photo-analysis")
        }
      } catch (error: any) {
        setError(error?.message as string)
      } finally {
        setLoading(false)
      }
    },
    [authContext]
  )

  return { signIn, error, data, loading }
}

export const useSignOut = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const authContext = useContext(AuthContext)

  const signOut = useCallback(async () => {
    try {
      setLoading(true)
      const user = await Auth.signOut()
      if (user === undefined) {
        authContext.signOut()
        clearUser()
        setLoading(false)
        navigate("/photo-analysis")
      }
    } catch (error: any) {
      setError(error?.message as string)
    } finally {
      setLoading(false)
    }
  }, [authContext])

  return { signOut, error, loading }
}
