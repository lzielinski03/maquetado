import React from 'react'
import styled from 'styled-components'

const Link = styled.a`
	${ props => {
		let styles = {}

		return styles
	} }
`
Link.propTypes = {
	href: React.PropTypes.string.isRequired
}

export default Link