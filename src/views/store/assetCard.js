import React from "react"
import { CButton } from "@coreui/react"
import cartIcon from "assets/images/cart.png"
import goldIcon from "assets/images/gold.png"
import julsIcon from "assets/images/juls.png"

const AssetCard = ({ data }) => (
  <div className="item-card px-4 py-5 text-center">
    <img src={data.img} width="87" height="97" className="mx-auto mt-4" />
    <h4 className="text-left mt-3">{data.title}</h4>
    <p className="text-left text-primary-light mb-1">{data.description}</p>
    <hr className="my-3" />
    {data.purchased ? (
      <h4 className="text-primary-light text-left">Purchased</h4>
    ) : data.ptype === "cart" ? (
      <div className="d-flex justify-content-between align-items-center">
        <h4 className="mb-0">
          <span className="mr-2">{data.currency}</span>
          <span className="mr-2">{data.price}</span>
          {data.coupon && <span className="text-coupon">{data.coupon}</span>}
        </h4>
        <CButton size="sm">Cart</CButton>
      </div>
    ) : (
      <div className="d-flex justify-content-between align-items-center">
        <h4 className="mb-0">
          {data.gold && (
            <span className="mr-3">
              <img src={goldIcon} width="20" className="mr-2" />
              {data.gold}
            </span>
          )}

          {data.julis && (
            <span>
              <img src={julsIcon} width="24" className="mr-2" />
              {data.julis}
            </span>
          )}
        </h4>
        <CButton size="sm">Buy</CButton>
      </div>
    )}
  </div>
)

export default AssetCard
