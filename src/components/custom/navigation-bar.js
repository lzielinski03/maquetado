import React from 'react'
import Navigation from './../basic/navigation'
import List from './../basic/list'
import Image from './../basic/image'

const NavigationBar = (props) => {
	return (
		<Navigation {...props}>
			<List direction={props.direction}>
				{props.children}
			</List>
		</Navigation>
	)
}

NavigationBar.propTypes = {
	direction: React.PropTypes.oneOf(['row', 'column']),
	//image: React.PropTypes.string.isRequired
}

NavigationBar.defaultProps = {
	direction: 'row'
}

export default NavigationBar