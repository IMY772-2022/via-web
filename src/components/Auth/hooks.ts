import { Auth } from "aws-amplify"
import { navigate } from "gatsby"
import { useCallback, useContext, useState } from "react"
import { AuthContextTest } from "../../context/store"

import { User } from "./SignIn"
import { AuthContext } from "./store"

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
  const authContextTest = useContext(AuthContextTest)

  const signIn = useCallback(
    async (payload: User) => {
      const { username, password } = payload
      try {
        setLoading(true)
        const user = await Auth.signIn(username, password)
        if (user) {
          setData(user)
          authContextTest.signIn(user)
        }
      } catch (error: any) {
        setError(error?.message as string)
      } finally {
        setLoading(false)
      }
    },
    [authContextTest]
  )

  // useEffect(() => {
  //   async function signIn(payload: User) {
  //     const { username, password } = payload

  //     try {
  //       setLoading(true)
  //       const { user } = await Auth.signIn(username, password)
  //       console.log(authContextTest)
  //       if (user) {
  //         authContext.setUserId(user.username)
  //       }
  //     } catch (error) {
  //       {
  //         error
  //       }
  //     } finally {
  //       setLoading(false)
  //     }
  //   }
  //   signIn({
  //     username: "",
  //     password: "",
  //   })
  // }, [])

  return { signIn, error, data, loading }
}

// export const useSignIn = (): ((payload: User) => Promise<void>) => {
//   const [loading, setLoading] = useState(false)
//   const authContext = useContext(AuthContext)
//   const authContextTest = useContext(AuthContextTest)

//   const signIn = async (payload: User) => {
//     const { username, password } = payload

//     try {
//       setLoading(true)
//       const user = await Auth.signIn({ username, password })
//       console.log(authContextTest)
//       if (user) {
//         authContext.setUserId("user")
//         navigate("/")
//       }
//     } catch (error) {
//       {
//         error
//       }
//     } finally {
//       setLoading(false)
//     }
//   }

//   return { signIn }
// }

export const useUser = (): string | null => {
  return localStorage.getItem("username")
}

export const useSignOut = (): (() => Promise<void>) => {
  const authContext = useContext(AuthContext)
  const signOut = async () => {
    try {
      await Auth.signOut().then(() => {
        authContext.setUserId(null)
        navigate("/")
      })
    } catch (error) {
      {
        error
      }
    }
  }

  return signOut
}
