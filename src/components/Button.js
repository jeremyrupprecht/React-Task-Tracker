import PropTypes from 'prop-types'

// function comopnent for a button 

export const Button = ({color, text, onClick}) => {

    return (
        <button onClick = {onClick} style = {{backgroundColor: color}} className ='btn'> {text} </button>
    )
}

// default prop type

Button.defaultProps = {
    color: 'steelblue',
}

// enforce prop type

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,

}

export default Button
