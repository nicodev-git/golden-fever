import React from 'react'
import {
	CDataTable,
	CButton
} from "@coreui/react"

import itemIcon from "assets/images/assetItem.png"
import goldIcon from "assets/images/gold.png"

const fields = ["item", "level", "status", "quantity",  "price", "action"]

const MarketPlaceTable = ({items}) => {
	return (
		<CDataTable
		  items={items}
		  fields={fields}
		  size="sm"
		  itemsPerPage={5}
		  pagination
		  scopedSlots={{
		    item: (item) => (
		      <td className="w-30">
		        <div className="d-flex align-items-center justify-content-start">
		        	<img src={itemIcon} width="40" className="mr-3"/>{item.item}
		        </div>
		      </td>
		    ),
		    quantity: (item) => (
		    	<td className="w-20">
		    		{item.quantity}
		    	</td>
		    ),
		    price: (item) => (
		    	<td className="w-20">
		    		<div className="d-flex align-items-center justify-content-center">
		        		<img src={goldIcon} width="17" className="mr-3"/>{item.price}
		        	</div>
		    	</td>
		    ),
		    action: (item) => (
		    	<td className="w-10">
		    		<CButton color="primary" size="md">Cancel</CButton>
		    	</td>
		    )
		  }}
		/>
	)
}

export default MarketPlaceTable