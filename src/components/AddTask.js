import { useState } from "react"

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = e => {
        e.preventDefault()

        if(!text) {
            alert('Please add a task')
            return
        }

        onAdd({text, day, reminder})

        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='task text' value={text} onChange={e => setText(e.target.value)}></input>
            </div>
            <div className='form-control'>
                <label>Date and Time</label>
                <input type='datetime-local' placeholder='Add date and time' value={day} onChange={e => setDay(e.target.value)}></input>
            </div>
            <div className='form-control'>
                <label>Set Reminder</label>
                <input type='checkbox' checked={reminder} value={reminder} onChange={e => setReminder(e.currentTarget.checked)}></input>
            </div>
            <input type='submit' value='Save Task'></input>
        </form>
    )
}

export default AddTask