import React from 'react'
import ItemList from './../basic/item-list'
import Link from './../basic/link'
import Icon from './../basic/icon'
import Label from './../basic/label'

const NavigationItem = (props) => {
	return (
		<ItemList>
			<Link href="#">
				<Icon name="down-arrow" />
			</Link>
		</ItemList>
	)
}

NavigationItem.propTypes = {
	//direction: React.PropTypes.oneOf(['row', 'column']),
	//image: React.PropTypes.string.isRequired
}

NavigationItem.defaultProps = {
	//direction: 'row'
}

export default NavigationItem