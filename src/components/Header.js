//props >> can be passeed into the header function into the () and then in the <> </> of {props.propName} >> prop name as far as i know can be defined in the App js file>> <Header propName="print this i guess" OR do nothing in the App file and create default prop object below element (above ecport)/>

import PropTypes from 'prop-types'

//prop types!! import them (above) and then set the type below (string // number // make code robust & cantch errors)



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

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
