import React from "react";
import { useDispatch, useSelector } from "react-redux";
import boardsSlice from "../redux/boardsSlice";

export default function HeaderDropdown({
  setOpenDropdown,
  setIsBoardModalOpen,
}) {
  const dispatch = useDispatch();
  const boards = useSelector((state) => state.boards);

  return (
    <div
      className="dropdown-container"
      onClick={(e) => {
        if (e.target !== e.currentTarget) {
          return;
        }
        setOpenDropdown(false);
      }}
    >
      <div className="dropdown-modal">
        <h3>ALL BOARDS ({boards.length})</h3>
        <div className="dropdown-boards">
          {boards.map((board, index) => {
            return (
              <div
                className={`dropdown-board ${
                  board.isActive ? "board-active" : ""
                }`}
                key={index}
                onClick={() => {
                  dispatch(boardsSlice.actions.setBoardActive({ index }));
                }}
              >
                {board.name}
              </div>
            );
          })}
          <div
            className="dropdown-board dropdown-create-board-btn"
            onClick={() => {
              setIsBoardModalOpen(true);
              setOpenDropdown && setOpenDropdown((state) => !state);
            }}
          >
            + Create New Board
          </div>
        </div>
      </div>
    </div>
  );
}
