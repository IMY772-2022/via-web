import React, { createContext, useMemo, useState } from "react"

const emptyFn = (): void | Promise<void> => {
  console.warn(`AuthContext not ready!`)
}

interface AuthProvider {
  isAuthenticated: boolean
  setIsAuthenticated: (isAuthenticated: boolean) => void
  token: string
  setToken: (token: string) => void
}

export const INITIAL_VALUES: AuthProvider = {
  isAuthenticated: false,
  setIsAuthenticated: emptyFn,
  token: "",
  setToken: emptyFn,
}

export const useAuthState = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    INITIAL_VALUES.isAuthenticated
  )
  const [token, setToken] = useState(INITIAL_VALUES.token)

  return {
    isAuthenticated,
    setIsAuthenticated,
    token,
    setToken,
  }
}

export const AuthContext = createContext(INITIAL_VALUES)

type AuthProviderProps = {
  children: React.ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const { ...authState } = useAuthState()

  const values = useMemo(
    () => ({
      ...authState,
    }),
    [authState]
  )

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}
