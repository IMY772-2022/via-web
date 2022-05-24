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
  const { labels } = props
  const [pollyResponse, setPollyResponse] = useState<string | undefined>(
    undefined
  )

  const [audioFile, setAudioFile] = useState<HTMLAudioElement | undefined>(
    undefined
  )
  const [audioStream, setAudioStream] = useState<string | undefined>(undefined)
  const [isPlaying, setIsPlaying] = useState(false)

  const [isLoading, setIsLoading] = useState(false)

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
        setAudioFile(new Audio(response.speech.url))
        setPollyResponse("Audio generation complete, press play")
        setIsLoading(false)
      })
      .catch(error => setPollyResponse(JSON.stringify(error, null, 2)))
  }

  useEffect(() => {
    generateTextToSpeech()
  }, [])

  const togglePlay = () => {
    if (audioFile) {
      if (isPlaying) {
        audioFile.pause()
        setIsPlaying(false)
      } else {
        audioFile.play()
        setIsPlaying(true)
      }
    }
  }

  if (audioFile) {
    audioFile.onended = () => {
      setIsPlaying(false)
    }
  }

  return (
    <div className="is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
      {!audioStream && (
        <>
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
          onClick={togglePlay}
        />
      )}
    </div>
  )
}

export default TextToSpeech
