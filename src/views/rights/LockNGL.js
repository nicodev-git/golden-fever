import React from "react"
import { CInput, CButton } from "@coreui/react"
import LockTimeCounter from "./LockTimeCounter"

const LockNGL = () => (
  <div className="lock-ngl">
    <div className="time">
      <LockTimeCounter />
    </div>
    <div className="ngl">
      <p className="text-center mb-1">Lock NGL</p>
      <CInput className="lock-input" defaultValue="200" />
      <CButton color="primary">Lock</CButton>
    </div>
  </div>
)

export default LockNGL
