import React from 'react'
import List from './../basic/list'
import Image from './../basic/image'

const Navigation = (props) => {
	return (
		<nav>
			<List direction={props.direction}>
				{renderChildren(props)}
			</List>
		</nav>
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

Navigation.defaultProps = {
	direction: 'row'
}

export default Navigation