import React, { useState, useEffect } from "react"
import {
  CCol,
  CRow
} from "@coreui/react"

import ItemTable from './itemTable'

const ITEMS = [
  {
    id: 1,
    item: "Object Name here",
    level: "1",
    quantity: "1",
    status: "New",
    price: '125',
    seller: 'LoremIpsume',
    action: ''
  },
  {
    id: 2,
    item: "Object Name here",
    level: "1",
    quantity: "1",
    status: "New",
    price: '125',
    seller: 'LoremIpsume',
    action: ''
  },
  {
    id: 3,
    item: "Object Name here",
    level: "1",
    quantity: "1",
    status: "New",
    price: '125',
    seller: 'LoremIpsume',
    action: ''
  },
  {
    id: 4,
    item: "Object Name here",
    level: "1",
    quantity: "1",
    status: "New",
    price: '125',
    seller: 'LoremIpsume',
    action: ''
  },
  {
    id: 5,
    item: "Object Name here",
    level: "1",
    quantity: "1",
    status: "New",
    price: '125',
    seller: 'LoremIpsume',
    action: ''
  },
  {
    id: 6,
    item: "Object Name here",
    level: "1",
    quantity: "1",
    status: "New",
    price: '125',
    seller: 'LoremIpsume',
    action: ''
  },
  {
    id: 7,
    item: "Object Name here",
    level: "1",
    quantity: "1",
    status: "New",
    price: '125',
    seller: 'LoremIpsume',
    action: ''
  }
]

const BuyPage = (props) => {
  const [items, setItems] = useState(ITEMS)
  const [filter, saveFilter] = useState("all")

  return (
    <CRow>
      <CCol lg={12}>
        <ItemTable items={ITEMS}/>
      </CCol>
    </CRow>
  )
}

export default BuyPage
