import React from "react"
import { CFooter } from "@coreui/react"

const TheFooter = () => {
  return (
    <CFooter fixed={false} className="p-3">
      <h4 className="text-center w-100">
        Footer info here whatever is needed. Footer info here whatever is needed.
        Footer info here whatever is needed. Footer info here whatever is needed.
      </h4>
      <h4 className="text-center f-oswald text-primary-dark w-90 mx-auto">
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
      </h4>
    </CFooter>
  )
}

export default React.memo(TheFooter)
