import React, { useEffect, useState } from "react"
import Fab from "../components/Fab"
import { Layout } from "../components/Layout"
import SettingsModal from "../components/SettingsModal/SettingsModal"

const TestPage = () => {
  const [openModal, setOpenModal] = useState(false)
  const updateModalOpen = (value: boolean) => {
    setOpenModal(value)
  }

  useEffect(() => {
    //console.log("Open modal = ", openModal)
  }, [openModal])
  return (
    <>
      <Fab type="settings" onClick={() => setOpenModal(true)} />
      {openModal && <SettingsModal setOpenModal={setOpenModal} />}
    </>
  )
}

export default TestPage
