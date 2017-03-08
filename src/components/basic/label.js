import React from 'react'
import styled from 'styled-components'

const Label = styled.label`
	${ props => {
		let styles = {}

		return styles
	} }
`

Label.propTypes = {
	value: React.PropTypes.string
}


export default Label