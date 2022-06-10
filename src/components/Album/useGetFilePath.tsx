import { useQuery } from "react-query"
import { getFilePathFromS3 } from "../PhotoAnalysis/utils"

export const useGetFilePath = (filepath: string) => {
  const { isLoading, data } = useQuery(["presignedURL", filepath], async () => {
    return await getFilePathFromS3(filepath)
  })

  if (!isLoading) {
    return data
  }
}
