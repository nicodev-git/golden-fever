import React from "react"
import { CDataTable, CButton } from "@coreui/react"

import itemIcon from "assets/images/assetItem.png"
import goldIcon from "assets/images/gold.png"

const fields = [
  "item",
  "level",
  "status",
  "quantity",
  "value",
  "interest",
  "period",
  "detail",
  "action",
]

const MarketPlaceTable = ({ items }) => {
  return (
    <CDataTable
      items={items}
      fields={fields}
      size="sm"
      itemsPerPage={5}
      pagination
      scopedSlots={{
        item: (item) => (
          <td className="w-20">
            <div className="d-flex align-items-center justify-content-start">
              <img src={itemIcon} width="40" className="mr-3" />
              {item.item}
            </div>
          </td>
        ),
        level: (item) => <td className="w-5">{item.level}</td>,
        status: (item) => <td className="w-5">{item.status}</td>,
        quantity: (item) => <td className="w-15">{item.quantity}</td>,
        interest: (item) => <td className="w-10">{item.interest}</td>,
        period: (item) => <td className="w-10">{item.period}</td>,
        detail: (item) => <td className="w-10">{item.detail}</td>,
        value: (item) => (
          <td className="w-10">
            <div className="d-flex align-items-center justify-content-center">
              <img src={goldIcon} width="17" className="mr-3" />
              {item.value}
            </div>
          </td>
        ),
        action: (item) => (
          <td className="w-10">
            <CButton color="primary" size="md">
              Cancel
            </CButton>
          </td>
        ),
      }}
    />
  )
}

export default MarketPlaceTable
