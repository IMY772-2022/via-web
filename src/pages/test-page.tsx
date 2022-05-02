import React, { useState } from "react"
import { Layout } from "../components/Layout/Layout"
import SettingsModal from "../components/SettingsModal/SettingsModal"

const TestPage = () => {
  const [modalActive, setModalActive] = useState<boolean>(false)

  const toggleModal = () => {
    setModalActive(prevState => !prevState)
  }

  return (
    <div className="section">
      <div className="container is-fluid">
        <Layout pageTitle="test page">
          <h1>This is a test</h1>
          <SettingsModal
            isActive={modalActive}
            toggle={toggleModal}
          ></SettingsModal>
          <button onClick={toggleModal}>settings</button>
        </Layout>
      </div>
    </div>
  )
}

export default TestPage
