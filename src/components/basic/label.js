import React from 'react'
import styled from 'styled-components'

const Label = styled.label`
	${ props => {
		let styles = {}
		const styleProps = [
			'background', 'background-color', 'background-image', 'background-size', 'background-position',
			'background-attachment', 'color', 'width', 'height', 'opacity', 'margin', 'margin-top', 'position',
			'align-content', 'display', 'padding', 'padding-bottom', 'padding-left', 'padding-right', 'padding-top',
			'font-size', 'font-family', 'font-weight']

		styleProps.forEach( property => {
			if (props.hasOwnProperty(property))
				styles[property] = props[property]
		});

		return styles
	} }
`
/*
Label.defaultProps = {
	padding: '0 0 0 0'
}

Label.propTypes = {
	padding: React.PropTypes.string
}*/


export default Label