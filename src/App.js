// Jeremy Rupprecht 
// jdavid.rupprecht@gmail.com

import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import {useState} from 'react'

const App = () => {

  // App state:

  const[showAddTask, setShowAddTask] = useState(false)

  // Initial task state

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30pm',
        reminder: false,
    },
])

  // Add Task

  const addTask = (task) => {

    // create a random id (ranging 0 - 10000)

    const id = Math.floor(Math.random() * 10000) + 1
  
    // create the new task (...task = {text, day, reminder})

    const newTask = {id, ...task}
    
    // add the task to the state

    setTasks([...tasks, newTask])

    console.log(id)

  }

  // Delete Task
  //  -filter is used with an arrow function to say
  //   "include all id's that are not equal to the specified one"

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  //  -negate the reminder for this task
  //
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  // return app container

  return (
    <div className = 'flexContainer'>
      <div className='Container'>
        <Header onAdd = {() => setShowAddTask(!showAddTask)} showAdd = {showAddTask} />
        {showAddTask && <AddTask onAdd = {addTask} />}
        {tasks.length > 0 ? ( <Tasks tasks = {tasks} onDelete = {deleteTask} onToggle = {toggleReminder} />) : ('No Tasks To Show')}
      </div>
    </div> 

  )
}

export default App;
