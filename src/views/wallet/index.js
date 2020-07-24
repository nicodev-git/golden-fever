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

import cartIcon from "assets/images/cart.png"
import goldIcon from "assets/images/gold.png"
import julsIcon from "assets/images/juls.png"

const Wallet = ({ match }) => {
  return (
    <div className="pb-5">
      <CRow>
        <CCol lg={12}>
          <div className="d-flex justify-content-end mt-2">
            <div className="c-menu-info d-flex align-items-center">
              <div className="item">
                <img src={julsIcon} width="40" height="38" />
                840
              </div>
              <div className="item">
                <img src={goldIcon} width="23" height="27" />
                200
              </div>
              <div className="item">
                <img src={cartIcon} width="25" height="25" />
                Cart
              </div>
            </div>
          </div>
        </CCol>
        <CCol lg={9} className="mx-auto p-3">
          <h3>Your wallet:</h3>
          <hr />
          <section className="pt-4 pb-2">
            <CRow>
              <CCol lg={3}>
                <>
                  <div>
                    <h1>
                      <span>NGL</span>
                      <span className="text-primary-light ml-4">2300</span>
                    </h1>
                  </div>
                  <CRow className="py-3">
                    <CCol lg={6}>
                      <CButton color="primary">Buy</CButton>
                    </CCol>
                    <CCol lg={6}>
                      <CButton color="primary">Sell</CButton>
                    </CCol>
                  </CRow>
                </>
                <>
                  <div className="mt-4">
                    <h1>
                      <span>ETH</span>
                      <span className="text-primary-light ml-4">1090</span>
                    </h1>
                  </div>
                  <CRow className="py-3">
                    <CCol lg={6}>
                      <CButton color="primary">Buy</CButton>
                    </CCol>
                    <CCol lg={6}>
                      <CButton color="primary">Sell</CButton>
                    </CCol>
                  </CRow>
                </>
              </CCol>
              <CCol lg={9}>
                <h4 className="text-primary-light f-oswald">
                  Aliquam enim eros, egestas eget maximus eget, laoreet et lectus.
                  Vestibulum orci elit, bibendum id lectus non, posuere scelerisque
                  diam. Aenean ut leo finibus, luctus nunc nec, varius urna. Aliquam
                  gravida iaculis molestie. Ut gravida diam mi, vel ullamcorper
                  ligula egestas in. Curabitur rutrum, risus ut finibus malesuada,
                  ante urna pulvinar diam, quis aliquam ex sem vel diam. Sed ut ante
                  dapibus, posuere orci quis, ullamcorper lorem. Nulla facilisi.
                </h4>
                <br />
                <h4 className="text-primary-light f-oswald">
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
                </h4>
              </CCol>
            </CRow>
            <CRow className="mt-5">
              <CCol lg={6}>
                <CForm
                  action=""
                  method="post"
                  encType="multipart/form-data"
                  className="form-horizontal"
                >
                  <CFormGroup row>
                    <CCol md="3" className="d-flex align-items-end mb-3">
                      <CLabel className="d-flex align-items-center justify-content-center">
                        Send NGL{" "}
                        <img
                          className="ml-3"
                          src={goldIcon}
                          width="20"
                          height="25"
                        />
                      </CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CRow>
                        <CCol lg={3}>
                          <CFormGroup>
                            <p htmlFor="country" className="mb-0 text-center">
                              Quantity
                            </p>
                            <CInput id="country" placeholder="Country name" />
                          </CFormGroup>
                        </CCol>
                        <CCol lg={6}>
                          <CFormGroup>
                            <p htmlFor="country" className="mb-0 text-center">
                              Player name / Address
                            </p>
                            <CInput id="country" placeholder="Country name" />
                          </CFormGroup>
                        </CCol>
                        <CCol lg={3} className="d-flex align-items-end mb-4">
                          <CButton color="primary">Send</CButton>
                        </CCol>
                      </CRow>
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="3" className="d-flex align-items-end mb-3">
                      <CLabel className="d-flex align-items-center justify-content-center">
                        Receive NGL{" "}
                        <img
                          className="ml-1"
                          src={goldIcon}
                          width="20"
                          height="25"
                        />
                      </CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CRow>
                        <CCol lg={9}>
                          <CFormGroup>
                            <p htmlFor="country" className="mb-0 text-center"></p>
                            <CInput id="country" placeholder="Country name" />
                          </CFormGroup>
                        </CCol>
                        <CCol lg={3} className="d-flex align-items-end mb-4">
                          <CButton color="primary">Copy code</CButton>
                        </CCol>
                      </CRow>
                    </CCol>
                  </CFormGroup>
                </CForm>
              </CCol>
              <CCol lg={6}>
                <CForm
                  action=""
                  method="post"
                  encType="multipart/form-data"
                  className="form-horizontal"
                >
                  <CFormGroup row>
                    <CCol md="3" className="d-flex align-items-end mb-3">
                      <CLabel className="d-flex align-items-center justify-content-center">
                        Send Item
                      </CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CRow>
                        <CCol lg={3}>
                          <CFormGroup>
                            <p htmlFor="country" className="mb-0 text-center">
                              Quantity
                            </p>
                            <CInput id="country" placeholder="Country name" />
                          </CFormGroup>
                        </CCol>
                        <CCol lg={6}>
                          <CFormGroup>
                            <p htmlFor="country" className="mb-0 text-center">
                              Player name / Address
                            </p>
                            <CInput id="country" placeholder="Country name" />
                          </CFormGroup>
                        </CCol>
                        <CCol lg={3} className="d-flex align-items-end mb-4">
                          <CButton color="primary">Send</CButton>
                        </CCol>
                      </CRow>
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="3" className="d-flex align-items-end mb-3">
                      <CLabel className="d-flex align-items-center justify-content-center">
                        Receive Item
                      </CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CRow>
                        <CCol lg={9}>
                          <CFormGroup>
                            <CInput id="country" placeholder="Country name" />
                          </CFormGroup>
                        </CCol>
                        <CCol lg={3} className="d-flex align-items-end mb-4">
                          <CButton color="primary">Copy code</CButton>
                        </CCol>
                      </CRow>
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

export default Wallet
