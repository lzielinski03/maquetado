import React from 'react'

const Icon = (props) => {
	return (
		<i className={"icon-" + props.name} style={{fontSize: props.size}}/>
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