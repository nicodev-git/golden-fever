import React, { useState, useEffect } from "react"
import { DragSource } from "react-dnd"
import { useDrop, useDrag } from "react-dnd"
import { CInput, CButton, CModal, CModalBody } from "@coreui/react"

const MedallionPlaceModalDesc = ({ toggleModal, onCloseModal, data, status }) => (
  <CModal show={toggleModal} centered>
    <CModalBody className="p-4 px-5 medallion-modal">
      <h5 className="mt-4 text-center pt-3">
        {`You’re about to ${
          status === "empty" ? "place" : "replace"
        } medallion in Discount ${data.subtitle}:`}
      </h5>
      <h2 className="text-center mt-4 text-white">First Discount</h2>
      <h5 className="text-center mt-4 pb-2">
        7% off for Lock medallion | 10% off for Burn medallion
      </h5>

      <div className="d-flex mt-4 mb-4 justify-content-center">
        <CButton
          color="primary"
          className="mx-2 px-5 mb-3"
          onClick={() => onCloseModal(true)}
        >
          Accept
        </CButton>
        <CButton
          color="primary"
          className="mx-2 px-5 mb-3"
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            onCloseModal(false)
          }}
        >
          Cancel
        </CButton>
      </div>
    </CModalBody>
  </CModal>
)

const DropItem = ({ data, medal, index }) => {
  const [item, setItem] = useState({ ...data, medal: medal })
  const [toggleModalDesc, setToggleModalDesc] = useState(false)

  const openModal = () => {
    setToggleModalDesc(true)
  }

  const onCloseModal = () => {
    setToggleModalDesc(false)
  }

  useEffect(() => {}, [toggleModalDesc])

  const [{ canDrop, isOver }, drop] = useDrop({
    accept: "box",
    drop: (item, monitor) => {
      openModal()
      setItem(item)
      return { status: true }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  })

  const isActive = canDrop && isOver

  return (
    <div
      ref={drop}
      className={data.line ? "diagram-line" : "diagram"}
      onClick={() => openModal(`${data.subtitle} ${index + 1}`, medal)}
    >
      <span className="key">{`${data.subtitle} ${index + 1}`}</span>
      <div className={`cell ${item && item.medal}`} />

      <MedallionPlaceModalDesc
        data={data}
        status={medal}
        toggleModal={toggleModalDesc}
        onCloseModal={(val) => onCloseModal(val)}
      />
    </div>
  )
}

export default DropItem
