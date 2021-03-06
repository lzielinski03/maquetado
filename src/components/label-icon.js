import React from 'react'
import Icon from './basic/icon'

const LabelIcon = props => {
	let direction = 'row'
	let styles = {order: 0}
	let location = props.location

	if (location === 'top' || location === 'bottom') 
		direction = 'column'

	if (location === 'left' || location === 'top')
		styles.order = 1

	if (location === 'right')
		styles['paddingRight'] = props.separation + 'px'

	if (location === 'left')
		styles['paddingLeft'] = props.separation + 'px'

	if (location === 'top')
		styles['paddingTop'] = props.separation + 'px'

	if (location === 'bottom')
		styles['paddingBottom'] = props.separation + 'px'

	return (
		<span style={{display: 'inline-flex', 'flexDirection': direction, 'alignItems': 'center'}}>
			<span style={styles}>{props.text}</span>
			<Icon name={props.name} size={props.iconSize}/>
		</span>
	)
}

LabelIcon.propTypes = {
	location: React.PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
	name: React.PropTypes.string.isRequired,
	text: React.PropTypes.string.isRequired,
	iconSize: React.PropTypes.number,
	separation: React.PropTypes.number
}

LabelIcon.defaultProps = {
	location: 'right',
	iconSize: 16
}


export default LabelIcon