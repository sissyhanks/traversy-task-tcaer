import { useState } from 'react'

const Tasks = () => {
  // tasks brought inside of function and becomes part of the component state >> so don't do push.tasks because tasks is just a part ot the component state, setTasks is how to change the actual tasks setTasks ([...tasks {{{to spread across what is alreaty there}}} and then add new stuff or whatever])
  const [tasks, setTasks] = useState([
    {
      id:1,
      text: 'one',
      day: 'feb 1 at 1:00pm',
      reminder: true,
    },
    {
      id:2,
      text: 'two',
      day: 'feb 2 at 2:00pm',
      reminder: true,
    },
    {
      id:3,
      text: 'three',
      day: 'feb 3 at 3:00pm',
      reminder: false,
    },
    {
      id:4,
      text: 'four',
      day: 'feb 4 at 4:00pm',
      reminder: true,
    }
  ])

  return (
    <>
      {tasks.map((task) => (
      <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  )
}

export default Tasks
