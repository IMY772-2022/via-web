import React, { useEffect, useState } from "react"
import { API, graphqlOperation } from "aws-amplify"

import { listImageRecords } from "../../graphql/queries"
import { ListImageRecordsQuery } from "../../API"
import "./Album.scss"
import Item from "./Item"

export interface ImageRecord {
  id: string
  filepath: string
  labels: string
  owner: string
  createdAt: string
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
  const sortedDynamoDBItems = dynamodDBitems.sort((item1, item2) => {
    return Date.parse(item2.createdAt) - Date.parse(item1.createdAt)
  })

  return (
    <>
      <h5 className="is-size-5">My Album</h5>
      <div className="">
        <h6 className="is-size-6">Total items: {dynamodDBitems.length}</h6>
        <div className="grid">
          {sortedDynamoDBItems.map(item => {
            return (
              <div key={item.id} className="column">
                <Item imageRecord={item} dynamoDbItems={dynamodDBitems} />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Album
