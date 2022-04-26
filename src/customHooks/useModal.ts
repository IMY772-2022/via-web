import { useState } from "react"

const useModal = () => {
  const [isActive, setIsActive] = useState<boolean>(false)

  function toggle() {
    setIsActive(!isActive)
  }

  return {
    isActive,
    toggle,
  }
}

export default useModal
