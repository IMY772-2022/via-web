import React from "react"
import { QueryClient, QueryClientProvider } from "react-query"

import { AuthProvider } from "./context/AuthContext/store"
import { ThemeProvider } from "./context/ThemeContext/store"

const queryClient = new QueryClient()

interface RootElementProps {
  element: React.ReactElement[] | React.ReactElement
}

const WrapRootElement: React.FC<RootElementProps> = ({
  element,
}: RootElementProps) => {
  return (
    <>
      <ThemeProvider>
        <AuthProvider>
          <QueryClientProvider client={queryClient}>
            {element}
          </QueryClientProvider>
        </AuthProvider>
      </ThemeProvider>
    </>
  )
}

export default WrapRootElement
