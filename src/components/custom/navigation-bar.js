import React from 'react'
import Navigation from './../basic/navigation'
import List from './../basic/list'
import Image from './../basic/image'

const NavigationBar = (props) => {
	return (
		<Navigation {...props}>
			<List direction={props.direction}>
				{renderChildren(props)}
			</List>
		</Navigation>
	)
}

<<<<<<< HEAD:src/components/custom/navigation-bar.js
NavigationBar.propTypes = {
=======
function renderChildren(props) {
	return React.Children.map(props.children, child => {
		return React.cloneElement(child, {
			padding: '0 '+props.separation+'px 0 '+props.separation+'px'
		})
	})
}

Navigation.propTypes = {
>>>>>>> 6ee91847bcade309f459bee35aa007c15ddf2d5b:src/components/custom/navigation.js
	direction: React.PropTypes.oneOf(['row', 'column']),
	//image: React.PropTypes.string.isRequired
}

NavigationBar.defaultProps = {
	direction: 'row'
}

export default NavigationBar