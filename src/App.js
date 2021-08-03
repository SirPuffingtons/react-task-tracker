import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
    {
        id: 0,
        text: 'Dentist Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true
    },
    {
        id: 1,
        text: 'Meeting at School',
        day: 'March 19th at 8:45am',
        reminder: true
    },
    {
        id: 2,
        text: 'Get Grandma at the Airport',
        day: 'April 21st at 6:00pm',
        reminder: false
    },
  ])

  const addTask = task => {
    setTasks([...tasks, {id: Math.floor(Math.random() * 10000) + 1, ...task}])
  }

  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const toggleReminder = id => {
    setTasks(tasks.map(task => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className='container'>

      <Header title='Task Tracker' onAdd={() => setShowAddTask(!showAddTask)} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0
        ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />)
        : ('No tasks to display.')}

    </div>
  )
}

export default App