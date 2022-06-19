import React, { useEffect, useState } from "react"
import { API, graphqlOperation } from "aws-amplify"

import { listImageRecords } from "../../graphql/queries"
import { ListImageRecordsQuery } from "../../API"
import Item from "./Item"
import "./Album.scss"

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
      <p className="maintitle">My Album</p>
      <br />
      <div className="card big-card">
        <br />
        <p className="secondarytitle"> Total items: {dynamodDBitems.length} </p>
        {dynamodDBitems.map(item => {
          return (
            <div className="bigcarditem" key={item.id}>
              <Item
                key={item.id}
                imageRecord={item}
                dynamoDbItems={dynamodDBitems}
                setDynamoDBItems={setDynamoDBItems}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Album
