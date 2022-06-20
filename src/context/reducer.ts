import { useCallback, useReducer } from "react"

type AuthActions = {
  payload: any
  type: "SIGN_IN" | "SIGN_OUT"
}

const reducer = (state: AuthState, action: AuthActions) => {
  const { payload, type } = action

  switch (type) {
    case "SIGN_IN":
      return {
        ...state,
        userId: payload.username,
      }
    case "SIGN_OUT":
      return {
        ...state,
        userId: payload,
      }
    default:
      return state
  }
}

const emptyFn = (): void | Promise<void> => {
  console.warn(`StoreContext not ready!`)
}

type AuthState = {
  userId: string
  signIn: (id: string) => void
  signOut: () => void
}

export const INITIAL_VALUES: AuthState = {
  userId: "",
  signIn: () => emptyFn,
  signOut: () => emptyFn,
}

export const AuthReducer = () => {
  const [auth, dispatch] = useReducer(reducer, INITIAL_VALUES)

  const signIn = useCallback((userId: string | null) => {
    dispatch({ type: "SIGN_IN", payload: userId })
  }, [])

  const signOut = useCallback(() => {
    dispatch({ type: "SIGN_OUT", payload: null })
  }, [])

  return { auth, signIn, signOut }
}
