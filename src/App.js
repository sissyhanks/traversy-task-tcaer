import Header from './components/Header'
import Tasks from './components/Tasks'

//everything on the page is coming from this function >> its JSX difference is like className instead of class things like that >> dynamically add JS expressions {{ ya know }}
function App() {
  return (
    //you can only return a single parent element >> you can use <> </> as parent if you don't want a div wrapping around things
    <div className="container">
      <Header />
      <Tasks />
    </div>
  );
}

export default App;
