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
  CFade,
} from "@coreui/react"
import { Switch, Route } from "react-router-dom"
import CIcon from "@coreui/icons-react"

import Dropdown from "components/dropdown/DropDown"
import SearchInput from "components/searchInput/SearchInput"
import GeneralInfo from "components/generalInfo/GeneralInfo"

const Buy = React.lazy(() => import("views/buy"))
const Sell = React.lazy(() => import("views/sell"))
const Borrow = React.lazy(() => import("views/borrow"))
const Lend = React.lazy(() => import("views/lend"))

const SORT_MENU = [
  { title: "All", value: "all" },
  { title: "Menu1", value: "price1" },
  { title: "Menu2", value: "price2" },
]

const Exchange = (props) => {
  const { filter } = props.match.params

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
                <div className="mr-3">
                  <SearchInput callback={() => {}} />
                </div>
                <div className="c-filter-links">
                  <CLink to={`/exchange/buy`}>BUY</CLink>
                  <CLink to={`/exchange/sell`}>SELL</CLink>
                  <CLink to={`/exchange/borrow`}>BORROW</CLink>
                  <CLink to={`/exchange/lend`}>LEND</CLink>
                </div>
              </div>
            </CCol>
            <CCol lg={4} />
          </CRow>
          <CRow className="p-3 mt-4">
            <CCol lg={12}>
              <Switch>
                <Route
                  exact
                  path="/exchange/buy"
                  render={(props) => (
                    <CFade>
                      <Buy {...props} />
                    </CFade>
                  )}
                />
                <Route
                  exact
                  path="/exchange/sell"
                  render={(props) => (
                    <CFade>
                      <Sell {...props} />
                    </CFade>
                  )}
                />
                <Route
                  exact
                  path="/exchange/lend"
                  render={(props) => (
                    <CFade>
                      <Lend {...props} />
                    </CFade>
                  )}
                />
                <Route
                  exact
                  path="/exchange/borrow"
                  render={(props) => (
                    <CFade>
                      <Borrow {...props} />
                    </CFade>
                  )}
                />
              </Switch>
            </CCol>
          </CRow>
        </CCol>
      </CRow>
    </div>
  )
}

export default Exchange
