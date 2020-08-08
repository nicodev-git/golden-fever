import React from "react"
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
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import ChooseItem from "components/chooseItem/ChooseItem"
import KeyGenerator from "components/keyGenerator/KeyGenerator"

import GeneralInfo from "components/generalInfo/GeneralInfo"

import facebookIcon from "assets/images/facebook.png"
import youtubeIcon from "assets/images/youtube.png"
import instagramIcon from "assets/images/instagram.png"
import twitterIcon from "assets/images/twitter.png"

import "./style.scss"

import LockNGL from "./LockNGL"
import BurnNGL from "./BurnNGL"
import HMedallions from "./HMedallions"
import VMedallions from "./VMedallions"

const MedallionsData = [
  {
    title: "VIP Access",
    subtitle: "Tier",
    line: true,
    medallions: ["lock", "empty", "empty"],
  },
  {
    title: "Discount",
    subtitle: "Tier",
    line: true,
    medallions: ["empty", "empty", "empty", "empty", "empty"],
  },
  {
    title: "Merchant",
    subtitle: "Advance",
    line: false,
    medallions: ["lock", "empty", "burn"],
  },
  {
    title: "Guilds",
    subtitle: "Advance",
    line: false,
    medallions: ["empty", "empty"],
  },
]

const MedallionsData1 = ["lock", "lock", "lock", "burn"]

const Rights = ({ match }) => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="rights-page pb-5 mb-5">
        <CRow>
          <CCol lg={12}>
            <GeneralInfo />
          </CCol>
          <CCol lg={10} className="mx-auto p-3">
            <h4>Rights:</h4>
            <hr />
            <section className="pt-3 px-3">
              <div className="d-flex">
                <div className="main" style={{ flex: 1 }}>
                  <div className="d-flex justify-content-between">
                    <LockNGL />
                    <BurnNGL />
                  </div>
                  <div className="medallions-list mt-5">
                    {MedallionsData.map((medallion) => (
                      <HMedallions data={medallion} />
                    ))}
                  </div>
                </div>
                <div className="medallions-diagram">
                  <VMedallions medallions={MedallionsData1} />
                </div>
              </div>
            </section>
            <hr />
          </CCol>
        </CRow>
      </div>
    </DndProvider>
  )
}

export default Rights
