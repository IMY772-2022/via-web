import { useQuery } from "react-query"
import { getFilePathFromS3 } from "../PhotoAnalysis/utils"

export const useGetFilePath = (filepath: string) => {
  const { isLoading, data } = useQuery("presignedURL", async () => {
    return await getFilePathFromS3(filepath)
  })

  if (!isLoading) {
    return data
  }
}
