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
import ChooseItem from "components/chooseItem/ChooseItem"
import KeyGenerator from "components/keyGenerator/KeyGenerator"

import GeneralInfo from "components/generalInfo/GeneralInfo"

import facebookIcon from "assets/images/facebook.png"
import youtubeIcon from "assets/images/youtube.png"
import instagramIcon from "assets/images/instagram.png"
import twitterIcon from "assets/images/twitter.png"

const Press = ({ match }) => {
  return (
    <div className="pb-5 mb-5">
      <CRow>
        <CCol lg={12}>
          <GeneralInfo />
        </CCol>
        <CCol lg={9} className="mx-auto p-3">
          <h4>Press:</h4>
          <hr />
          <section className="py-3 px-3">
            <div className="d-flex">
              <h5 className="text-primary-light f-oswald">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                fermentum pulvinar tortor, sit amet vestibulum est. Aliquam tempor ac
                lectus a vestibulum. Cras sollicitudin sapien in neque elementum
                congue. Proin vestibulum interdum nunc, sit amet iaculis ante
                consectetur a. Nunc sed faucibus leo, in molestie neque. Proin
                fringilla interdum ante, et consectetur arcu tempor in. Aliquam non
                elit eget velit condimentum blandit nec a tortor. Praesent auctor et
                tellus ultrices mollis. Integer nec varius lacus. In at tempus diam.
                Nunc volutpat libero a interdum mattis. Curabitur id semper urna. Sed
                eget dolor ac mi ultricies mattis. Donec vitae elit molestie, cursus
                massa ut, dapibus
              </h5>
            </div>
            <div className="d-flex w-100 justify-content-center align-items-center mt-5">
              <CButton color="primary" className="mx-3 px-5">
                Download press kit
              </CButton>
            </div>
          </section>
          <hr />
          <h4>Contacts:</h4>
          <section className="px-3 py-3">
            <CRow>
              <CCol lg={3}>
                <div className="d-flex align-items-center justify-content-center py-4 flex-column">
                  <div className="mb-5">
                    <h5>Contact:</h5>
                    <h5 className="text-primary-light">about@company.com</h5>
                  </div>
                  <div className="">
                    <h5>Media inquires:</h5>
                    <h5 className="text-primary-light">about@company.com</h5>
                  </div>
                </div>
              </CCol>
              <CCol lg={9}>
                <div className="d-flex h-100 align-items-center justify-content-center py-4 social-icons">
                  <a href="/#" className="text-primary-light mx-2">
                    <img src={twitterIcon} width="30" /> /company
                  </a>
                  <a href="/#" className="text-primary-light mx-2">
                    <img src={facebookIcon} height="30" /> /company
                  </a>
                  <a href="/#" className="text-primary-light mx-2">
                    <img src={instagramIcon} width="30" /> /company
                  </a>
                  <a href="/#" className="text-primary-light mx-2">
                    <img src={youtubeIcon} height="22" /> /company
                  </a>
                </div>
              </CCol>
            </CRow>
          </section>
          <hr />
        </CCol>
      </CRow>
    </div>
  )
}

export default Press
