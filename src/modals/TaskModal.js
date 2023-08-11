import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import "../styles/TaskModals.css"
import DropdownMenu from "../components/DropdownMenu"
import DeleteModal from "./DeleteModal"
import dropdown from "../assets/icon-vertical-ellipsis.svg"
import boardsSlice from "../redux/boardsSlice"
import AddEditTaskModal from "./AddEditTaskModal"

export default function TaskModal({ taskIndex, colIndex, setIsTaskModalOpen }) {
  const dispatch = useDispatch()
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const boards = useSelector((state) => state.boards)
  const board = boards.find((board) => board.isActive === true)
  const columns = board.columns
  const col = columns.find((col, i) => i === colIndex)
  const task = col.tasks.find((task, i) => i === taskIndex)

  const [status, setStatus] = useState(task.status)
  const [newColIndex, setNewColIndex] = useState(columns.indexOf(col))
  const onChange = (e) => {
    setStatus(e.target.value)
    setNewColIndex(e.target.selectedIndex)
  }

  const onClose = (e) => {
    if (e.target !== e.currentTarget) {
      return
    }
    dispatch(
      boardsSlice.actions.setTaskStatus({
        taskIndex,
        colIndex,
        newColIndex,
        status,
      })
    )
    setIsTaskModalOpen(false)
  }

  const onDeleteBtnClick = (e) => {
    if (e.target.textContent === "Delete") {
      dispatch(boardsSlice.actions.deleteTask({ taskIndex, colIndex }))
      setIsTaskModalOpen(false)
      setIsDeleteModalOpen(false)
    } else {
      setIsDeleteModalOpen(false)
    }
  }

  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false)

  const setOpenEditModal = () => {
    setIsAddTaskModalOpen(true)
    setIsDropdownMenuOpen(false)
  }

  const setOpenDeleteModal = () => {
    setIsDropdownMenuOpen(false)
    setIsDeleteModalOpen(true)
  }

  return (
    <div
      className={`modal-container ${!isDeleteModalOpen && "dimmed"}`}
      onClick={onClose}
    >
      <div className={`task-modal ${isDeleteModalOpen && "none"}`}>
        <div className="task-modal-title-container">
          <p className="heading-L">{task.title}</p>
          <img
            className="task-modal-dropdown"
            src={dropdown}
            alt="task options btn"
            onClick={() => setIsDropdownMenuOpen((prevState) => !prevState)}
          />
          {isDropdownMenuOpen && (
            <DropdownMenu
              setOpenEditModal={setOpenEditModal}
              setOpenDeleteModal={setOpenDeleteModal}
              type="Task"
            />
          )}
        </div>
        <p className="task-description text-L">{task.description}</p>

        <div className="select-column-container">
          <label className="text-M">Current Status</label>
          <select
            className="select-status text-L"
            value={status}
            onChange={onChange}
          >
            {columns.map((col, index) => (
              <option className="status-options" key={index}>
                {col.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {isDeleteModalOpen && (
        <DeleteModal
          onDeleteBtnClick={onDeleteBtnClick}
          type="task"
          title={task.title}
        />
      )}

      {isAddTaskModalOpen && (
        <AddEditTaskModal
          setIsAddTaskModalOpen={setIsAddTaskModalOpen}
          setIsTaskModalOpen={setIsTaskModalOpen}
          type="edit"
          taskIndex={taskIndex}
          prevColIndex={colIndex}
        />
      )}
    </div>
  )
}
