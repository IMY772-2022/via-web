import React from "react"

interface RootElementProps {
  element: React.ReactElement[] | React.ReactElement
}

const WrapRootElement: React.FC<RootElementProps> = ({
  element,
}: RootElementProps) => {
  return <>{element}</>
}

export default WrapRootElement
