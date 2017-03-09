import React from 'react'
import styled from 'styled-components'

const Label = styled.label`
	${ props => {
		let styles = {
			padding: props.padding
		}

		return styles
	} }
`

Label.defaultProps = {
	padding: '0 0 0 0'
}

Label.propTypes = {
	padding: React.PropTypes.string
}


export default Label