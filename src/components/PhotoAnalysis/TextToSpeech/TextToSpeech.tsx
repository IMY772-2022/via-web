import React, { useEffect, useState } from "react"
import { Predictions } from "@aws-amplify/predictions"
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Button from "../../Button/Button"

interface TextToSpeechProps {
  labels: string[]
  disabled?: boolean
}

const TextToSpeech: React.FC<TextToSpeechProps> = props => {
  const { labels, disabled = false } = props
  const [pollyResponse, setPollyResponse] = useState<string | undefined>(
    undefined
  )
  const [audioStream, setAudioStream] = useState<string | undefined>(undefined)
  const [isPlaying, setIsPlaying] = useState(false)

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
    if (audioStream) {
      const audio = new Audio()
      audio.src = audioStream
      audio.play()
      setIsPlaying(true)
      audio.onended = () => {
        pause()
      }
    }
  }

  const pause = () => {
    setIsPlaying(false)
  }

  return (
    <div className="is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
      {!audioStream && (
        <>
          <button
            className={classList.flatMap(className => className).join(" ")}
            disabled={disabled}
            onClick={generateTextToSpeech}
          >
            Text to speech
          </button>
          <div className="mt-3"> {pollyResponse} </div>
        </>
      )}

      {!isLoading && (
        <Button
          icon={
            <FontAwesomeIcon
              icon={isPlaying ? faPause : faPlay}
              fontSize="20"
            />
          }
          onClick={play}
        />
      )}
    </div>
  )
}

export default TextToSpeech
