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
          <img src={julsIcon} width="30" height="28" />
          840
        </div>
        <div className="item">
          <img src={goldIcon} width="23" height="24" />
          200
        </div>
        <div className="item">
          <img src={cartIcon} width="20" height="20" />
          Cart
        </div>
      </div>
    </div>
  )
}

export default GeneralInfo
