import React from "react"
//import { labelImage } from "../PhotoAnalysis/utils"

interface EditProps {
  location: any
  //imagerec
}

const Edit = ({ location }: EditProps) => {
  //const
  const { state = {} } = location
  const { item } = state
  // const [imageData, setImageData] = useState<ImageData | undefined>(undefined)
  // let labels: string[] = [""]
  // let labelData: LabelType[] = []
  // const [isLoading, setIsLoading] = useState(false)
  // const [isError, setError] = useState(false)
  //const renderImageLabels = () => {
  //const img = new Image()
  //img.src = URL.createObjectURL(item.filepath)

  // const imageData: ImageData = {
  //   imageSrc: img.src,
  //   height: img.height,
  //   width: img.width,
  //   file: file,
  // }

  //   if (isLoading) return <span className="loader"></span>
  //   else if (imageData) return labelImage(labelData, imageData)
  //   else return null
  // }
  // eslint-disable-next-line no-console

  {
    // eslint-disable-next-line no-console
    item ? console.log(item) : null
  }
  const editData = (
    <div>
      {/* {imageData !== undefined ? (
              <div className="card-image">
                <img src={imageData.imageSrc} alt="Uploaded preview" />
              </div>
            ) : null}
            <div className="card-content">
              <div className="content">
                <div className="tags are-medium">{renderImageLabels()}</div>
              </div>
            </div> */}
    </div>
  )
  return editData
}

export default Edit
