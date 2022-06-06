import React from "react"
import { updateDynamo } from "../PhotoAnalysis/utils"

const Edit = (data: PageProps["location"]) => {
  const labelsArray = JSON.parse(data.location.labels)
  const updateItem = () => {
    updateDynamo(data.location.id)
  }
  const editData = (
    <>
      {location == undefined ? (
        <h2>no display</h2>
      ) : (
        <>
          <div className="card-image">
            <img src={data.location.filepath} alt="not found" />
          </div>
          <div className="card-content">
            <div className="content">
              {labelsArray.map((item: any) => {
                return <input key={item.id} value={item.name}></input>
              })}
            </div>
            <button onClick={updateItem}>Update</button>
            <button>cancel</button>
          </div>
        </>
      )}
    </>
  )
  return editData
}

export default Edit
