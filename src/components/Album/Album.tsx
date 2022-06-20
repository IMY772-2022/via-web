import React, { useEffect, useState } from "react"
import { API, graphqlOperation } from "aws-amplify"

import { listImageRecords } from "../../graphql/queries"
import { ListImageRecordsQuery } from "../../API"
import Item from "./Item"

export interface ImageRecord {
  id: string
  filepath: string
  labels: string
  owner: string
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
      <p> Total items: {dynamodDBitems.length} </p>
      {dynamodDBitems.map(item => {
        return (
          <Item
            key={item.id}
            imageRecord={item}
            dynamoDbItems={dynamodDBitems}
            setDynamoDBItems={setDynamoDBItems}
          />
        )
      })}
    </div>
  )
}

export default Album
