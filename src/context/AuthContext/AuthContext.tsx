// import React, { createContext } from "react"

// export const AuthContext = createContext(INITIAL_VALUES)

// import React, { createContext, useState } from "react"

// const defaultState = {
//   isAuthenticated: false,
//   // eslint-disable-next-line @typescript-eslint/no-empty-function
//   setIsAuthenticated: () => {},
// }

// export const AuthContext = createContext(defaultState)

// type AuthProviderProps = {
//   children: React.ReactNode | React.ReactNode[]
// }

// const AuthProvider = ({ children }: AuthProviderProps) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false)

//   return (
//     <AuthContext.Provider
//       value={{
//         isAuthenticated,
//         setIsAuthenticated: () => setIsAuthenticated(!isAuthenticated),
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   )
// }

// export default AuthProvider
