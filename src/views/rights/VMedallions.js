import React from "react"

const VMedallions = ({ medallions }) => {
  return (
    <div className="medallions-diagram">
      <h5 className="text-center">
        Medallions
        <div className="medallions-holder">
          {medallions.map((medal, key) => (
            <div key={key} className={`medallion-item ${medal}`} />
          ))}
        </div>
      </h5>
    </div>
  )
}

export default VMedallions
