//props >> can be passeed into the header function into the () and then in the <> </> of {props.propName} >> prop name as far as i know can be defined in the App js file>> <Header propName="print this i guess" OR do nothing in the App file and create default prop object below element (above ecport)/>


const Header = (props) => {
  return (
    <header>
      <h1>{props.title}</h1>
    </header>
  )
}

Header.defaultProps = {
  title: "Task Tracker"
}

export default Header
