import React from 'react'
import Navigation from './../basic/navigation'
import List from './../basic/list'
import Image from './../basic/image'

const NavigationBar = (props) => {
	return (
		<Navigation {...props}>
			<List direction={props.direction}>
				{props}
			</List>
		</Navigation>
	)
}

function renderChildren(props) {
	return React.Children.map(props.children, child => {
		return React.cloneElement(child, {
			padding: '0 '+props.separation+'px 0 '+props.separation+'px'
		})
	})
}

Navigation.propTypes = {
	direction: React.PropTypes.oneOf(['row', 'column']),
	//image: React.PropTypes.string.isRequired
}

NavigationBar.defaultProps = {
	direction: 'row'
}

export default NavigationBar