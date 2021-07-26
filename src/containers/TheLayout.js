import React from "react"
import { TheContent, TheSidebar, TheFooter, TheHeader } from "./index"

const TheLayout = () => {
  return (
    <div className="c-app c-default-layout">
      <div className="top-bg" />
      <div className="c-wrapper">
        <TheHeader />
        <div className="c-body">
          <TheContent />
        </div>
        <TheFooter />
        <div className="bottom-bg" />
      </div>
    </div>
  )
}

export default TheLayout
