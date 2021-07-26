import React from "react"
import { CFooter, CHeaderNav, CHeaderNavItem, CHeaderNavLink } from "@coreui/react"

const TheFooter = () => {
  return (
    <CFooter fixed={false} className="p-3">
      <h5 className="text-center w-100">
        Footer info here whatever is needed. Footer info here whatever is needed.
        Footer info here whatever is needed. Footer info here whatever is needed.
      </h5>
      <p className="text-center f-oswald text-primary-dark w-90 mx-auto mb-1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fermentum
        pulvinar tortor, sit amet vestibulum est. Aliquam tempor ac lectus a
        vestibulum. Cras sollicitudin sapien in neque elementum congue. Proin
        vestibulum interdum nunc, sit amet iaculis ante consectetur a. Nunc sed
        faucibus leo, in molestie neque. Proin fringilla interdum ante, et
        consectetur arcu tempor in. Aliquam non elit eget velit condimentum blandit
        nec a tortor. Praesent auctor et tellus ultrices mollis. Integer nec varius
        lacus. In at tempus diam. Nunc volutpat libero a interdum mattis. Curabitur
        id semper urna. Sed eget dolor ac mi ultricies mattis. Donec vitae elit
        molestie
      </p>
      <CHeaderNav className="d-md-down-none c-menus mx-auto">
        <CHeaderNavItem className="px-3">
          <CHeaderNavLink to="/investors">Investors</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem className="px-3">
          <CHeaderNavLink to="/aboutus">About Us</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem className="px-3">
          <CHeaderNavLink to="/press">Press Kit</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem className="px-3">
          <CHeaderNavLink to="/terms">Terms of Use</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem className="px-3">
          <CHeaderNavLink to="/policy">Privacy Policy</CHeaderNavLink>
        </CHeaderNavItem>
      </CHeaderNav>
    </CFooter>
  )
}

export default React.memo(TheFooter)
