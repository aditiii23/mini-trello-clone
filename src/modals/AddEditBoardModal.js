import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import boardsSlice from "../redux/boardsSlice"
import "../styles/BoardModals.css"
import { v4 as uuidv4 } from "uuid"

export default function AddEditBoardModal({ type, setIsBoardModalOpen }) {
  const dispatch = useDispatch()
  const [isFirstLoad, setIsFirstLoad] = useState(true)
  const [name, setName] = useState("")
  const [newColumns, setNewColumns] = useState([
    { name: "Todo", tasks: [], id: uuidv4() },
    { name: "Doing", tasks: [], id: uuidv4() },
    { name: "Done", tasks: [], id: uuidv4() },
  ])
  const [isValid, setIsValid] = useState(true)
  const board = useSelector((state) => state.boards).find(
    (board) => board.isActive
  )

  if (type === "edit" && isFirstLoad) {
    setNewColumns(
      board.columns.map((col) => {
        return { ...col, id: uuidv4() }
      })
    )
    setName(board.name)
    setIsFirstLoad(false)
  }

  const validate = () => {
    setIsValid(false)
    if (!name.trim()) {
      return false
    }
    for (let i = 0; i < newColumns.length; i++) {
      if (!newColumns[i].name.trim()) {
        return false
      }
    }
    setIsValid(true)
    return true
  }

  const onSubmit = (type) => {
    setIsBoardModalOpen(false)
    if (type === "add") {
      dispatch(boardsSlice.actions.addBoard({ name, newColumns }))
    } else {
      dispatch(boardsSlice.actions.editBoard({ name, newColumns }))
    }
  }

  return (
    <div
      className="modal-container dimmed"
      onClick={(e) => {
        if (e.target !== e.currentTarget) {
          return
        }
        setIsBoardModalOpen(false)
      }}
    >
      <div className="modal">
        <h3>{type === "edit" ? "Edit" : "Add new"} board</h3>
        <label htmlFor="board-name-input">Board Name</label>
        <div className="input-container">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="board-name-input"
            type="text"
            placeholder="e.g. Web Design"
            className={!isValid && !name.trim() ? "red-border" : ""}
          />
          {!isValid && !name.trim() && (
            <span className="cant-be-empty-span text-L"> Can't be empty</span>
          )}
        </div>
        <button
          onClick={() => {
            const isValid = validate()
            if (isValid === true) onSubmit(type)
          }}
          className="create-btn"
        >
          {type === "add" ? "Create New Board" : "Save Changes"}
        </button>
      </div>
    </div>
  )
}
