import React from "react"
import { CInput, CButton } from "@coreui/react"

const BurnNGL = () => (
  <div className="burn-ngl">
    <div className="ngl mx-auto">
      <p className="text-center mb-1">Burn NGL</p>
      <CInput className="lock-input mb-2 text-center" defaultValue="200" />
      <CButton color="primary" className="w-100">
        Burn
      </CButton>
    </div>
  </div>
)

export default BurnNGL
