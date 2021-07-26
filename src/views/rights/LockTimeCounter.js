import React, { useState } from "react"
import { CInput, CButton } from "@coreui/react"

const DAYS = [30, 60, 180, 360]

const LockTimeCounter = () => {
  const [index, setIndex] = useState(1)

  const onLeftClick = () => {
    if (index > 0) setIndex(index - 1)
  }

  const onRightClick = () => {
    if (index < 3) setIndex(index + 1)
  }

  return (
    <div className="locktime-counter">
      <p className="text-center mb-1">Lock Time</p>
      <div className="d-flex align-items-center justify-content-center">
        <CButton className="counter-left" onClick={() => onLeftClick()} />
        <CInput value={DAYS[index] + " days"} readOnly className="text-center" />
        <CButton className="counter-right" onClick={() => onRightClick()} />
      </div>
    </div>
  )
}

export default LockTimeCounter
