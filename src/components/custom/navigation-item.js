import React from 'react'
import ItemList from './../basic/item-list'
import Link from './../basic/link'
import Icon from './../basic/icon'
import Label from './../basic/label'

const NavigationItem = (props) => {
	return (
		<ItemList>
			{renderChildren(props.children)}
		</ItemList>
	)
}

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

NavigationItem.propTypes = {
	//direction: React.PropTypes.oneOf(['row', 'column']),
	//image: React.PropTypes.string.isRequired
}

NavigationItem.defaultProps = {
	//direction: 'row'
}

export default NavigationItem