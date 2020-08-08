import React, { useState, useEffect } from "react"
import { CCol, CRow } from "@coreui/react"

import MarketPlaceTable from "./marketPlaceTable"
import SellItemTable from "./sellItemTable"

const ITEMS = [
  {
    id: 1,
    item: "Object Name here",
    level: "1",
    quantity: "1",
    status: "New",
    price: "125",
    action: "",
  },
  {
    id: 2,
    item: "Object Name here",
    level: "1",
    quantity: "1",
    status: "New",
    price: "125",
    action: "",
  },
  {
    id: 3,
    item: "Object Name here",
    level: "1",
    quantity: "1",
    status: "New",
    price: "125",
    action: "",
  },
  {
    id: 4,
    item: "Object Name here",
    level: "1",
    quantity: "1",
    status: "New",
    price: "125",
    action: "",
  },
  {
    id: 5,
    item: "Object Name here",
    level: "1",
    quantity: "1",
    status: "New",
    price: "125",
    action: "",
  },
  {
    id: 6,
    item: "Object Name here",
    level: "1",
    quantity: "1",
    status: "New",
    price: "125",
    action: "",
  },
  {
    id: 7,
    item: "Object Name here",
    level: "1",
    quantity: "1",
    status: "New",
    price: "125",
    action: "",
  },
]

const SELL_ITEMS = [
  {
    id: 1,
    item: "-",
    level: "-",
    quantity: "1",
    status: "-",
    price: "125",
    action: "",
  },
]

const SellPage = (props) => {
  const [items, setItems] = useState(ITEMS)
  const [filter, saveFilter] = useState("all")

  return (
    <>
      <CRow>
        <CCol lg={12}>
          <h4 className="mb-3">Your Marketplace:</h4>
          <MarketPlaceTable items={ITEMS} />
        </CCol>
      </CRow>
      <CRow className="mt-4">
        <CCol lg={12}>
          <h4 className="mb-3">Sell new item:</h4>
          <SellItemTable items={SELL_ITEMS} />
        </CCol>
      </CRow>
    </>
  )
}

export default SellPage
