import React from 'react'
import styled from 'styled-components'

const List = styled.ul`
	display: inline-flex;
	list-style: none;
	flex-direction: ${props => props.direction}
`

List.propTypes = {
	direction: React.PropTypes.oneOf(['row', 'column'])
}

List.defaultProps = {
	direction: 'row'
}

export default List