import React, { useEffect, useState } from "react"
import { API, graphqlOperation } from "aws-amplify"

import { listImageRecords } from "../../graphql/queries"
import { ListImageRecordsQuery } from "../../API"

interface ImageRecord {
  id: string
  userId: string
  filepath: string
  labels: string
}

const Album: React.FC = () => {
  const [images, setImages] = useState([] as ImageRecord[])
  useEffect(() => {
    fetchImages()
  }, [])
  const fetchImages = async () => {
    try {
      const imageData = (await API.graphql(
        graphqlOperation(listImageRecords)
      )) as { data: ListImageRecordsQuery }

      const imageList = imageData.data.listImageRecords?.items as ImageRecord[]
      setImages(imageList)
    } catch (error) {
      ;<p> {error} </p>
    }
  }
  return (
    <div>
      <p>{images}</p>
    </div>
  )
}

export default Album
