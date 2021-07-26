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

const Policy = ({ match }) => {
  return (
    <div className="pb-5 mb-5">
      <CRow>
        <CCol lg={12}>
          <GeneralInfo />
        </CCol>
        <CCol lg={9} className="mx-auto p-3">
          <h4>Policy:</h4>
          <hr />
          <section className="py-3 px-3">
            <div className="d-flex">
              <h5 className="text-primary-light f-oswald">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                vehicula dapibus enim ac gravida. Etiam ultrices risus et maximus
                placerat. Aenean id accumsan erat. Duis dictum ex ac pharetra
                suscipit. Integer ut arcu aliquam, elementum lacus ut, sagittis nunc.
                Nullam varius odio libero, in aliquet lectus ultrices id. Fusce
                fringilla, elit ut varius suscipit, elit elit blandit arcu, sed
                cursus leo purus et lectus. Nulla facilisi. Nam in lacus in massa
                blandit iaculis nec in ex. Vivamus vitae tortor ac ante accumsan
                rutrum. Aenean facilisis turpis sed augue semper imperdiet.
                Pellentesque sodales facilisis enim, quis egestas sem dignissim a.
                Duis efficitur augue eu orci pellentesque iaculis. Pellentesque
                dictum, augue in tincidunt posuere, felis magna facilisis dui, non
                placerat elit velit id metus.
              </h5>
            </div>
          </section>
          <hr />
        </CCol>
      </CRow>
    </div>
  )
}

export default Policy
