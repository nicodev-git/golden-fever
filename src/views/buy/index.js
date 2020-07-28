import React, { useState, useEffect } from "react"
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CButton,
  CContainer,
  CForm,
  CFormGroup,
  CLabel,
  CInput,
  CLink,
} from "@coreui/react"
import { Switch, Route } from "react-router-dom"
import CIcon from "@coreui/icons-react"

import Dropdown from "components/dropdown/DropDown"
import SearchInput from "components/searchInput/SearchInput"
import GeneralInfo from "components/generalInfo/GeneralInfo"

import ItemTable from './itemTable'
import itemIcon from "assets/images/assetItem.png"

// import "./style.scss"

const SORT_MENU = [
  { title: "All", value: "all" },
  { title: "Menu1", value: "price1" },
  { title: "Menu2", value: "price2" },
]

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

  console.log(props)

  return (
    <CRow>
      <CCol lg={12}>
        <ItemTable items={ITEMS}/>
      </CCol>
    </CRow>
  )
}

export default BuyPage
