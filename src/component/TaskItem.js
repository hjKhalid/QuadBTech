import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "../features/tasks/taskSlice";

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <div className="task-item">
      <p>
        {task.task} - {task.priority}
      </p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TaskItem;
