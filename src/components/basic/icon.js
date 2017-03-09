import React from 'react'

const Icon = ({name, size}) => {
	return (
		<i className={"icon-" + name} style={{fontSize: size}}/>
	)
}

Icon.propTypes = {
	'name': React.PropTypes.string.isRequired,
	'size': React.PropTypes.number
}

Icon.defaultProps = {
	size: 16
}

export default Icon