import React from 'react'
import {
	CDataTable,
	CButton,
	CInput
} from "@coreui/react"

import itemIcon from "assets/images/assetItem.png"
import goldIcon from "assets/images/gold.png"

import CCounterInput from "components/counterInput/CounterInput"

const fields = ["item", "level", "status", "quantity", "price", "action"]

const SellItemTable = ({items}) => {
	return (
		<CDataTable
		  items={items}
		  fields={fields}
		  size="sm"
		  header={false}
		  itemsPerPage={5}
		  scopedSlots={{
		    item: (item) => (
		      <td className="w-30">
		        <div className="d-flex align-items-center justify-content-start">
		        	<CButton className="c-add-btn d-flex align-items-center mr-3 justify-content-center">
          				+
        			</CButton>-
		        </div>
		      </td>
		    ),
		    quantity: (item) => (
		    	<td className="w-20">
		    		<CCounterInput min={0} max={100} callback={(e) => {console.log()}}/>
		    	</td>
		    ),
		    price: (item) => (
		    	<td className="w-20">
		    		<div className="d-flex align-items-center justify-content-center px-5">
		        		<CInput/>
		        	</div>
		    	</td>
		    ),
		    action: (item) => (
		    	<td className="w-10">
		    		<CButton color="primary" size="md" disabled>Sell</CButton>
		    	</td>
		    )
		  }}
		/>
	)
}

export default SellItemTable