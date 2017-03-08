import React from 'react'
import Icon from './basic/icon'
import LabelIcon from './label-icon'

const MenuItem = props => {
	let text = props.label !== false
	let icon = props.icon !== false
	let iconText = (props.label !== false && props.icon !== false)
	let wrapperStyle = {textDecoration: 'none'}
	let styles = {}

	if (iconText) {
		styles.order = 0
		
		let direction = 'row'
		let location = props.location
		
		if (location === 'top' || location === 'bottom') direction = 'column'

		if (location === 'left' || location === 'top') styles.order = 1

		if (location === 'right') styles['paddingRight'] = props.separation + 'px'

		if (location === 'left') styles['paddingLeft'] = props.separation + 'px'

		if (location === 'top') styles['paddingTop'] = props.separation + 'px'

		if (location === 'bottom') styles['paddingBottom'] = props.separation + 'px'
		
		wrapperStyle = Object.assign({}, wrapperStyle, {display: 'inline-flex', 'flexDirection': direction, 'alignItems': 'center'})
	}
 
	return (
		<a href={props.link} style={wrapperStyle}>
			{ text &&
				<span style={styles}>{props.label}</span>
			}
			{ icon &&
				<Icon name={props.icon} />
			}
		</a>
	)
}

MenuItem.propTypes = {
	label: (props, propName, componentName) => {
		if (props[propName] === false && props['icon'] === false)
			return new Error(
				'Failed prop type: One prop `icon` or `label` are required in `' + componentName + '`, but none is found.'
			)
	},
	icon: (props, propName, componentName) => {
		if (props[propName] === false && props['label-icon'] === false)
			return new Error(
				'Failed prop type: One prop `icon` or `label` are required in `' + componentName + '`, but none is found.'
			)
	},
	link: React.PropTypes.string,
	location: React.PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
	separation: React.PropTypes.number
}

MenuItem.defaultProps = {
	label: false,
	icon: false,
	link: '#',
	location: 'right'
}

export default MenuItem