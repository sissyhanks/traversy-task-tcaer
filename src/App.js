import Header from './components/Header'
import Tasks from './components/Tasks'
//userState was in tasks, but moving to APp to make the tasks array globally accessible 
import { useState } from 'react'

//everything on the page is coming from this function >> its JSX difference is like className instead of class things like that >> dynamically add JS expressions {{ ya know }}
function App() {
  //now tasks is part of our app level state
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
    //you can only return a single parent element >> you can use <> </> as parent if you don't want a div wrapping around things
    <div className="container">
      <Header />
      {/* tasks passed into Tasks as prop  */}
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
