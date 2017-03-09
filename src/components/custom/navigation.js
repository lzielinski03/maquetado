import React from 'react'
import List from './../basic/list'
import Image from './../basic/image'

const Navigation = (props) => {
	return (
		<nav>
			<List direction={props.direction}>
				{props.children}
			</List>
		</nav>
	)
}

Navigation.propTypes = {
	direction: React.PropTypes.oneOf(['row', 'column']),
	//image: React.PropTypes.string.isRequired
}

Navigation.defaultProps = {
	direction: 'row'
}

export default Navigation