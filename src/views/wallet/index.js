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

const Wallet = ({ match }) => {
  return (
    <div className="pb-5 mb-5">
      <CRow>
        <CCol lg={12}>
          <GeneralInfo />
        </CCol>
        <CCol lg={10} className="mx-auto p-3">
          <h4>Your wallet:</h4>
          <hr />
          <section className="pt-4 pb-2">
            <div className="d-flex">
              <div className="mr-5">
                <>
                  <div className="position-relative">
                    <div className="gradient-bg position-absolute left-edge" />
                    <h2>
                      <span>NGL</span>
                      <span className="text-primary-light ml-4">2300</span>
                    </h2>
                  </div>
                  <div className="d-flex pt-3">
                    <CButton color="primary" className="mr-4" size="md">
                      Buy
                    </CButton>
                    <CButton color="primary" size="md">
                      Sell
                    </CButton>
                  </div>
                </>
                <>
                  <div className="mt-4 position-relative">
                    <div className="gradient-bg position-absolute left-edge" />
                    <h2>
                      <span>ETH</span>
                      <span className="text-primary-light ml-4">1090</span>
                    </h2>
                  </div>
                  <div className="d-flex pt-3">
                    <CButton color="primary" className="mr-4" size="md">
                      Buy
                    </CButton>
                    <CButton color="primary" size="md">
                      Sell
                    </CButton>
                  </div>
                </>
              </div>
              <div>
                <h5 className="text-primary-light f-oswald">
                  Aliquam enim eros, egestas eget maximus eget, laoreet et lectus.
                  Vestibulum orci elit, bibendum id lectus non, posuere scelerisque
                  diam. Aenean ut leo finibus, luctus nunc nec, varius urna. Aliquam
                  gravida iaculis molestie. Ut gravida diam mi, vel ullamcorper
                  ligula egestas in. Curabitur rutrum, risus ut finibus malesuada,
                  ante urna pulvinar diam, quis aliquam ex sem vel diam. Sed ut ante
                  dapibus, posuere orci quis, ullamcorper lorem. Nulla facilisi.
                </h5>
                <br />
                <h5 className="text-primary-light f-oswald">
                  Etiam at facilisis ex, sit amet ultrices nisl. Nunc ut ex
                  efficitur, consectetur massa non, vehicula tortor. Morbi nec mollis
                  nisi. Nunc hendrerit at augue quis ultricies. Maecenas lorem
                  tortor, finibus quis augue id, sagittis semper risus. Ut accumsan
                  interdum nisi, ac molestie magna porta a. Maecenas accumsan urna at
                  nunc vulputate tincidunt. Praesent fermentum tellus at aliquet
                  egestas. Duis feugiat, tellus ut eleifend cursus, dui sapien
                  accumsan metus, ut maximus lacus libero sed nisl. Aenean iaculis
                  lacinia tortor in suscipit. Suspendisse erat massa, suscipit sed
                  metus ut, eleifend auctor purus. Suspendisse potenti.
                </h5>
              </div>
            </div>
            <CRow className="mt-5">
              <CCol lg={12} xl={6}>
                <CForm
                  action=""
                  method="post"
                  encType="multipart/form-data"
                  className="form-horizontal"
                >
                  <CFormGroup row>
                    <CCol lg={12}>
                      <div className="d-flex">
                        <CLabel
                          className="d-flex align-items-center mt-3"
                          style={{ minWidth: 180 }}
                        >
                          Send NGL{" "}
                          <img
                            className="ml-3"
                            src={goldIcon}
                            width="20"
                            height="25"
                          />
                        </CLabel>
                        <CRow style={{ flex: 1 }}>
                          <CCol md={12} lg={4} className="pr-0">
                            <CFormGroup>
                              <p htmlFor="country" className="mb-0 text-center">
                                Quantity
                              </p>
                              <CInput id="country" className="text-center" />
                            </CFormGroup>
                          </CCol>
                          <CCol md={12} lg={8}>
                            <CFormGroup>
                              <p htmlFor="country" className="mb-0 text-center">
                                Player name / Address
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
                  <CFormGroup row>
                    <CCol lg={12}>
                      <div className="d-flex align-items-center">
                        <CLabel
                          className="d-flex align-items-center mt-2"
                          style={{ minWidth: 180 }}
                        >
                          Receive NGL{" "}
                          <img
                            className="ml-3"
                            src={goldIcon}
                            width="20"
                            height="25"
                          />
                        </CLabel>
                        <CRow style={{ flex: 1 }}>
                          <CCol lg={12}>
                            <CFormGroup className="mb-0">
                              <CInput id="country" className="text-center" />
                            </CFormGroup>
                          </CCol>
                        </CRow>
                        <div className="d-flex align-items-center">
                          <CButton color="primary" className="ml-3" size="md">
                            Copy code
                          </CButton>
                        </div>
                      </div>
                    </CCol>
                  </CFormGroup>
                </CForm>
              </CCol>
              <CCol lg={12} xl={6}>
                <CForm
                  action=""
                  method="post"
                  encType="multipart/form-data"
                  className="form-horizontal"
                >
                  <CFormGroup row>
                    <CCol lg={12}>
                      <div className="d-flex">
                        <CLabel
                          className="d-flex align-items-center mt-3 pl-4"
                          style={{ minWidth: 180 }}
                        >
                          Send Item{" "}
                        </CLabel>
                        <CRow style={{ flex: 1 }}>
                          <CCol md={12} lg={4} className="pr-0">
                            <CFormGroup>
                              <p htmlFor="country" className="mb-0 text-center">
                                Choose item
                              </p>
                              <ChooseItem />
                            </CFormGroup>
                          </CCol>
                          <CCol md={12} lg={8}>
                            <CFormGroup>
                              <p htmlFor="country" className="mb-0 text-center">
                                Player name / Address
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
                  <CFormGroup row>
                    <CCol lg={12}>
                      <div className="d-flex align-items-center">
                        <CLabel
                          className="d-flex align-items-center mt-2 pl-4"
                          style={{ minWidth: 180 }}
                        >
                          Receive Item{" "}
                        </CLabel>
                        <CRow style={{ flex: 1 }}>
                          <CCol lg={12}>
                            <CFormGroup className="mb-0">
                              <CInput id="country" className="text-center" />
                            </CFormGroup>
                          </CCol>
                        </CRow>
                        <div className="d-flex align-items-center">
                          <CButton color="primary" className="ml-3" size="md">
                            Copy code
                          </CButton>
                        </div>
                      </div>
                    </CCol>
                  </CFormGroup>
                </CForm>
              </CCol>
            </CRow>
            <CFormGroup row className="mt-3">
              <CCol lg={12}>
                <div className="d-flex align-items-center">
                  <CLabel
                    className="d-flex align-items-center mt-2"
                    style={{ minWidth: 180 }}
                  >
                    Ethereum key
                  </CLabel>
                  <CRow style={{ flex: 1 }}>
                    <CCol lg={12}>
                      <CFormGroup className="mb-0">
                        <KeyGenerator />
                      </CFormGroup>
                    </CCol>
                  </CRow>
                  <div className="d-flex align-items-center">
                    <CButton color="primary" className="ml-3" disabled size="md">
                      Copy code
                    </CButton>
                  </div>
                </div>
              </CCol>
            </CFormGroup>
          </section>
          <hr />
        </CCol>
      </CRow>
    </div>
  )
}

export default Wallet
