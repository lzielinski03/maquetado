import React from 'react'

const NavigationMenu = props => {
	let padding = (props.direction) === 'row' ? {padding: '0 '+ props.separation +'px'} : {padding: props.separation +'px 0'};
	let listStyles = {
		listStyle: 'none',
		display: 'inline-flex',
		flexDirection: props.direction
	}

	let children = props.children.map( children => {
		return <li style={padding} key={children.props.label}>{children}</li>
	})
	return (
		<nav>
			<ul style={listStyles}>
				{children}
			</ul>
		</nav>
	)
}

NavigationMenu.propTypes = {
	separation: React.PropTypes.number,
	direction: React.PropTypes.oneOf(['row', 'column'])
}

NavigationMenu.defaultProps = {
	direction: 'row',
	separation: 0
}

export default NavigationMenu