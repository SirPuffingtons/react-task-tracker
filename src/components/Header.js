import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd}) => {
    return (
        <header>
            <h1>{title}</h1>
            <Button backgroundColor='green' innerText='ADD' onClick={onAdd} />
        </header>
    )
}

Header.defaultProps = {
    title: 'default title'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header