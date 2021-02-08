import React from 'react'
import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, setReminder }) => {
  return (
    <div onDoubleClick={() => setReminder(task.id)} className={`task ${task.reminder ? "reminder" : ""}`}>
      <h3>{task.text} <FaTimes onClick={() => onDelete(task.id)}/></h3>
      <p>{task.day}</p>
    </div>
  )
}

export default Task
