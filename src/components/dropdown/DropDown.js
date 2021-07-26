import React, { useState } from "react"
import {
  CDropdown,
  CDropdownToggle,
  CDropdownItem,
  CDropdownMenu,
} from "@coreui/react"

import "./style.scss"

const DropDown = ({ prefix, menuList, callback }) => {
  const [selectedMenu, selectMenu] = useState(menuList[0])

  const onMenuClick = (menu) => {
    selectMenu(menu)
    callback(menu)
  }

  return (
    <CDropdown className="custom-dropdown">
      <CDropdownToggle>
        {prefix && `${prefix}:  `}
        {selectedMenu.title}
      </CDropdownToggle>
      <CDropdownMenu>
        {menuList.map((menu, key) => (
          <CDropdownItem
            key={key}
            active={menu.value === selectedMenu.value}
            onClick={() => onMenuClick(menu)}
          >
            {menu.title}
          </CDropdownItem>
        ))}
      </CDropdownMenu>
    </CDropdown>
  )
}

export default DropDown
