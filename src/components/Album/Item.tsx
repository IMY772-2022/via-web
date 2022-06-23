import { navigate } from "gatsby"
import React from "react"

import { ImageRecord } from "./Album"
import "./Item.scss"
import { useGetFilePath } from "./useGetFilePath"

interface ItemProps {
  imageRecord: ImageRecord
  dynamoDbItems: ImageRecord[]
}

const Item: React.FC<ItemProps> = props => {
  const item = props.imageRecord

  const accessibleOnClick = (e: any) => {
    if (e.keyCode === 13) {
      navigate("/edit", { state: { item } })
    }
  }
  const { filepath } = item
  return (
    <>
      <div
        className="card-image item rounded-lg"
        onKeyDown={accessibleOnClick}
        role="button"
        tabIndex={0}
        onClick={() => {
          navigate("/edit", { state: { item } })
        }}
      >
        <img
          className="rounded-md"
          src={useGetFilePath(filepath)}
          alt="Stored file from the database"
        />
      </div>
    </>
  )
}

export default Item
