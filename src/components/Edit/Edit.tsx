import React from "react"
//import type { PageProps } from "gatsby"
//import { ImageRecordType } from "../../../types/album-record"

const Edit = (data: PageProps["location"]) => {
  // eslint-disable-next-line no-console
  //console.log(data)
  //const cleanData = data.location.labels.replaceAll("=", ":")
  // eslint-disable-next-line no-console
  console.log("parsed data", JSON.parse(data.location.labels))
  const labelsArray = JSON.parse(data.location.labels)
  // try {
  //   JSON.parse("parsed data", data)
  // } catch (e) {
  //   // eslint-disable-next-line no-console
  //   console.log(e)
  // }
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
              {/* eslint-disable-next-line no-console */}
              {labelsArray.map((item: any) => console.log(item.name))}
              {labelsArray.map((item: any) => {
                return <input key={item.id} value={item.name}></input>
              })}
            </div>
            <button>Update</button>
            <button>cancel</button>
          </div>
        </>
      )}
    </>
  )
  return editData
}

export default Edit
