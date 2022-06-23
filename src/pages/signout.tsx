import { useEffect } from "react"
import { useSignOut } from "../components/Auth/hooks"

const SignOutPage = () => {
  const { signOut } = useSignOut()

  useEffect(() => {
    signOut()
  }, [])

  return null
}

export default SignOutPage
