import PropTypes from 'prop-types'

const Button = ({backgroundColor, color, onClick, innerText}) => {
    return (
        <button style={{backgroundColor: backgroundColor, color: color}} onClick={onClick}>
            {innerText}
        </button>
    )
}

Button.defaultProps = {
    backgroundColor: 'black',
    color: 'white',
    onClick: e => console.log(e),
    innerText: 'Button'
}

Button.propTypes = {
    backgroundColor: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    innerText: PropTypes.string.isRequired
}

export default Button