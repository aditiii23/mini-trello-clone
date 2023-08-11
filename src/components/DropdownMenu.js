import React from "react"

export default function DropdownMenu({
  type,
  setOpenEditModal,
  setOpenDeleteModal,
}) {
  return (
    <div className="dropdown-menu text-L">
      <p
        onClick={() => {
          setOpenEditModal()
        }}
      >
        Edit {type}
      </p>
      <p onClick={() => setOpenDeleteModal()} className="dropdown-menu-red">
        Delete {type}
      </p>
    </div>
  )
}
