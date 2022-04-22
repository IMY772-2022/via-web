import { Label } from "./PhotoAnalysis"

export const isValidFileType = (image: File) => {
  if (
    image.type === "image/png" ||
    image.type === "image/jpeg" ||
    image.type === "image/jpg"
  )
    return true
  else return false
}
