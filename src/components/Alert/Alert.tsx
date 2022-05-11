import React, { useState } from "react"

export enum NotificationType {
  isPrimary = "is-primary",
  isDanger = "is-danfe",
}
interface ErrorProps {
  error: string
}

const Alert: React.FC<ErrorProps> = ({ error }) => {
  const [isError, setError] = useState(true)
  const dismissError = () => {
    setError(false)
  }
  return (
    <>
      {isError ? (
        <div className={`notification is-info is-light`}>
          <button className="delete" onClick={dismissError}></button>
          {error}
        </div>
      ) : null}
    </>
  )
}

export default Alert
