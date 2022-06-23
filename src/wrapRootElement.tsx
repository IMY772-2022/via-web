import React from "react"
import { QueryClient, QueryClientProvider } from "react-query"

import { AuthProvider } from "./context/store"

const queryClient = new QueryClient()

interface RootElementProps {
  element: React.ReactElement[] | React.ReactElement
}

const WrapRootElement: React.FC<RootElementProps> = ({
  element,
}: RootElementProps) => {
  return (
    <>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          {element}
        </QueryClientProvider>
      </AuthProvider>
    </>
  )
}

export default WrapRootElement
