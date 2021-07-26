import React from "react"
import { CButton, CCol, CRow } from "@coreui/react"
import "./style.scss"

import CCarousel from "components/carousel/Carousel"

import LogoIcon from "assets/images/landing-logo.png"
import playIcon from "assets/images/playIcon.png"
import arrowIcon from "assets/images/arrow.png"

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="top-bg" style={{ opacity: 0.9, height: 170 }} />
      <section className="video-section d-flex justify-content-center align-items-center flex-column">
        <div className="mt-4">
          <img src={LogoIcon} width="500" />
        </div>
        <CButton className="play-button d-flex align-items-center justify-content-center">
          <img src={playIcon} width="20" className="mr-2" />
          Play video
        </CButton>
      </section>

      <div className="divider d-flex justify-content-center align-items-center">
        <CButton className="download-button d-flex align-items-center justify-content-center">
          <img src={arrowIcon} width="20" className="mr-2" />
          Download game
        </CButton>
      </div>

      <section className="media-section d-flex justify-content-center align-items-center flex-column">
        <CRow className="w-100">
          <CCol lg={6} className="mx-auto">
            <h2 className="text-left mb-3">Media</h2>
          </CCol>
        </CRow>
        <CCarousel />
      </section>

      <div className="divider" />
      <section className="feature-section d-flex justify-content-center align-items-center flex-column">
        <CRow className="w-100">
          <CCol lg={7} className="mx-auto w-100">
            <h2 className="text-right w-100 px-5">Features</h2>
          </CCol>
        </CRow>
        <CRow className="w-100 left-bg px-4 py-5">
          <CCol lg={7} className="mx-auto ">
            <h4 className="f-oswald text-primary-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              fermentum pulvinar tortor, sit amet vestibulum est. Aliquam tempor ac
              lectus a vestibulum. Cras sollicitudin sapien in neque elementum
              congue. Proin vestibulum
            </h4>
          </CCol>
        </CRow>
        <CRow className="w-100 right-bg px-4 py-5 mt-5">
          <CCol lg={7} className="mx-auto">
            <h4 className="f-oswald text-primary-light">
              Aliquam non elit eget velit condimentum blandit nec a tortor. Praesent
              auctor et tellus ultrices mollis. Integer nec varius lacus. In at
              tempus diam. Nunc volutpat libero a interdum mattis. Curabitur id
              semper urna. Sed eget dolor ac
            </h4>
          </CCol>
        </CRow>
        <CRow className="w-100 left-bg px-4 py-5 mt-5">
          <CCol lg={7} className="mx-auto">
            <h4 className="f-oswald text-primary-light">
              Curabitur id ante quam. Quisque in dictum ipsum. Cras est eros,
              eleifend sit amet condimentum sit amet, laoreet ac felis. Donec egestas
              mauris ut varius consectetur. Ut ut lorem libero. Interdum et malesuada
              fames ac ante ipsum primis in faucibus. Maecenas at vulputate magna,
              vitae pellentesque nunc. Sed ligula ipsum, dapibus ac bibendum
            </h4>
          </CCol>
        </CRow>
      </section>

      <div className="divider" />
      <section className="story-section d-flex justify-content-center align-items-center flex-column">
        <CRow className="w-100">
          <CCol lg={7} className="mx-auto w-100">
            <h2 className="w-100">Story</h2>
          </CCol>
        </CRow>
        <CRow className="w-100 py-5">
          <CCol lg={7} className="mx-auto ">
            <h4 className="f-oswald text-primary-light">
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
              massa ut, dapibus risus.
              <br />
              <br />
              Nulla ac magna quis odio sollicitudin consequat. Phasellus elementum
              arcu nunc, ut tincidunt magna lacinia eu. Nam vel mi vitae ligula
              dictum molestie et sit amet est. Aenean pharetra placerat feugiat. Ut
              luctus ante massa, in dignissim massa vulputate id. Curabitur id ante
              quam. Quisque in dictum ipsum. Cras est eros, eleifend sit amet
              condimentum sit amet, laoreet ac felis. Donec egestas mauris ut varius
              consectetur. Ut ut lorem libero. Interdum et malesuada fames ac ante
              ipsum primis in faucibus. Maecenas at vulputate magna, vitae
              pellentesque nunc. Sed ligula ipsum, dapibus ac bibendum vitae,
              hendrerit quis nibh. Nam tincidunt urna nisi, a lobortis lacus sodales
              ac.
              <br />
              <br />
              Aliquam semper congue fringilla. Praesent et rhoncus leo. Pellentesque
              dignissim neque nec augue vehicula dignissim. Donec elementum risus
              sapien, a commodo diam rutrum in. Aenean pretium mauris eget enim
              efficitur feugiat. Aenean et arcu ac ipsum convallis ultrices tincidunt
              ut magna. Nullam aliquam mauris non risus venenatis, quis feugiat
              lectus malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Nam sed ex vehicula, hendrerit lorem nec, consequat lectus.
              Nullam pulvinar sem non magna tincidunt, et lacinia nisi molestie.
              Nulla volutpat arcu odio, in maximus libero molestie et. Suspendisse
              sed enim et augue tincidunt aliquet at id eros. In fringilla lacus
              lectus, vitae scelerisque magna sagittis in.
            </h4>
          </CCol>
        </CRow>
      </section>
      <div className="divider" />

      <section className="system-section d-flex justify-content-center align-items-center flex-column">
        <CRow className="w-100">
          <CCol lg={7} className="mx-auto w-100">
            <h2 className="text-right w-100 px-5">System requirements</h2>
          </CCol>
        </CRow>
        <CRow className="w-100 left-bg px-4 py-5">
          <CCol lg={7} className="mx-auto ">
            <CRow>
              <CCol lg={6}>
                <div className="text-left">
                  <h4 className="mb-4">Minimum</h4>
                  <p className="f-oswald text-primary-light mb-0">
                    CPU: Intel Core i3-530 (2 * 2930), AMD Athlon II X2 270 (2 *
                    3400)
                  </p>
                  <p className="f-oswald text-primary-light mb-0">CPU SPEED: Info</p>
                  <p className="f-oswald text-primary-light mb-0">RAM: 4096 MB</p>
                  <p className="f-oswald text-primary-light mb-0">
                    OS: Windows 7, Windows 8, Windows 10
                  </p>
                  <p className="f-oswald text-primary-light mb-0">
                    VIDEO CARD: GeForce GTX 650 Ti (1024 MB), Radeon HD 7770 (1024
                    MB)
                  </p>
                  <p className="f-oswald text-primary-light mb-0">
                    PIXEL SHADER: 5.0
                  </p>
                  <p className="f-oswald text-primary-light mb-0">
                    VERTEX SHADER: 5.0
                  </p>
                  <p className="f-oswald text-primary-light mb-0">
                    FREE DISK SPACE: 4 GB
                  </p>
                  <p className="f-oswald text-primary-light mb-0">
                    DEDICATED VIDEO RAM: 1024 MB
                  </p>
                </div>
              </CCol>
              <CCol lg={6}>
                <div className="text-right">
                  <h4 className="mb-4">Minimum</h4>
                  <p className="f-oswald text-primary-light mb-0">
                    CPU: Intel Core i3-530 (2 * 2930), AMD Athlon II X2 270 (2 *
                    3400)
                  </p>
                  <p className="f-oswald text-primary-light mb-0">CPU SPEED: Info</p>
                  <p className="f-oswald text-primary-light mb-0">RAM: 4096 MB</p>
                  <p className="f-oswald text-primary-light mb-0">
                    OS: Windows 7, Windows 8, Windows 10
                  </p>
                  <p className="f-oswald text-primary-light mb-0">
                    VIDEO CARD: GeForce GTX 650 Ti (1024 MB), Radeon HD 7770 (1024
                    MB)
                  </p>
                  <p className="f-oswald text-primary-light mb-0">
                    PIXEL SHADER: 5.0
                  </p>
                  <p className="f-oswald text-primary-light mb-0">
                    VERTEX SHADER: 5.0
                  </p>
                  <p className="f-oswald text-primary-light mb-0">
                    FREE DISK SPACE: 4 GB
                  </p>
                  <p className="f-oswald text-primary-light mb-0">
                    DEDICATED VIDEO RAM: 1024 MB
                  </p>
                </div>
              </CCol>
            </CRow>
          </CCol>
        </CRow>
      </section>
      <div className="divider" style={{ marginBottom: -80 }} />
    </div>
  )
}

export default LandingPage
