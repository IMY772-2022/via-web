import { navigate } from "gatsby"
import React from "react"
import { ImageRecord } from "./Album"

interface ItemProps {
  imageRecord: ImageRecord
}

const Item: React.FC<ItemProps> = props => {
  const item = props.imageRecord
  const { filepath } = item
  return (
    <div>
      <div className="card">
        <div className="card-image">
          <img src={filepath} alt="Stored file from database" />
        </div>
        <div className="card-content">
          <button
            onClick={() => {
              navigate("/edit", { state: { item } })
            }}
            className="button is-light"
          >
            {" "}
            Edit
          </button>
        </div>
      </div>
    </div>
  )
}

export default Item
