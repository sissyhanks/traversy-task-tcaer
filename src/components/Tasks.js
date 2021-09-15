
//bring down the tasks prop form app here >> and will pass throu return 
const Tasks = ( {tasks} ) => {
  // tasks brought inside of function and becomes part of the component state >> so don't do push.tasks because tasks is just a part ot the component state, setTasks is how to change the actual tasks setTasks ([...tasks {{{to spread across what is alreaty there}}} and then add new stuff or whatever]) >> but becasue we want to access tasks from other components we can't have them inside of this component, need ot make them global by putting it into APP so it can be taken down into other components as props (but really, probably do this dfwith api return or somethign like that).. movinmg the array in [3, 2, 1]


  return (
    <>
      {tasks.map((task) => (
      <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  )
}

export default Tasks
