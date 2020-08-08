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
import ChooseItem from "components/chooseItem/ChooseItem"
import KeyGenerator from "components/keyGenerator/KeyGenerator"
import Dropdown from "components/dropdown/DropDown"
import GeneralInfo from "components/generalInfo/GeneralInfo"

import AssetList from "./assetList"

import itemIcon from "assets/images/assetItem.png"

import "./style.scss"

const SORT_MENU = [
  { title: "Price", value: "price" },
  { title: "Menu1", value: "price1" },
  { title: "Menu2", value: "price2" },
]

const ITEMS = [
  {
    id: 1,
    img: itemIcon,
    title: "Object Name Here",
    description:
      "Proin erat sapien, faucibus sit amet dignissim nec, feugiat eu lectus. Proin fringilla sed nibh eu vulputate. Nunc commodo leo rutrum dui pellentesque commodo. Praesent tristique nibh ac arcu fringilla tempus. Integer malesuada, turpis vitae fermentum hendrerit, enim nunc ullamcorper diam, vitae eleifend arcu erat ac lectus. Cras volutpat at metus porttitor venenatis. Curabitur finibus ac mi eget dignissim.",
    gold: 80,
    julis: 120,
    purchased: false,
    ptype: "buy",
  },

  {
    id: 2,
    img: itemIcon,
    title: "Object Name Here",
    description:
      "Proin erat sapien, faucibus sit amet dignissim nec, feugiat eu lectus. Proin fringilla sed nibh eu vulputate. Nunc commodo leo rutrum dui pellentesque commodo. Praesent tristique nibh ac arcu fringilla tempus. Integer malesuada, turpis vitae fermentum hendrerit, enim nunc ullamcorper diam, vitae eleifend arcu erat ac lectus. Cras volutpat at metus porttitor venenatis. Curabitur finibus ac mi eget dignissim.",
    gold: 80,
    purchased: false,
    ptype: "cart",
    currency: "USD",
    price: 12.99,
    couponRate: 25,
    coupon: 9.99,
  },
  {
    id: 3,
    img: itemIcon,
    title: "Object Name Here",
    description:
      "Proin erat sapien, faucibus sit amet dignissim nec, feugiat eu lectus. Proin fringilla sed nibh eu vulputate. Nunc commodo leo rutrum dui pellentesque commodo. Praesent tristique nibh ac arcu fringilla tempus. Integer malesuada, turpis vitae fermentum hendrerit, enim nunc ullamcorper diam, vitae eleifend arcu erat ac lectus. Cras volutpat at metus porttitor venenatis. Curabitur finibus ac mi eget dignissim.",
    gold: 80,
    purchased: true,
    ptype: "cart",
    currency: "USD",
    price: 12.99,
    couponRate: 25,
    coupon: 9.99,
  },
  {
    id: 4,
    img: itemIcon,
    title: "Object Name Here",
    description:
      "Proin erat sapien, faucibus sit amet dignissim nec, feugiat eu lectus. Proin fringilla sed nibh eu vulputate. Nunc commodo leo rutrum dui pellentesque commodo. Praesent tristique nibh ac arcu fringilla tempus. Integer malesuada, turpis vitae fermentum hendrerit, enim nunc ullamcorper diam, vitae eleifend arcu erat ac lectus. Cras volutpat at metus porttitor venenatis. Curabitur finibus ac mi eget dignissim.",
    gold: 80,
    purchased: false,
    ptype: "buy",
  },
  {
    id: 5,
    img: itemIcon,
    title: "Object Name Here",
    description:
      "Proin erat sapien, faucibus sit amet dignissim nec, feugiat eu lectus. Proin fringilla sed nibh eu vulputate. Nunc commodo leo rutrum dui pellentesque commodo. Praesent tristique nibh ac arcu fringilla tempus. Integer malesuada, turpis vitae fermentum hendrerit, enim nunc ullamcorper diam, vitae eleifend arcu erat ac lectus. Cras volutpat at metus porttitor venenatis. Curabitur finibus ac mi eget dignissim.",
    gold: 80,
    purchased: false,
    ptype: "buy",
  },
  {
    id: 6,
    img: itemIcon,
    title: "Object Name Here",
    description:
      "Proin erat sapien, faucibus sit amet dignissim nec, feugiat eu lectus. Proin fringilla sed nibh eu vulputate. Nunc commodo leo rutrum dui pellentesque commodo. Praesent tristique nibh ac arcu fringilla tempus. Integer malesuada, turpis vitae fermentum hendrerit, enim nunc ullamcorper diam, vitae eleifend arcu erat ac lectus. Cras volutpat at metus porttitor venenatis. Curabitur finibus ac mi eget dignissim.",
    gold: 80,
    purchased: false,
    ptype: "buy",
  },
]

const Store = (props) => {
  const [items, setItems] = useState(ITEMS)
  const [filter, saveFilter] = useState("all")

  useEffect(() => {
    const { filter } = props.match.params
    saveFilter(filter || "all")
  })

  const setFilter = (filter) => {
    props.history.push(filter === "all" ? `/store/all` : `/store/${filter}`)
  }

  return (
    <div className="store-page pb-5 mb-5">
      <CRow>
        <CCol lg={12}>
          <GeneralInfo />
        </CCol>
      </CRow>
      <CRow className="p-4" style={{ marginTop: -40 }}>
        <CCol lg={4} className="ml-4">
          <Dropdown prefix="Sort by" menuList={SORT_MENU} callback={() => {}} />
        </CCol>
        <CCol lg={4} className="text-center c-filter-links">
          <CLink to={`/store/all`} active={filter === "all"}>
            ALL
          </CLink>
          <CLink to={`/store/cart`} active={filter === "cart"}>
            FILTER1
          </CLink>
          <CLink to={`/store/buy`} active={filter === "buy"}>
            FILTER2
          </CLink>
          <CLink to={`/store/filter3`} active={filter === "filter3"}>
            FILTER3
          </CLink>
        </CCol>
        <CCol lg={4} />
      </CRow>
      <CRow className="p-4">
        <CCol lg={12}>
          <Switch>
            <Route
              to={"/store/:filter"}
              render={(props) => (
                <AssetList
                  items={
                    filter === "all"
                      ? ITEMS
                      : ITEMS.filter((item) => item.ptype === filter)
                  }
                />
              )}
            />
          </Switch>
        </CCol>
      </CRow>
    </div>
  )
}

export default Store
