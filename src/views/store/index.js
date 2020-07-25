import React, { useState } from "react"
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
} from "@coreui/react"
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
    id: 4,
    img: itemIcon,
    title: "Object Name Here",
    description:
      "Proin erat sapien, faucibus sit amet dignissim nec, feugiat eu lectus. Proin fringilla sed nibh eu vulputate. Nunc commodo leo rutrum dui pellentesque commodo. Praesent tristique nibh ac arcu fringilla tempus. Integer malesuada, turpis vitae fermentum hendrerit, enim nunc ullamcorper diam, vitae eleifend arcu erat ac lectus. Cras volutpat at metus porttitor venenatis. Curabitur finibus ac mi eget dignissim.",
    gold: 80,
    purchased: false,
    ptype: "buy",
  },
]

const Store = ({ match }) => {
  const [items, setItems] = useState(ITEMS)

  console.log(items)
  return (
    <div className="store-page pb-5 mb-5">
      <CRow>
        <CCol lg={12}>
          <GeneralInfo />
        </CCol>
      </CRow>
      <CRow>
        <CCol lg={11} className="mx-auto p-3">
          <div className="d-flex">
            <Dropdown prefix="Sort by" menuList={SORT_MENU} callback={() => {}} />
          </div>
          <CButton
            onClick={() =>
              setItems(
                Object.assign(
                  [],
                  ITEMS.filter((itm) => itm.ptype === "buy")
                )
              )
            }
          >
            Filter1
          </CButton>
          <CButton
            onClick={() =>
              setItems(
                Object.assign(
                  [],
                  ITEMS.filter((itm) => itm.ptype === "cart")
                )
              )
            }
          >
            Filter2
          </CButton>
          <AssetList items={items} />
        </CCol>
      </CRow>
    </div>
  )
}

export default Store
