import React from "react"
import CounterInput from "react-counter-input"

import inputBg from "assets/images/buttonBk.png"

const buttonStyle = {
  backgroundImage: "url(" + inputBg + ")",
  backgroundSize: "100% 100%",
  height: 30,
  width: 50,
  color: "#120c05",
  padding: 2,
}

const CCounterInput = ({ min, max, callback }) => {
  console.log(min, max, callback)
  return (
    <CounterInput
      min={min}
      max={max}
      wrapperStyle={{ justifyContent: "center" }}
      btnStyle={buttonStyle}
      onCountChange={(count) => callback(count)}
    />
  )
}

export default CCounterInput
