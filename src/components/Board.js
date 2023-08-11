import React, { useState } from "react"
import { useSelector } from "react-redux"
import { useMediaQuery } from "react-responsive"
import AddEditBoardModal from "../modals/AddEditBoardModal"
import "../styles/Board.css"
import Column from "./Column"
import Sidebar from "./Sidebar"

export default function Board() {
  const isBigScreen = useMediaQuery({ query: "(min-width: 768px)" })
  const [isSideBar, setisSideBar] = useState(true)
  const [isBoardModalOpen, setIsBoardModalOpen] = useState(false)
  const boards = useSelector((state) => state.boards)
  const board = boards.find((board) => board.isActive === true)
  const columns = board.columns

  return (
    <div className="board open-sidebar">
      {isBigScreen && (
        <Sidebar isSideBar={isSideBar} setisSideBar={setisSideBar} />
      )}

      {columns.length > 0 ? (
        <>
          {columns.map((col, index) => {
            return <Column key={index} colIndex={index} />
          })}
        </>
      ) : null}
      {isBoardModalOpen && (
        <AddEditBoardModal
          type="edit"
          setIsBoardModalOpen={setIsBoardModalOpen}
        />
      )}
    </div>
  )
}
