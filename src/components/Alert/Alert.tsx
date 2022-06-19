import React, { useState } from "react"

export enum NotificationType {
  isPrimary = "is-primary",
  isDanger = "is-danger",
}
interface ErrorProps {
  error: string
  notificationType?: NotificationType
}

const Alert: React.FC<ErrorProps> = ({
  error,
  notificationType = "is-light",
}) => {
  const [isError, setError] = useState(true)
  const dismissError = () => {
    setError(false)
  }
  return (
    <>
      {isError ? (
        <div className={`notification is-info ${notificationType}`}>
          <button className="delete" onClick={dismissError}></button>
          {error}
        </div>
      ) : null}
    </>
  )
}

export default Alert
