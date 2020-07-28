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
    <div className="store-page pb-5 mb-5">
      <CRow>
        <CCol lg={12}>
          <GeneralInfo />
        </CCol>

        <CCol lg={10} className="mx-auto">
          <CRow className="p-2" style={{ marginTop: -30 }}>
            <CCol lg={4}>
              <Dropdown prefix="Category" menuList={SORT_MENU} callback={() => {}} />
            </CCol>
            <CCol lg={4} className="text-center">
              <div className="d-flex align-items-center justify-content-center">
                <div className="mr-3"><SearchInput callback={() => {}}/></div>
                <div className="c-filter-links">
                  <CLink to={`/buy`} active>BUY</CLink>
                  <CLink to={`/sell`}>SELL</CLink>
                  <CLink to={`/borrow`}>BORROW</CLink>
                  <CLink to={`/lend`}>LEND</CLink>
                </div>
              </div>
            </CCol>
            <CCol lg={4} />
          </CRow>
          <CRow className="p-3 mt-4">
            <CCol lg={12}>
              <ItemTable items={ITEMS}/>
            </CCol>
          </CRow>
        </CCol>
      </CRow>
    </div>
  )
}

export default BuyPage
