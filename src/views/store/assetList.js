import React, { useState } from "react"
import FlipMove from "react-flip-move"

import AssetCard from "./assetCard"

const AssetList = ({ items }) => {
  return (
    <FlipMove className={"d-flex flex-wrap w-100"} duration={300}>
      {items.map((item) => (
        <div key={item.id} className="mb-4 col-md-6 col-lg-3">
          <AssetCard data={item} />
        </div>
      ))}
    </FlipMove>
  )
}

export default AssetList
