import React from "react"
//import type { PageProps } from "gatsby"
//import { ImageRecordType } from "../../../types/album-record"

const Edit = (data: PageProps["location"]) => {
  // eslint-disable-next-line no-console
  //console.log(data)
  const cleanData = data.location.labels.replaceAll("=", ":")
  // eslint-disable-next-line no-console
  console.log(cleanData)
  try {
    JSON.parse(cleanData)
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e)
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
              {/* <p>{json.parse(data.location.labels)}</p> */}
              <p>hello</p>
            </div>
          </div>
        </>
      )}
    </>
  )
  return editData
}

export default Edit
