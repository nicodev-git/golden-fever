import React from "react"
import { CInput } from "@coreui/react"

import SearchIcon from "assets/images/searchIcon.png"
import "./style.scss"

const SearchInput = ({ callback }) => {
  return (
    <div className="c-search">
      <img src={SearchIcon} width="20" className="search-icon" />
      <CInput
        className="text-center pl-5"
        placeholder="Search..."
        onChange={(e) => callback(e.target.value)}
      />
    </div>
  )
}

export default SearchInput
