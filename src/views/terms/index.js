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

const Terms = ({ match }) => {
  return (
    <div className="pb-5 mb-5">
      <CRow>
        <CCol lg={12}>
          <GeneralInfo />
        </CCol>
        <CCol lg={9} className="mx-auto p-3">
          <h4>Terms of service:</h4>
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
                <p />
                Quisque sapien sem, tincidunt ac dui quis, tristique fermentum enim.
                Nunc id neque suscipit erat luctus aliquet. Nullam consequat congue
                semper. Donec mollis justo at tempor euismod. Maecenas vel
                ullamcorper nunc. Mauris consequat arcu et erat viverra convallis.
                Duis tristique orci nec eros eleifend varius. Ut ac felis odio.
                Pellentesque habitant morbi tristique senectus et netus et malesuada
                fames ac turpis egestas. Phasellus mattis leo ac enim commodo, ac
                eleifend sapien tristique. Duis feugiat felis vel lobortis
                condimentum. Donec imperdiet magna quam, quis varius enim vulputate
                et. Duis quis nibh sed massa egestas gravida sit amet eu metus.
                Aenean semper sit amet nulla non molestie. Nunc mollis magna nibh, ac
                varius mauris fringilla sed.
                <p />
                Quisque eu justo in elit convallis consequat nec eget nulla. Nullam
                sollicitudin enim sit amet eros vehicula, quis malesuada enim
                tincidunt. Vivamus vel purus fringilla, pellentesque felis et,
                placerat justo. Sed lobortis euismod nisi vel iaculis. In hac
                habitasse platea dictumst. Fusce quis tellus sit amet massa dapibus
                mollis ornare non nibh. Aliquam eget nunc pulvinar, imperdiet risus
                eu, posuere dui. Vestibulum sollicitudin imperdiet orci, et consequat
                elit tempor in. Integer tincidunt pretium purus nec iaculis.
                <p />
                Nam viverra id dui vel venenatis. Aliquam turpis magna, porttitor id
                risus vitae, dapibus egestas metus. Integer et ante orci. Morbi lorem
                justo, condimentum ac ligula in, efficitur rhoncus mi. Vivamus vitae
                mattis ipsum. Ut lacinia viverra ipsum id volutpat. Nulla porttitor
                venenatis tristique. Aliquam elementum sagittis rutrum. Morbi
                pharetra velit mauris, non rutrum sem congue sollicitudin. Integer a
                nibh ac diam suscipit rhoncus vel ut nulla. Vestibulum ante ipsum
                primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut
                porttitor est vel leo gravida, vel rutrum nibh efficitur. Phasellus
                commodo at orci in tincidunt.
                <p />
                Nullam sagittis lectus vel commodo tempor. Duis tempor non ligula eu
                fringilla. Donec eu odio sollicitudin, pulvinar nibh eu, interdum
                dolor. Nunc id commodo nisi. Vivamus a tortor in massa luctus porta
                nec vel turpis. Fusce viverra et odio at sodales. In volutpat ex sed
                bibendum efficitur. Aliquam et lorem est. Donec erat eros, commodo et
                augue vitae, vestibulum vehicula velit. Fusce vehicula a leo ac
                tempor. Sed at blandit magna. Ut molestie at ipsum vel pharetra.
                Morbi euismod porttitor rutrum. Duis et mi varius, efficitur magna
                ut, hendrerit lectus.
              </h5>
            </div>
          </section>
          <hr />
        </CCol>
      </CRow>
    </div>
  )
}

export default Terms
