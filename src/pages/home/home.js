import 'babel-polyfill'
import React from 'react'
import { bindActionCreators } from 'redux' // shoud not be here
import { connect } from 'react-redux' // shoud not be here
import styled from 'styled-components';

import Icon from './../../components/icon'
import LabelIcon from './../../components/label-icon'

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

const MenuItem = props => {
	//let icon = ()
	//let iconText =  
	//let text = 
	return (
		<a href="#">
			asd
		</a>
	)
}

MenuItem.propTypes = {
	label: (props, propName, componentName) => {
		if (props[propName] === false && props['icon'] === false)
			return new Error(
				'Failed prop type: One prop `icon` or `label` are required in `' + componentName + '`, but none is found.'
			)
	},
	icon: (props, propName, componentName) => {
		if (props[propName] === false && props['icon'] === false)
			return new Error(
				'Failed prop type: One prop `icon` or `label` are required in `' + componentName + '`, but none is found.'
			)
	}
}

MenuItem.defaultProps = {
	label: false,
	icon: false,
	link: false
}

const Navigation = () => {
	return (
		<ul>
			<li><a>Home</a></li>
			<li><a>Blog</a></li>
			<li><a>Portfolio</a></li>
			<li><a>Shop</a></li>
			<li><a>Variations</a></li>
			<li><a>Elements</a></li>
			<MenuItem label="home" link="#" icon="down-arrow"/>
			<MenuItem  link="#" />
			<MenuItem link="#" icon="down-arrow"/>
		</ul>
	)
}


const Header = () => {
	return (
		<div>
			<Logo/>
			<Navigation/>
{/*
			<LabelIcon name="down-arrow" text="Home" separation={8}/>
			<LabelIcon name="down-arrow" text="Blog" separation={8}/>
			<LabelIcon name="down-arrow" text="Portfolio" separation={8}/>
			<LabelIcon name="down-arrow" text="Shop" separation={8}/>
			<LabelIcon name="down-arrow" text="Variations" separation={8}/>
			<LabelIcon name="down-arrow" text="Elements" separation={8}/>*/}
		</div>
	)
}

const Page = () => {
	return (
		<div className="root">
			
			<Header/>
				
				$Navigation
					$menu-item #label #link #icon
						$Navigation

					$menu-item #label #link #icon
						$Navigation

					$menu-item #label #link #icon



		</div>
	)
}

export default Page