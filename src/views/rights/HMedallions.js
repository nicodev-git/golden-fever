import React, { useState } from "react"
import { CInput, CButton, CModal, CModalBody } from "@coreui/react"

import DropItem from "./DropItem"

const HMedallions = ({ data }) => {
  const [toggleModalDesc, setToggleModalDesc] = useState(false)
  const [clickedMedal, setClickMedal] = useState(false)
  const [medalStatus, setMedalStatus] = useState("")

  return (
    <div className="hmedallions-cell d-flex align-items-center py-2">
      <CButton color="primary" className="w-20">
        {data.title}
      </CButton>
      {data.medallions.map((medal, key) => (
        <DropItem key={key} index={key} data={data} medal={medal} key={key} />
      ))}
    </div>
  )
}

export default HMedallions
