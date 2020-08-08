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

import cartIcon from "assets/images/cart.png"
import goldIcon from "assets/images/gold.png"
import julsIcon from "assets/images/juls.png"

const Investors = ({ match }) => {
  return (
    <div className="pb-5 mb-5">
      <CRow>
        <CCol lg={12}>
          <GeneralInfo />
        </CCol>
        <CCol lg={10} className="mx-auto p-3">
          <h4>Investors:</h4>
          <hr />
          <section className="pt-4 pb-0">
            <div className="d-flex">
              <div>
                <h5 className="text-primary-light f-oswald mb-5">
                  As technology advances, the digital world increasingly mirrors the
                  physical world. Nowhere is this more apparent than in gaming, where
                  entire cultures develop around the most popular games - complete
                  with memes, fashions, legendary players, and so on. However, one
                  aspect of in-game worlds that remains largely untapped is the
                  development of robust in-game economies. Such economies, if
                  designed correctly, have the potential to supercharge growth of the
                  game and its surrounding ecosystem.
                </h5>
                <h5 className="text-primary-light f-oswald mb-5">
                  Gold Fever is, at its core, an exciting and addictive online
                  multiplayer video game. However, Gold Fever is also much more than
                  that. Gold Fever allows players to, for the first time, take real
                  ownership of scarce in-game items like characters, weapons, and
                  artefacts. It also enables the development of a wider community of
                  individuals who, motivated by the potential to earn a profit,
                  contribute their time and money to the development of the game, its
                  infrastructure, and its surrounding ecosystem.
                </h5>
                <h5 className="text-primary-light f-oswald mb-5">
                  By leveraging a cryptocurrency, by enabling digital scarcity
                  through the use of non-fungible tokens, and by taking a
                  decentralized approach to the very structure of the game, Gold
                  Fever has the potential to revolutionize the way online game worlds
                  develop.
                </h5>
                <h5 className="text-primary-light f-oswald">
                  To receive the full white paper for Gold Fever, please leave your
                  email below:
                </h5>
              </div>
            </div>
            <CRow className="mt-5">
              <CCol lg={5} className="mx-auto">
                <CForm
                  action=""
                  method="post"
                  encType="multipart/form-data"
                  className="form-horizontal mb-0"
                >
                  <CFormGroup row>
                    <CCol lg={12}>
                      <div className="d-flex">
                        <CRow style={{ flex: 1 }}>
                          <CCol lg={11} className="pr-0">
                            <CFormGroup>
                              <p htmlFor="country" className="mb-0 text-center">
                                Email Address
                              </p>
                              <CInput id="country" className="text-center" />
                            </CFormGroup>
                          </CCol>
                        </CRow>
                        <div className="d-flex align-items-center mt-2">
                          <CButton color="primary" className="ml-3" size="md">
                            Send
                          </CButton>
                        </div>
                      </div>
                    </CCol>
                  </CFormGroup>
                </CForm>
              </CCol>
            </CRow>
          </section>
          <hr />
        </CCol>
      </CRow>
    </div>
  )
}

export default Investors
