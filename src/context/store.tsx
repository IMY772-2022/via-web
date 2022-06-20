import React, { createContext, useMemo } from "react"

import { AuthReducer, INITIAL_VALUES } from "./reducer"

export const AuthContextTest = createContext(INITIAL_VALUES)

type AuthProviderProps = {
  children: React.ReactNode | React.ReactNode[]
}

export const AuthProviderTest = ({ children }: AuthProviderProps) => {
  const { auth, ...authActions } = AuthReducer()

  const values = useMemo(
    () => ({
      ...auth,
      ...authActions,
    }),
    [auth, authActions]
  )

  return (
    <AuthContextTest.Provider value={values}>
      {children}
    </AuthContextTest.Provider>
  )
}
