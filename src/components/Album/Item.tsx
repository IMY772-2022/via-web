import React from "react"
import { useQuery } from "react-query"
import Alert from "../Alert/Alert"

import { deleteFromDynamo, getFilePathFromS3 } from "../PhotoAnalysis/utils"
import { ImageRecord } from "./Album"

interface ItemProps {
  imageRecord: ImageRecord
  dynamoDbItems: ImageRecord[]
  setDynamoDBItems: React.Dispatch<React.SetStateAction<ImageRecord[]>>
}

const Item: React.FC<ItemProps> = props => {
  const item = props.imageRecord
  const { setDynamoDBItems, dynamoDbItems } = props
  const { filepath } = item

  // return await getFilePathFromS3(filepath)?.then(response => {
  //   return response
  // })
  let url
  const { isLoading, data } = useQuery("presignedURL", async () => {
    try {
      await getFilePathFromS3(filepath)
    } catch (error) {
      ;<Alert error={error as string} />
    }
  })
  if (!isLoading) {
    url = data ?? ""
  }

  const deleteItem = () => {
    deleteFromDynamo(item.id)
    const updatedItemArray = dynamoDbItems.filter(dynamoDbItem => {
      return dynamoDbItem.id != item.id
    })
    setDynamoDBItems(updatedItemArray)
  }
  return (
    <div>
      <div className="card">
        <div className="card-image">
          <img src={url} alt="Stored file from database" />
        </div>
        <div className="card-content">
          <button className="button is-light"> Edit</button>
        </div>
        <div className="card-content">
          <button className="button is-light" onClick={deleteItem}>
            {" "}
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default Item
