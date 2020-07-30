import React, { useState, useEffect } from "react"
import {
  CCol,
  CRow
} from "@coreui/react"

import MarketPlaceTable from './marketPlaceTable'
import LendItemTable from './lendItemTable'

const ITEMS = [
  {
    id: 1,
    item: "Object Name here",
    level: "1",
    quantity: "1",
    status: "New",
    value: '125',
    interest: '',
    period: '2',
    detail: '',
    action: ''
  },
  {
    id: 2,
    item: "Object Name here",
    level: "1",
    quantity: "1",
    status: "New",
    value: '125',
    interest: '',
    period: '2',
    detail: '',
    action: ''
  },
  {
    id: 3,
    item: "Object Name here",
    level: "1",
    quantity: "1",
    status: "New",
    value: '125',
    interest: '',
    period: '2',
    detail: 'LoremIpsume',
    action: ''
  },
  {
    id: 4,
    item: "Object Name here",
    level: "1",
    quantity: "1",
    status: "New",
    value: '125',
    interest: '',
    period: '2',
    detail: 'LoremIpsume',
    action: ''
  },
  {
    id: 5,
    item: "Object Name here",
    level: "1",
    quantity: "1",
    status: "New",
    value: '125',
    interest: '',
    period: '2',
    detail: 'LoremIpsume',
    action: ''
  },
  {
    id: 6,
    item: "Object Name here",
    level: "1",
    quantity: "1",
    status: "New",
    value: '125',
    interest: '',
    period: '2',
    detail: 'LoremIpsume',
    action: ''
  },
  {
    id: 7,
    item: "Object Name here",
    level: "1",
    quantity: "1",
    status: "New",
    value: '125',
    interest: '',
    period: '2',
    detail: '',
    action: ''
  }
]


const LEND_ITEMS = [
  {
    id: 1,
    item: "-",
    level: "-",
    quantity: "1",
    status: "-",
    value: '125',
    interest: '',
    period: '2',
    detail: '',
    action: ''
  },
]

const LendPage = (props) => {
  const [items, setItems] = useState(ITEMS)
  const [filter, saveFilter] = useState("all")

  return (
    <>
      <CRow>
        <CCol lg={12}>
          <h4 className="mb-3">Your Marketplace:</h4>
          <MarketPlaceTable items={ITEMS}/>
        </CCol>
      </CRow>
      <CRow className="mt-4">
        <CCol lg={12}>
          <h4 className="mb-3">Lend an item:</h4>
          <LendItemTable items={LEND_ITEMS}/>
        </CCol>
      </CRow>
    </>
  )
}

export default LendPage
