import React, { createContext, useMemo, useState } from "react"

const emptyFn = (): void | Promise<void> => {
  console.warn(`Context not ready`)
}

interface AuthProvider {
  userId: string | null
  setUserId: (userId: string | null) => void
}

export const INITIAL_VALUES: AuthProvider = {
  userId: null,
  setUserId: emptyFn,
}

export const useAuthState = (): AuthProvider => {
  const [userId, setUserId] = useState<string | null>(INITIAL_VALUES.userId)

  return {
    userId,
    setUserId,
  }
}

export const AuthContext = createContext(INITIAL_VALUES)

type AuthProviderProps = {
  children: React.ReactNode | React.ReactNode[]
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
