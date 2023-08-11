import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import "../styles/Header.css"
import dropdown from "../assets/icon-vertical-ellipsis.svg"
import HeaderDropdown from "./HeaderDropdown"
import DropdownMenu from "./DropdownMenu.js"
import AddEditTaskModal from "../modals/AddEditTaskModal"
import AddEditBoardModal from "../modals/AddEditBoardModal"
import DeleteModal from "../modals/DeleteModal"
import boardsSlice from "../redux/boardsSlice"
import { useMediaQuery } from "react-responsive"

export default function Header() {
  const isBigScreen = useMediaQuery({ query: "(min-width: 768px)" })
  const dispatch = useDispatch()
  const boards = useSelector((state) => state.boards)
  const board = boards.find((board) => board.isActive)

  const [openDropdown, setOpenDropdown] = useState(false)
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false)
  const [isBoardModalOpen, setIsBoardModalOpen] = useState(false)
  const [boardType, setBoardType] = useState("")
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false)

  const setOpenEditModal = () => {
    setIsBoardModalOpen(true)
    setIsDropdownMenuOpen(false)
  }
  const setOpenDeleteModal = () => {
    setIsDeleteModalOpen(true)
    setIsDropdownMenuOpen(false)
  }

  const onDeleteBtnClick = (e) => {
    if (e.target.textContent === "Delete") {
      dispatch(boardsSlice.actions.deleteBoard())
      dispatch(boardsSlice.actions.setBoardActive({ index: 0 }))
      setIsDeleteModalOpen(false)
    } else {
      setIsDeleteModalOpen(false)
    }
  }

  return (
    <div className="header-container">
      <header>
        <div className="logo-container">
          {<h3 className="logo-text">Mini Trello</h3>}{" "}
        </div>

        <div className="header-name-container heading-L">
          <h3 className="header-name">{board.name}</h3>
        </div>
        <button
          className={`add-task-btn heading-M ${
            board.columns.length === 0 && "btn-off"
          }`}
          onClick={() => {
            setIsTaskModalOpen(true)
            setIsDropdownMenuOpen(false)
          }}
          disabled={board.columns.length === 0}
        >
          {isBigScreen ? "+ Add New Task" : "+"}
        </button>
        <img
          onClick={() => {
            setIsDropdownMenuOpen((prevState) => !prevState)
            setBoardType("edit")
          }}
          className="dropdown"
          src={dropdown}
          alt="menu for deleting or editing board"
        />

        {openDropdown && !isBigScreen && (
          <HeaderDropdown
            setOpenDropdown={setOpenDropdown}
            setIsBoardModalOpen={setIsBoardModalOpen}
          />
        )}
        {isDropdownMenuOpen && (
          <DropdownMenu
            setOpenEditModal={setOpenEditModal}
            setOpenDeleteModal={setOpenDeleteModal}
            type="board"
          />
        )}
      </header>
      {isBoardModalOpen && (
        <AddEditBoardModal
          type={boardType}
          setIsBoardModalOpen={setIsBoardModalOpen}
        />
      )}
      {isDeleteModalOpen && (
        <DeleteModal
          type="board"
          title={board.name}
          onDeleteBtnClick={onDeleteBtnClick}
        />
      )}
      {isTaskModalOpen && (
        <AddEditTaskModal
          setIsAddTaskModalOpen={setIsTaskModalOpen}
          type="add"
        />
      )}
    </div>
  )
}
