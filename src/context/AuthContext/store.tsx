import React, { createContext, useEffect, useMemo } from "react"

import { fetchUser } from "../../components/Auth/utils"
import { AuthReducer, INITIAL_VALUES } from "./reducer"

export const AuthContext = createContext(INITIAL_VALUES)

type AuthProviderProps = {
  children: React.ReactNode | React.ReactNode[]
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const { auth, ...authActions } = AuthReducer()

  useEffect(() => {
    authActions.signIn(fetchUser())
  }, [])

  const values = useMemo(
    () => ({
      ...auth,
      ...authActions,
    }),
    [auth, authActions]
  )

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}
