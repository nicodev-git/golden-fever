import React from "react"
import "./style.scss"

import cartIcon from "assets/images/cart.png"
import goldIcon from "assets/images/gold.png"
import julsIcon from "assets/images/juls.png"

const GeneralInfo = ({ match }) => {
  return (
    <div className="d-flex justify-content-end mt-2 general-info-menu">
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
  )
}

export default GeneralInfo
