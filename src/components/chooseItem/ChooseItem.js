import React from "react"
import { CButton, CInput } from "@coreui/react"

import "./style.scss"

const ChooseItem = ({ match }) => {
  return (
    <div className="position-relative choose-item">
      <CInput className="text-center" disabled />
      <div className="d-flex align-items-center justify-content-center position-absolute btn-layer">
        <CButton className="add-btn d-flex align-items-center justify-content-center">
          +
        </CButton>
      </div>
    </div>
  )
}

export default ChooseItem
