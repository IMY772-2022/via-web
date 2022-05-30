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
      // eslint-disable-next-line no-console
      console.log("db records", items)
      const itemData = items.data.listImageRecords?.items as ImageRecord[]
      // eslint-disable-next-line no-console
      console.log("sb records 2", itemData)
      setDynamoDBItems(itemData)
    } catch (error) {
      return error
    }
  }
  return (
    <div>
      {dynamodDBitems.map(item => {
        return (
          <div key={item.id}>
            <Item key={item.id} imageRecord={item} /> <br />{" "}
          </div>
        )
      })}
    </div>
  )
}

export default Album
