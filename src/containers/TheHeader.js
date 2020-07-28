import React from "react"
import { useSelector, useDispatch } from "react-redux"
import {
  CHeader,
  CToggler,
  CHeaderBrand,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CSubheader,
  CBreadcrumbRouter,
  CLink,
} from "@coreui/react"
import CIcon from "@coreui/icons-react"

import LogoImg from "assets/images/logo.svg"

// routes config
import routes from "../routes"

import {
  TheHeaderDropdown,
  TheHeaderDropdownMssg,
  TheHeaderDropdownNotif,
  TheHeaderDropdownTasks,
} from "./index"

const TheHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)

  const toggleSidebar = () => {
    const val = [true, "responsive"].includes(sidebarShow) ? false : "responsive"
    dispatch({ type: "set", sidebarShow: val })
  }

  const toggleSidebarMobile = () => {
    const val = [false, "responsive"].includes(sidebarShow) ? true : "responsive"
    dispatch({ type: "set", sidebarShow: val })
  }

  return (
    <CHeader
      fixed={false}
      withSubheader
      className="px-3 justify-content-between background-transparent"
    >
      <CHeaderBrand to="/">
        <img className="logo" src={LogoImg} />
      </CHeaderBrand>

      <CHeaderNav className="d-md-down-none c-menus">
        <CHeaderNavItem className="px-3">
          <CHeaderNavLink to="/dashboard">Backers</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem className="px-3">
          <CHeaderNavLink to="/buy">Investors</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem className="px-3">
          <CHeaderNavLink to="/store">Store</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem className="px-3">
          <CHeaderNavLink>Exchange</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem className="px-3">
          <CHeaderNavLink to="/wallet">Wallet</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem className="px-3">
          <div className="d-flex">
            <CHeaderNavLink>Login</CHeaderNavLink>
            <span>/</span>&nbsp;&nbsp;&nbsp;
            <CHeaderNavLink>SignUp</CHeaderNavLink>
          </div>
        </CHeaderNavItem>
      </CHeaderNav>
    </CHeader>
  )
}

export default TheHeader
