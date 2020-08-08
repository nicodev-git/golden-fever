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

const Host = ({ match }) => {
  return (
    <div className="pb-5 mb-5">
      <CRow>
        <CCol lg={12}>
          <GeneralInfo />
        </CCol>
        <CCol lg={9} className="mx-auto p-3">
          <h4>Map host:</h4>
          <hr />
          <section className="pt-4">
            <CRow>
              <CCol lg={10}>
                <CForm
                  action=""
                  method="post"
                  encType="multipart/form-data"
                  className="form-horizontal"
                >
                  <div className="d-flex justify-content-center flex-wrap">
                    <CFormGroup className="mx-2" style={{ flex: 2 }}>
                      <div className="d-flex">
                        <CFormGroup>
                          <p htmlFor="country" className="mb-2 text-center">
                            Start time
                          </p>
                          <CInput
                            id="country"
                            className="text-center"
                            value="20/08/2020 12:00 PM"
                          />
                        </CFormGroup>
                      </div>
                    </CFormGroup>

                    <CFormGroup className="mx-2" style={{ flex: 1.5 }}>
                      <div className="d-flex">
                        <CFormGroup>
                          <p htmlFor="country" className="mb-2 text-center">
                            Game type
                          </p>
                          <CInput
                            id="country"
                            className="text-center"
                            value="Mining bonanza"
                          />
                        </CFormGroup>
                      </div>
                    </CFormGroup>

                    <CFormGroup className="mx-2" style={{ flex: 0.8 }}>
                      <div className="d-flex">
                        <CFormGroup>
                          <p htmlFor="country" className="mb-2 text-center">
                            Entry fee
                          </p>
                          <CInput
                            id="country"
                            className="text-center"
                            value="Free"
                          />
                        </CFormGroup>
                      </div>
                    </CFormGroup>

                    <CFormGroup className="mx-2" style={{ flex: 1 }}>
                      <div className="d-flex">
                        <CFormGroup>
                          <p htmlFor="country" className="mb-2 text-center">
                            Map
                          </p>
                          <CInput
                            id="country"
                            className="text-center"
                            value="Inner jungle"
                          />
                        </CFormGroup>
                      </div>
                    </CFormGroup>

                    <CFormGroup className="mx-2" style={{ flex: 2.5 }}>
                      <div className="d-flex">
                        <CFormGroup>
                          <p htmlFor="country" className="mb-2 text-center">
                            Name
                          </p>
                          <CInput
                            id="country"
                            className="text-center"
                            value="Game name in here"
                          />
                        </CFormGroup>
                      </div>
                    </CFormGroup>
                  </div>
                  <div className="d-flex justify-content-center flex-wrap">
                    <CFormGroup className="mx-2 w-25">
                      <div className="d-flex">
                        <CFormGroup>
                          <p htmlFor="country" className="mb-2 text-center">
                            NGL deposit
                          </p>
                          <CInput
                            id="country"
                            className="text-center text-yellow"
                            value="5000"
                          />
                        </CFormGroup>
                      </div>
                    </CFormGroup>

                    <CFormGroup className="mx-2">
                      <div className="d-flex">
                        <CFormGroup>
                          <p htmlFor="country" className="mb-2 text-center">
                            Tribal rewards
                          </p>
                          <CInput
                            id="country"
                            className="text-center"
                            value="Rewards description"
                          />
                        </CFormGroup>
                      </div>
                    </CFormGroup>

                    <CFormGroup className="mx-2 w-15">
                      <div className="d-flex">
                        <CFormGroup>
                          <p htmlFor="country" className="mb-2 text-center">
                            Players count
                          </p>
                          <CInput id="country" className="text-center" value="48" />
                        </CFormGroup>
                      </div>
                    </CFormGroup>
                  </div>
                </CForm>
              </CCol>
              <CCol
                lg={2}
                className="d-flex justify-content-center align-items-center pl-0"
              >
                <CButton color="primary" className="ml-3" size="md">
                  Host
                </CButton>
              </CCol>
            </CRow>
          </section>

          <h4>Game server host:</h4>
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
            <h1
              className="text-center text-primary-light mb-3"
              style={{ fontSize: 55 }}
            >
              soon
            </h1>
            <div className="d-flex w-100 justify-content-center align-items-center">
              <CButton color="primary" className="mx-3 px-4">
                Download host software
              </CButton>
              <CButton color="primary" className="mx-3 px-4">
                Installation instruction
              </CButton>
            </div>
          </section>
          <hr />
        </CCol>
      </CRow>
    </div>
  )
}

export default Host
