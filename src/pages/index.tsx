import * as React from "react"
import Example from "../components/Example/Example"
import { DEFAULT_TITLE } from "../components/Example/types"
import "../styles.scss"

const pageData = [
  { title: "Hello, 1", subtitle: "This is another subtitle" },
  { title: "Hello, 2", subtitle: "This is yet another subtitle" },
  { title: "Hello, 3" },
  { title: "Hello, 4" },
]

const IndexPage = (): JSX.Element => (
  <div className="container">
    <h1 className="is-size-1-desktop">{DEFAULT_TITLE} 1</h1>
    <h2 className="is-size-2-desktop">{`${DEFAULT_TITLE} 2`}</h2>
    <h3 className="is-size-3-desktop">Heading 3</h3>
    <h4 className="is-size-4-desktop">Heading 4</h4>
    <h5 className="is-size-5-desktop">Heading 5</h5>
    <h6 className="is-size-6-desktop">Heading 6</h6>
    <div className="columns is-two-fifths">
      {pageData.map((data, index) => (
        <div className="column" key={index}>
          <Example {...data} />
        </div>
      ))}
    </div>
  </div>
)

export default IndexPage
