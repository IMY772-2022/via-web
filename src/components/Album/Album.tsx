import React, { useEffect, useState } from "react"
import { API, graphqlOperation } from "aws-amplify"

import { listImageRecords } from "../../graphql/queries"
import { ListImageRecordsQuery } from "../../API"

interface ImageRecord {
  id: string
  filepath: string
  labels: string
}

const Album: React.FC = () => {
  const [dynamodDBitems, setDynamoDBItems] = useState([] as ImageRecord[])
  useEffect(() => {
    fetchImages()
  }, [])
  const fetchImages = async () => {
    try {
      const items = (await API.graphql(graphqlOperation(listImageRecords))) as {
        data: ListImageRecordsQuery
      }
      const itemData = items.data.listImageRecords?.items as ImageRecord[]
      setDynamoDBItems(itemData)
    } catch (error) {
      return error
    }
  }
  return (
    <div>
      database data:
      {dynamodDBitems.map(item => {
        return <p key={item.id}>{JSON.stringify(item)}</p>
      })}
    </div>
  )
}

export default Album
