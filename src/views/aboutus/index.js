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

import GeneralInfo from "components/generalInfo/GeneralInfo"

import personImg from "assets/images/person.png"

const AboutUs = ({ match }) => {
  return (
    <div className="aboutus-page pb-5 mb-5">
      <CRow>
        <CCol lg={12}>
          <GeneralInfo />
        </CCol>
        <CCol lg={9} className="mx-auto p-3">
          <h4>About:</h4>
          <hr />
          <section className="py-4">
            <div className="d-flex">
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
              </div>
            </div>
          </section>
          <hr />
          <section className="px-3">
            <CRow className="mb-4">
              <CCol lg={2}>
                <img src={personImg} width="100%" />
              </CCol>
              <CCol lg={10}>
                <h3 className="mb-0">Name Surname</h3>
                <h5 className="text-primary-light">Position in the company</h5>
                <p className="mt-3 text-primary-light f-oswald text-right w-80 ml-auto">
                  Aliquam enim eros, egestas eget maximus eget, laoreet et lectus.
                  Vestibulum orci elit, bibendum id lectus non, posuere scelerisque
                  diam. Aenean ut leo finibus, luctus nunc nec, varius urna. Aliquam
                  gravida iaculis molestie. Ut gravida diam mi, vel ullamcorper
                  ligula egestas in. Curabitur rutrum, risus ut finibus malesuada,
                  ante urna pulvinar diam, quis aliquam ex sem vel diam. Sed ut ante
                  dapibus, posuere orci quis, ullamcorper lorem. Nulla facilisi.
                </p>
              </CCol>
            </CRow>
            <CRow className="mb-4">
              <CCol lg={2}>
                <img src={personImg} width="100%" />
              </CCol>
              <CCol lg={10}>
                <h3 className="mb-0">Name Surname</h3>
                <h5 className="text-primary-light">Position in the company</h5>
                <p className="mt-3 text-primary-light f-oswald text-right w-80 ml-auto">
                  Aliquam enim eros, egestas eget maximus eget, laoreet et lectus.
                  Vestibulum orci elit, bibendum id lectus non, posuere scelerisque
                  diam. Aenean ut leo finibus, luctus nunc nec, varius urna. Aliquam
                  gravida iaculis molestie. Ut gravida diam mi, vel ullamcorper
                  ligula egestas in. Curabitur rutrum, risus ut finibus malesuada,
                  ante urna pulvinar diam, quis aliquam ex sem vel diam. Sed ut ante
                  dapibus, posuere orci quis, ullamcorper lorem. Nulla facilisi.
                </p>
              </CCol>
            </CRow>
            <CRow className="mb-4">
              <CCol lg={2}>
                <img src={personImg} width="100%" />
              </CCol>
              <CCol lg={10}>
                <h3 className="mb-0">Name Surname</h3>
                <h5 className="text-primary-light">Position in the company</h5>
                <p className="mt-3 text-primary-light f-oswald text-right w-80 ml-auto">
                  Aliquam enim eros, egestas eget maximus eget, laoreet et lectus.
                  Vestibulum orci elit, bibendum id lectus non, posuere scelerisque
                  diam. Aenean ut leo finibus, luctus nunc nec, varius urna. Aliquam
                  gravida iaculis molestie. Ut gravida diam mi, vel ullamcorper
                  ligula egestas in. Curabitur rutrum, risus ut finibus malesuada,
                  ante urna pulvinar diam, quis aliquam ex sem vel diam. Sed ut ante
                  dapibus, posuere orci quis, ullamcorper lorem. Nulla facilisi.
                </p>
              </CCol>
            </CRow>
            <CRow className="mb-4">
              <CCol lg={2}>
                <img src={personImg} width="100%" />
              </CCol>
              <CCol lg={10}>
                <h3 className="mb-0">Name Surname</h3>
                <h5 className="text-primary-light">Position in the company</h5>
                <p className="mt-3 text-primary-light f-oswald text-right w-80 ml-auto">
                  Aliquam enim eros, egestas eget maximus eget, laoreet et lectus.
                  Vestibulum orci elit, bibendum id lectus non, posuere scelerisque
                  diam. Aenean ut leo finibus, luctus nunc nec, varius urna. Aliquam
                  gravida iaculis molestie. Ut gravida diam mi, vel ullamcorper
                  ligula egestas in. Curabitur rutrum, risus ut finibus malesuada,
                  ante urna pulvinar diam, quis aliquam ex sem vel diam. Sed ut ante
                  dapibus, posuere orci quis, ullamcorper lorem. Nulla facilisi.
                </p>
              </CCol>
            </CRow>
            <CRow className="mb-4">
              <CCol lg={2}>
                <img src={personImg} width="100%" />
              </CCol>
              <CCol lg={10}>
                <h3 className="mb-0">Name Surname</h3>
                <h5 className="text-primary-light">Position in the company</h5>
                <p className="mt-3 text-primary-light f-oswald text-right w-80 ml-auto">
                  Aliquam enim eros, egestas eget maximus eget, laoreet et lectus.
                  Vestibulum orci elit, bibendum id lectus non, posuere scelerisque
                  diam. Aenean ut leo finibus, luctus nunc nec, varius urna. Aliquam
                  gravida iaculis molestie. Ut gravida diam mi, vel ullamcorper
                  ligula egestas in. Curabitur rutrum, risus ut finibus malesuada,
                  ante urna pulvinar diam, quis aliquam ex sem vel diam. Sed ut ante
                  dapibus, posuere orci quis, ullamcorper lorem. Nulla facilisi.
                </p>
              </CCol>
            </CRow>
            <CRow className="mb-4">
              <CCol lg={2}>
                <img src={personImg} width="100%" />
              </CCol>
              <CCol lg={10}>
                <h3 className="mb-0">Name Surname</h3>
                <h5 className="text-primary-light">Position in the company</h5>
                <p className="mt-3 text-primary-light f-oswald text-right w-80 ml-auto">
                  Aliquam enim eros, egestas eget maximus eget, laoreet et lectus.
                  Vestibulum orci elit, bibendum id lectus non, posuere scelerisque
                  diam. Aenean ut leo finibus, luctus nunc nec, varius urna. Aliquam
                  gravida iaculis molestie. Ut gravida diam mi, vel ullamcorper
                  ligula egestas in. Curabitur rutrum, risus ut finibus malesuada,
                  ante urna pulvinar diam, quis aliquam ex sem vel diam. Sed ut ante
                  dapibus, posuere orci quis, ullamcorper lorem. Nulla facilisi.
                </p>
              </CCol>
            </CRow>
            <CRow>
              <CCol lg={2}>
                <img src={personImg} width="100%" />
              </CCol>
              <CCol lg={10}>
                <h3 className="mb-0">Name Surname</h3>
                <h5 className="text-primary-light">Position in the company</h5>
                <p className="mt-3 text-primary-light f-oswald text-right w-80 ml-auto">
                  Aliquam enim eros, egestas eget maximus eget, laoreet et lectus.
                  Vestibulum orci elit, bibendum id lectus non, posuere scelerisque
                  diam. Aenean ut leo finibus, luctus nunc nec, varius urna. Aliquam
                  gravida iaculis molestie. Ut gravida diam mi, vel ullamcorper
                  ligula egestas in. Curabitur rutrum, risus ut finibus malesuada,
                  ante urna pulvinar diam, quis aliquam ex sem vel diam. Sed ut ante
                  dapibus, posuere orci quis, ullamcorper lorem. Nulla facilisi.
                </p>
              </CCol>
            </CRow>
          </section>
          <hr />
        </CCol>
      </CRow>
    </div>
  )
}

export default AboutUs
