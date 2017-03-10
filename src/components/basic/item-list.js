import React from 'react'
import styled from 'styled-components'

const ItemList = styled.li`
	${ props => {
		let styles = {
			padding: props.padding
		}

		return styles
	} }
`

export default ItemList