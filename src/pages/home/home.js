import 'babel-polyfill'
import React from 'react'
import { bindActionCreators } from 'redux' // shoud not be here
import { connect } from 'react-redux' // shoud not be here
import styled from 'styled-components';

import Icon from './../../components/icon'
import NavigationMenu from './../../components/navigation-menu'
import MenuItem from './../../components/menu-item'
import Box from './../../components/box/box'

/*
import Title from './../components/title'
import Subtitle from './../components/subtitle'
import Button from './../components/button'
*/

const Logo = () => {
	return (
		<a href="#">
			<img src="/src/assets/images/Logo_dark_2.png"/>
		</a>
	)
}

const Header = () => {
	return (
		<Box 
			background="url(/src/assets/images/Showcase_color.jpg) no-repeat"
			background-size="contain"
			background-position="center"
			width="100%" height="0" padding-bottom="27%">
			<Logo/>
			<NavigationMenu separation={15} direction="row">
				<MenuItem link="#" label="Home" icon="down-arrow" separation={8}/>
				<MenuItem link="#" label="Blog" icon="down-arrow" separation={8}/>
				<MenuItem link="#" label="Portfolio" icon="down-arrow" separation={8}/>
				<MenuItem link="#" label="Shop" icon="down-arrow" separation={8}/>
				<MenuItem link="#" label="Variations" icon="down-arrow" separation={8}/>
				<MenuItem link="#" label="Elements" icon="down-arrow" separation={8}/>
				<MenuItem link="#" icon="down-arrow" separation={8}/>
				<MenuItem link="#" icon="down-arrow" separation={8}/>
				<MenuItem link="#" icon="down-arrow" separation={8}/>
				<MenuItem link="#" icon="down-arrow" separation={8}/>
			</NavigationMenu>


{/*
	<MenuItem label="home" link="#" icon="down-arrow"/>
			<MenuItem label="blog" link="#" />
			<MenuItem link="#" icon="down-arrow"/>
			<LabelIcon name="down-arrow" text="Home" separation={8}/>
			<LabelIcon name="down-arrow" text="Blog" separation={8}/>
			<LabelIcon name="down-arrow" text="Portfolio" separation={8}/>
			<LabelIcon name="down-arrow" text="Shop" separation={8}/>
			<LabelIcon name="down-arrow" text="Variations" separation={8}/>
			<LabelIcon name="down-arrow" text="Elements" separation={8}/>*/}
		</Box>
	)
}

const Page = () => {
	return (
		<div className="root">
			<Header/>
				<pre>
				$Navigation #separation #direction  
					$menu-item #label #link #icon
						$Navigation

					$menu-item #label #link #icon
						$Navigation

					$menu-item #label #link #icon
				</pre>


		</div>
	)
}

export default Page