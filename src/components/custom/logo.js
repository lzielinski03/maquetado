import React from 'react'
import Link from './../basic/link'
import Image from './../basic/image'

const Logo = ({link, image}) => {
	return (
		<Link href={link}>
			<Image src={image}/>
		</Link>
	)
}

Logo.propTypes = {
	link: React.PropTypes.string.isRequired,
	image: React.PropTypes.string.isRequired
}

export default Logo