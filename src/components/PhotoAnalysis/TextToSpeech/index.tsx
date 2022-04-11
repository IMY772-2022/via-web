import React from "react"
import { useState } from "react"
import { Predictions } from "@aws-amplify/predictions"

interface TextToSpeechProps {
  labels: string[]
}

const TextToSpeech: React.FC<TextToSpeechProps> = props => {
  const { labels } = props
  const [pollyResponse, setPollyResponse] = useState("...")
  const [audioStream, setAudioStream] = useState("Default")

  const generateTextToSpeech = () => {
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
      })
      .catch(error => setPollyResponse(JSON.stringify(error, null, 2)))
  }

  const play = () => {
    const audio = new Audio()
    audio.src = audioStream
    audio.play()
  }

  return (
    <div>
      <button className="button is-dark" onClick={generateTextToSpeech}>
        Text to speech
      </button>
      <div> {pollyResponse} </div>
      <button className="button" onClick={play}>
        Play audio
      </button>
    </div>
  )
}

export default TextToSpeech
