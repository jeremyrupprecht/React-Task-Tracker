import { FaTimes } from 'react-icons/fa'

export const Task = ({task, onDelete, onToggle}) => {


  // return all tasks, with reminders, and configure toggle and delete functionality

  return (
    <div className = 'extraSpacing'>
      <div className = {`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick = {() => onToggle(task.id)}>
          <h3>{task.text} <FaTimes style = {{ color: 'red', cursor: 'pointer'}} onClick = {() => onDelete(task.id)} /> </h3>
          <p> {task.day} </p>
      </div>
    </div>
  )
}

export default Task