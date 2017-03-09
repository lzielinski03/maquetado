import 'babel-polyfill'
import React from 'react'
import { bindActionCreators } from 'redux' // shoud not be here
import { connect } from 'react-redux' // shoud not be here
import styled from 'styled-components';

import Logo from './../../components/custom/logo'
import Navigation from './../../components/custom/navigation'
import NavigationItem from './../../components/custom/navigation-item'

import Icon from './../../components/basic/icon'
import NavigationMenu from './../../components/navigation-menu'
import List from './../../components/basic/list'
import MenuItem from './../../components/menu-item'
import ItemList from './../../components/basic/item-list'
import Box from './../../components/box/box'
import Label from './../../components/basic/label'
import Link from './../../components/basic/link'

/*
import Title from './../components/title'
import Subtitle from './../components/subtitle'
import Button from './../components/button'
*/



const Header = () => {
	return (
		<Box 
			background="url(/src/assets/images/Showcase_color.jpg) no-repeat"
			background-size="contain"
			background-position="center"
			width="100%" height="0" padding-bottom="27%">

			<Logo link="/#" image="/src/assets/images/Logo_dark_2.png"/>

			<Navigation separation={8}>

				<NavigationItem href="#">
					<Label>Home</Label>
					<Icon name="down-arrow" />
				</NavigationItem>

				<NavigationItem href="#">
					<Label>Blog</Label>
					<Icon name="down-arrow" />
				</NavigationItem>

				<NavigationItem href="#">
					<Label>Shop</Label>
					<Icon name="down-arrow" />
				</NavigationItem>

			</Navigation>
{/*
			<List direction="row">
				<ItemList>
					<Link href="#">
						<Icon name="down-arrow" />
					</Link>
				</ItemList>

				<ItemList>
					<Link href="#">
						<Label>Home</Label>
					</Link>
				</ItemList>

				<ItemList>
					<Link href="#">
						<Icon name="down-arrow" />
						<Label>Blog</Label>
					</Link>
				</ItemList>

				<ItemList>
					<Link href="#">
						<Label>Shop</Label>
						<Icon name="down-arrow" />
					</Link>
				</ItemList>
			</List>*/}
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