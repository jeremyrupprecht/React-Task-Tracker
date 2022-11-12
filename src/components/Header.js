import PropTypes from 'prop-types'
import Button from './Button'

// return header with app title and "Add Task" button

const Header = ({title, onAdd, showAdd}) => { 

  return (
    <header className ='header'>    
        <h1>{title}</h1>   
        <Button color = {showAdd ? 'steelblue' : 'green'} text = {showAdd ? 'Close' : 'Add'} onClick = {onAdd}/>
    </header>
  )
}

// set default prop type

Header.defaultProps = {
  title: 'Task Tracker',
}

// enforce prop type

Header.propTypes = {
  title: PropTypes.string.isRequired,
}


export default Header