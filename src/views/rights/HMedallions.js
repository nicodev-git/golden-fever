import React, { useState } from "react"
import { CInput, CButton, CModal, CModalBody } from "@coreui/react"

const MedallionPlaceModalDesc = ({
  toggleModal,
  closeModal,
  data,
  medal,
  status,
}) => (
  <CModal show={toggleModal} onClose={() => closeModal()}>
    <CModalBody className="p-4 px-5 medallion-modal">
      {status === "empty" ? (
        <h5 className="mt-4 pt-3">
          {data.title} {medal}:
        </h5>
      ) : (
        <h5 className="mt-4 text-center pt-3">
          {`You’re about to ${
            status === "done" ? "place" : "replace"
          } medallion in Discount ${medal}:`}
        </h5>
      )}
      <h2 className="text-center mt-4 text-white">
        {status === "empty" ? "Alone No More" : "First Discount"}
      </h2>
      <h5 className="text-center mt-4 pb-2">
        {status === "empty"
          ? "Burn or Lock some tokens - You are part of the group now. You can talk on the private channels, see things etc."
          : "7% off for Lock medallion | 10% off for Burn medallion"}
      </h5>

      <div className="d-flex mt-4 mb-4 justify-content-center">
        {status != "empty" && (
          <>
            <CButton
              color="primary"
              className="mx-2 px-5 mb-3"
              onClick={() => closeModal()}
            >
              Accept
            </CButton>
            <CButton
              color="primary"
              className="mx-2 px-5 mb-3"
              onClick={() => closeModal()}
            >
              Cancel
            </CButton>
          </>
        )}
      </div>
    </CModalBody>
  </CModal>
)

const HMedallions = ({ data }) => {
  const [toggleModalDesc, setToggleModalDesc] = useState(false)
  const [clickedMedal, setClickMedal] = useState(false)
  const [medalStatus, setMedalStatus] = useState("")

  const openModal = (medal, status) => {
    console.log(clickedMedal)
    setClickMedal(medal)
    setMedalStatus(status)
    setToggleModalDesc(true)
  }

  return (
    <div className="hmedallions-cell d-flex align-items-center py-2">
      <CButton color="primary" className="w-20">
        {data.title}
      </CButton>
      {data.medallions.map((medal, key) => (
        <div
          key={key}
          className={data.line ? "diagram-line" : "diagram"}
          onClick={() => openModal(`${data.subtitle} ${key + 1}`, medal)}
        >
          <span className="key">{`${data.subtitle} ${key + 1}`}</span>
          <div className={`cell ${medal}`} />
        </div>
      ))}
      <MedallionPlaceModalDesc
        data={data}
        status={medalStatus}
        medal={clickedMedal}
        toggleModal={toggleModalDesc}
        closeModal={() => setToggleModalDesc(false)}
      />
    </div>
  )
}

export default HMedallions
