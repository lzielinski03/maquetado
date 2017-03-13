import React from 'react'
import List from './../basic/list'
import Image from './../basic/image'

const SubMenu = (props) => {
	return (
		<List direction={props.direction} >
			{props.children}
		</List>
	)
}

SubMenu.propTypes = {
	direction: React.PropTypes.oneOf(['row', 'column']),
	//image: React.PropTypes.string.isRequired
}

SubMenu.defaultProps = {
	direction: 'row'
}

export default SubMenu