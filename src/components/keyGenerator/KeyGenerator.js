import React, {useState} from "react"
import {
  CButton,
  CInput,
} from "@coreui/react"
import './style.scss'

const placeholder = "2Y5T0TSUX9WY1F5NHX47SP"

const KeyGenerator = ({ match }) => {
  const [key, generateKey] = useState(null)

  const generateEthKey = () => {
    generateKey((Math.random().toString(36).substring(2, 16) + Math.random().toString(36).substring(2, 16)).toUpperCase())
  }

  return (
    <div className="position-relative key-generator d-flex align-items-center justify-content-center">
      <span className={`${!key?'text-blur':''} mx-2`}>{key || placeholder}</span>
      <div className="d-flex align-items-center justify-content-center position-absolute btn-layer">
        {!key && <CButton className="d-flex align-items-center justify-content-center" onClick={() => generateEthKey()}>Generate</CButton>}
      </div>
    </div>
  )
}

export default KeyGenerator
