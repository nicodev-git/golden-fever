import React, { useState } from "react"
import { DragSource } from "react-dnd"
import { useDrag } from "react-dnd"

const DragItem = (props) => {
  const [isDroped, setDropStatus] = useState(false)

  const [{ isDragging }, drag] = useDrag({
    item: { type: "box", ...props },
    end: (item, monitor) => {
      const { status } = monitor.getDropResult()

      if (status) {
        setDropStatus(true)
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  return (
    <div
      className={props.className}
      ref={drag}
      style={{ opacity: isDragging ? 0.3 : 1, display: isDroped ? "none" : "block" }}
    />
  )
}

export default DragItem
