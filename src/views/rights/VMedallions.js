import React from "react"
import { DragSource } from "react-dnd"
import DragItem from "./DragItem"

const VMedallions = ({ medallions }) => {
  return (
    <div className="medallions-diagram">
      <h5 className="text-center">
        Medallions
        <div className="medallions-holder">
          {medallions.map((medal, key) => (
            <DragItem
              key={key}
              className={`medallion-item ${medal}`}
              medal={medal}
            />
          ))}
        </div>
      </h5>
    </div>
  )
}

export default VMedallions
