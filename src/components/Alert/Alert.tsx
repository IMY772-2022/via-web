import React, { useState } from "react"

export enum NotificationType {
  isSuccess = "is-success",
  isError = "is-danger",
}
interface ErrorProps {
  message: string
  notificationType?: NotificationType
}

const Alert: React.FC<ErrorProps> = ({
  message,
  notificationType = "is-light",
}) => {
  const [isError, setError] = useState(true)
  const dismissError = () => {
    setError(false)
  }
  return (
    <>
      {isError ? (
        <div className={`notification ${notificationType}`}>
          <button className="delete" onClick={dismissError}></button>
          {message}
        </div>
      ) : null}
    </>
  )
}

export default Alert
