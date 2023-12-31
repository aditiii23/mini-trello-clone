import React, { useState } from "react";
import { useSelector } from "react-redux";
import TaskModal from "../modals/TaskModal";

export default function Task({ taskIndex, colIndex }) {
  const boards = useSelector((state) => state.boards);
  const board = boards.find((board) => board.isActive === true);
  const columns = board.columns;
  const col = columns.find((col, i) => i === colIndex);
  const task = col.tasks.find((task, i) => i === taskIndex);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);

  const handleOnDrag = (e) => {
    e.dataTransfer.setData("text", JSON.stringify({taskIndex, prevColIndex: colIndex}));
  }

  return (
    <div>
      <div
        draggable
        onDragStart={handleOnDrag}
        className="task"
        onClick={() => {
          setIsTaskModalOpen(true);
        }}
      >
        <p className="task-title heading-M">{task.title}</p>
      </div>
      {isTaskModalOpen && (
        <TaskModal
          colIndex={colIndex}
          taskIndex={taskIndex}
          setIsTaskModalOpen={setIsTaskModalOpen}
        />
      )}
    </div>
  );
}
