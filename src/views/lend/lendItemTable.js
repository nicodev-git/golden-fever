import React, { useState } from "react"
import {
  CDataTable,
  CButton,
  CInput,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react"
import CIcon from "@coreui/icons-react"
import CCounterInput from "components/counterInput/CounterInput"

import itemIcon from "assets/images/assetItem.png"
import goldIcon from "assets/images/gold.png"

const fields = [
  "item",
  "level",
  "status",
  "quantity",
  "value",
  "interest",
  "period",
  "detail",
  "action",
]

const ItemTable = ({ items }) => {
  const [modal, setModal] = useState(false)

  return (
    <>
      <CDataTable
        items={items}
        fields={fields}
        size="sm"
        itemsPerPage={5}
        pagination
        scopedSlots={{
          item: (item) => (
            <td className="w-20">
              <div className="d-flex align-items-center justify-content-start">
                <CButton className="c-add-btn d-flex align-items-center mr-3 justify-content-center">
                  +
                </CButton>
                -
              </div>
            </td>
          ),
          level: (item) => <td className="w-5">{item.level}</td>,
          status: (item) => <td className="w-5">{item.status}</td>,
          quantity: (item) => (
            <td className="w-15">
              <CCounterInput
                min={0}
                max={100}
                callback={(e) => {
                  console.log()
                }}
              />
            </td>
          ),
          interest: (item) => (
            <td className="w-10">
              <div className="d-flex align-items-center justify-content-center px-3">
                <CInput type="number" />
              </div>
            </td>
          ),
          period: (item) => (
            <td className="w-10 text-center">
              <CButton
                className="c-add-btn d-flex align-items-center mx-auto p-0 justify-content-center"
                onClick={() => setModal(true)}
              >
                <CIcon name="cil-calendar" width="50" />
              </CButton>
            </td>
          ),
          detail: (item) => (
            <td className="w-10">
              <CButton
                className="c-add-btn d-flex align-items-center mx-auto p-0 justify-content-center"
                onClick={() => setModal(true)}
              >
                <CIcon name="cil-pencil" width="50" />
              </CButton>
            </td>
          ),
          value: (item) => (
            <td className="w-10">
              <div className="d-flex align-items-center justify-content-center px-3">
                <CInput />
              </div>
            </td>
          ),
          action: (item) => (
            <td className="w-10">
              <CButton color="primary" size="md">
                Lend
              </CButton>
            </td>
          ),
        }}
      />
      <CModal show={modal} onClose={setModal}>
        <CModalHeader closeButton>
          <CModalTitle>Modal title</CModalTitle>
        </CModalHeader>
        <CModalBody className="text-default">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </CModalBody>
        <CModalFooter>
          <CButton color="primary">Do Something</CButton>{" "}
          <CButton color="secondary" onClick={() => setModal(false)}>
            Cancel
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}

export default ItemTable
