import PropTypes from 'prop-types'

//props are caught in the functiojn ()
const Button = ({color, text, onClick }) => {

  return (
    <div>
      <button 
      onClick={onClick} 
      style={{ backgroundColor: color }} 
      className='btn'>
        {text}
      </button>
    </div>
  )
}

Button.defaultProps = {
  color: 'steelblue',
}

//you need to import proptypes (see above)
Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
  color: PropTypes.string,
}

export default Button