import React from 'react'
import ItemList from './../basic/item-list'
import Link from './../basic/link'
import Icon from './../basic/icon'
import Label from './../basic/label'

const NavigationItem = (props) => {
	console.log(props)
	return (
		<ItemList padding={props.padding} position={props.position}>
			<Link href={props.href}>
				{props.children}
			</Link>
		</ItemList>
	)
}
/*	Add prop from parent to chidren
	{renderChildren(props.children)}
function renderChildren(children) {
	return React.Children.map(children, (child, index) => {
		if (index == 0)
			return React.cloneElement(child, {
				padding: '0 5px 0 0'
			})
		else
			return child	
	})
}
*/

NavigationItem.propTypes = {
	//direction: React.PropTypes.oneOf(['row', 'column']),
	//image: React.PropTypes.string.isRequired
}

NavigationItem.defaultProps = {
	//direction: 'row'
}

export default NavigationItem