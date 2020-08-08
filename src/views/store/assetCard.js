import React from "react"
import { CButton } from "@coreui/react"
import cartIcon from "assets/images/cart.png"
import goldIcon from "assets/images/gold.png"
import julsIcon from "assets/images/juls.png"
import darkCartIcon from "assets/images/dark-cart.png"
import itemIcon from "assets/images/assetItem.png"

const AssetCard = ({ data }) => (
  <div className="item-card px-4 py-5 text-center">
    <img src={itemIcon} width="87" height="97" className="mx-auto mt-4" />
    {data.coupon ? (
      <div className="d-flex justify-content-between align-items-center  mt-3">
        <h6 className="text-left">{data.title}</h6>
        <h5 className="text-primary-light">-{data.couponRate}%</h5>
      </div>
    ) : (
      <h6 className="text-left mt-3">{data.title}</h6>
    )}

    <p className="text-left text-primary-light mb-1">{data.description}</p>
    <hr className="my-2" />
    {data.purchased ? (
      <h5 className="text-primary-light text-left">Purchased</h5>
    ) : data.ptype === "cart" ? (
      <div className="d-flex justify-content-between align-items-center">
        <h6 className="mb-0">
          <span className="mr-2">{data.currency}</span>
          <span className="mr-2">{data.price}</span>
          {data.coupon && <span className="text-coupon">{data.coupon}</span>}
        </h6>
        <CButton size="sm">
          <img src={darkCartIcon} width="15" />
        </CButton>
      </div>
    ) : (
      <div className="d-flex justify-content-between align-items-center">
        <h6 className="mb-0">
          {data.gold && (
            <span className="mr-3">
              <img src={goldIcon} width="16" className="mr-2" />
              {data.gold}
            </span>
          )}

          {data.julis && (
            <span>
              <img src={julsIcon} width="18" className="mr-2" />
              {data.julis}
            </span>
          )}
        </h6>
        <CButton size="sm">Buy</CButton>
      </div>
    )}
  </div>
)

export default AssetCard
