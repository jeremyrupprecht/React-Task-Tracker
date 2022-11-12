
import {useState} from 'react'

// add task function component

export const AddTask = ({onAdd}) => {

  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
    
    // don't submit to a new page

    e.preventDefault()

    // input validation for task text

    if (!text) {
      alert('Please add a task')
      return
    }

    // add the task with the text, day and reminder from the form

    onAdd({ text, day, reminder})

    // then clear the form

    setText('')
    setDay('')
    setReminder(false)

  }

  // return form getting user input for a new task

  return (
    <form className ='ad-form' onSubmit = {onSubmit}>
        <div className ='form-control'>
            <label>Task</label>
            <input type = 'text' placeholder ='Add Task' value = {text} onChange = {(e) => setText(e.target.value)} />
        </div>

        <div className ='form-control'>
            <label>Day & Time</label>
            <input type = 'text' placeholder ='Add Day & Time' value = {day} onChange = {(e) => setDay(e.target.value)} />
        </div>

        <div className ='form-control form-control-check'>
            <label>Set Reminder</label>
            <input type = 'checkbox' checked = {reminder} placeholder ='Add Reminder' value = {reminder} onChange = {(e) => setReminder(e.currentTarget.checked)} />
        </div>

        <input className ='btn btn-block' type = 'submit' value = 'Save Task' />


    </form>
  )
}

export default AddTask