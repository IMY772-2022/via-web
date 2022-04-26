import React, { useEffect, useState } from "react"
import { Layout } from "../components/Layout/LayoutIndex"
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
      {/* <Fab type="settings" onClick={() => setOpenModal(true)} /> */}
      {openModal && <SettingsModal setOpenModal={setOpenModal} />}
    </>
  )
}

export default TestPage
