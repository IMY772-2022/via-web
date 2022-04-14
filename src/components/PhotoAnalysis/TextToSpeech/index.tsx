import React from "react"
import { useState } from "react"
import { Predictions } from "@aws-amplify/predictions"
import Button from "../../Button"
import { useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons"

interface TextToSpeechProps {
  labels: string[]
  disabled?: boolean
}

const TextToSpeech: React.FC<TextToSpeechProps> = props => {
  const { labels, disabled = false } = props
  const [pollyResponse, setPollyResponse] = useState("...")
  const [audioStream, setAudioStream] = useState("Default")

  const [isLoading, setIsLoading] = useState(false)
  const [classList, setClassList] = useState(["button", "is-light"])

  const generateTextToSpeech = () => {
    setIsLoading(true)
    const textToGenerateSpeech = labels.join(",")
    setPollyResponse("Generating audio")
    Predictions.convert({
      textToSpeech: {
        source: {
          text: textToGenerateSpeech,
        },
      },
    })
      .then(response => {
        setAudioStream(response.speech.url)
        setPollyResponse("Audio generation complete, press play")
        setIsLoading(false)
      })
      .catch(error => setPollyResponse(JSON.stringify(error, null, 2)))
  }

  useEffect(() => {
    if (isLoading) {
      setClassList(["button", "is-loading", "is-light"])
    } else {
      setClassList(["button", "is-light"])
    }
  }, [isLoading])

  const play = () => {
    const audio = new Audio()
    audio.src = audioStream
    audio.play()
  }

  return (
    <div className="is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
      <button
        className={classList.flatMap(className => className).join(" ")}
        disabled={disabled}
        onClick={generateTextToSpeech}
      >
        Text to speech
      </button>
      <div className="mt-3"> {pollyResponse} </div>
      {!isLoading && (
        <Button
          icon={<FontAwesomeIcon icon={faVolumeUp} fontSize="20" />}
          onClick={play}
        />
      )}
    </div>
  )
}

export default TextToSpeech
