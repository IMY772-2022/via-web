import React, { createContext, useMemo } from "react"

import { AuthReducer, INITIAL_VALUES } from "./reducer"

export const AuthContext = createContext(INITIAL_VALUES)

type AuthProviderProps = {
  children: React.ReactNode | React.ReactNode[]
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const { auth, ...authActions } = AuthReducer()

  const values = useMemo(
    () => ({
      ...auth,
      ...authActions,
    }),
    [auth, authActions]
  )

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}
