import React, { useState } from "react"
import "../styles/Sidebar.css"
import HeaderDropdown from "./HeaderDropdown"
import AddEditBoardModal from "../modals/AddEditBoardModal"

export default function Sidebar({ isSideBar }) {
  const [isBoardModalOpen, setIsBoardModalOpen] = useState(false)

  return (
    <div
      className={`sidebar  ${!isSideBar && "sidebar-closed"} ${
        isBoardModalOpen && "sidebar-infront"
      }`}
    >
      {isSideBar && (
        <HeaderDropdown setIsBoardModalOpen={setIsBoardModalOpen} />
      )}
      {isBoardModalOpen && (
        <AddEditBoardModal
          type="add"
          setIsBoardModalOpen={setIsBoardModalOpen}
        />
      )}
    </div>
  )
}
