const tasks = [
  {
    id: 1,
    text: 'appointment',
    day: 'Feb 5th at 2:30pm',
    reminder: true,
  },
  {
    id: 2,
    text: 'dog show',
    day: 'Feb 9th at 2:00am',
    reminder: false,
  },
  {
    id: 3,
    text: 'test',
    day: 'Feb 29th at 4:30pm',
    reminder: true,
  }
]

const Tasks = () => {
  return (
    <>
      {tasks.map((task) => (
      <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  )
}

export default Tasks
