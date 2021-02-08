import React from 'react'
import { useState } from "react";

const AddTask = ({ addTask }) => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)
  
  const onSubmit = (e) => {
    e.preventDefault()

    if (!text) {
      alert('please add task')
      return
    }

    addTask({ text, day, reminder })
    
    setText('')
    setDay('')
    setReminder(false)
  }

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input type="text" placeholder="Add Task" value={text} onChange={(evnt) => setText(evnt.target.value)}/>
      </div>
      <div className="form-control">
        <label>Day</label>
        <input type="text" placeholder="Day and Time" value={day} onChange={(evnt) => setDay(evnt.target.value)}/>
      </div>
      <div className="form-control form-control-check">
        <label>Reminder</label>
        <input type="checkbox" value={reminder} checked={reminder} onChange={(evnt) => setReminder(evnt.currentTarget.checked)}/>
      </div>
      <input className="btn btn-block" type="submit" value="Save Task"/>
    </form>
  )
}

export default AddTask
