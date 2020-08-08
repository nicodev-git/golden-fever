import React, { useState } from "react"
import { CInput, CButton } from "@coreui/react"

const LockTimeCounter = () => {
  const [time, setTime] = useState(60)

  const onLeftClick = () => {
    if (time > 0) setTime(time - 1)
  }

  const onRightClick = () => {
    if (time < 100) setTime(time + 1)
  }

  return (
    <div className="locktime-counter">
      <p className="text-center mb-1">Lock Time</p>
      <div className="d-flex align-items-center justify-content-center">
        <CButton className="counter-left" onClick={() => onLeftClick()} />
        <CInput value={time + " days"} readOnly className="text-center" />
        <CButton className="counter-right" onClick={() => onRightClick()} />
      </div>
    </div>
  )
}

export default LockTimeCounter
