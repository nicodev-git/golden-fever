import React, { useState, useEffect } from "react"
import { CCol, CRow } from "@coreui/react"

import ItemTable from "./itemTable"
import itemIcon from "assets/images/assetItem.png"

const ITEMS = [
  {
    id: 1,
    item: "Object Name here",
    level: "1",
    quantity: "1",
    status: "New",
    seller: "LoremIpsume",
    value: "125",
    interest: "",
    period: "2",
    details: "",
    action: "",
  },
  {
    id: 2,
    item: "Object Name here",
    level: "1",
    quantity: "1",
    status: "New",
    seller: "LoremIpsume",
    value: "125",
    interest: "",
    period: "2",
    details: "",
    action: "",
  },
  {
    id: 3,
    item: "Object Name here",
    level: "1",
    quantity: "1",
    status: "New",
    seller: "LoremIpsume",
    value: "125",
    interest: "",
    period: "2",
    details: "LoremIpsume",
    action: "",
  },
  {
    id: 4,
    item: "Object Name here",
    level: "1",
    quantity: "1",
    status: "New",
    seller: "LoremIpsume",
    value: "125",
    interest: "",
    period: "2",
    details: "LoremIpsume",
    action: "",
  },
  {
    id: 5,
    item: "Object Name here",
    level: "1",
    quantity: "1",
    status: "New",
    seller: "LoremIpsume",
    value: "125",
    interest: "",
    period: "2",
    details: "LoremIpsume",
    action: "",
  },
  {
    id: 6,
    item: "Object Name here",
    level: "1",
    quantity: "1",
    status: "New",
    seller: "LoremIpsume",
    value: "125",
    interest: "",
    period: "2",
    details: "LoremIpsume",
    action: "",
  },
  {
    id: 7,
    item: "Object Name here",
    level: "1",
    quantity: "1",
    status: "New",
    seller: "LoremIpsume",
    value: "125",
    interest: "",
    period: "2",
    details: "LoremIpsume",
    action: "",
  },
]

const BorrowPage = (props) => {
  const [items, setItems] = useState(ITEMS)
  const [filter, saveFilter] = useState("all")

  return (
    <CRow>
      <CCol lg={12}>
        <ItemTable items={ITEMS} />
      </CCol>
    </CRow>
  )
}

export default BorrowPage
