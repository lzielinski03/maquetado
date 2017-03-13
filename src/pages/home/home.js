import 'babel-polyfill'
import React from 'react'
import { bindActionCreators } from 'redux' // shoud not be here
import { connect } from 'react-redux' // shoud not be here
import styled from 'styled-components';

import Logo from './../../components/custom/logo'
import NavigationBar from './../../components/custom/navigation-bar'
import NavigationItem from './../../components/custom/navigation-item'
import SubMenu from './../../components/custom/submenu'

import Icon from './../../components/basic/icon'
import List from './../../components/basic/list'
import ItemList from './../../components/basic/item-list'
import Navigation from './../../components/basic/navigation'
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
			background-size="cover"
			background-position="center"
			width="100%" height="0" padding-bottom="27%">

			<Box display="flex" align-items="center" height="100px" padding="0 5%">
				<Logo link="/#" image="/src/assets/images/Jevelin-logov1.png"/>

				<Navigation text-align="right" flex-grow="1">
					<List>
						
						<ItemList padding="0 15px" position="relative">
							<Link href="#">
								<Label padding-right="8px" font-size="13px" font-family="Montserrat" font-weight="700" color="white">Home</Label>
								<Icon name="down-arrow" color="white" size="13px"/>
							</Link>

							<List direction="column">
								<ItemList href="#">
									<Label>home 1</Label>
								</ItemList>

								<ItemList href="#">
									<Label>home 1</Label>
								</ItemList>

								<ItemList href="#">
									<Label>home 1</Label>
								</ItemList>
							</List>

						</ItemList>

						<NavigationItem href="#" padding="0 15px">
							<Label padding-right="8px" font-size="13px" font-family="Montserrat" font-weight="700" color="white">Blog</Label>
							<Icon name="down-arrow" color="white" size="13px"/>
						</NavigationItem>

						<NavigationItem href="#" padding="0 15px">
							<Label padding-right="8px" font-size="13px" font-family="Montserrat" font-weight="700" color="white">Porfolio</Label>
							<Icon name="down-arrow" color="white" size="13px"/>
						</NavigationItem>

						<NavigationItem href="#" padding="0 15px">
							<Label padding-right="8px" font-size="13px" font-family="Montserrat" font-weight="700" color="white">Shop</Label>
							<Icon name="down-arrow" color="white" size="13px"/>
						</NavigationItem>

						<NavigationItem href="#" padding="0 15px">
							<Label padding-right="8px" font-size="13px" font-family="Montserrat" font-weight="700" color="white">Variations</Label>
							<Icon name="down-arrow" color="white" size="13px"/>
						</NavigationItem>

						<NavigationItem href="#" padding="0 15px">
							<Label padding-right="8px" font-size="13px" font-family="Montserrat" font-weight="700" color="white">Elements</Label>
							<Icon name="down-arrow" color="white" size="13px"/>
						</NavigationItem>

						<NavigationItem href="#" padding="0 8px" display="inline-flex" align-items="center">
							<Icon name="down-arrow" color="white" size="13px"/>
						</NavigationItem>

						<NavigationItem href="#" padding="0 8px" display="inline-flex" align-items="center">
							<Icon name="down-arrow" color="white" size="13px"/>
						</NavigationItem>

						<NavigationItem href="#" padding="0 8px" display="inline-flex" align-items="center">
							<Icon name="down-arrow" color="white" size="13px"/>
						</NavigationItem>

						<NavigationItem href="#" padding="0 8px" display="inline-flex" align-items="center">
							<Icon name="down-arrow" color="white" size="13px"/>
						</NavigationItem>
					</List>
				</Navigation>
			</Box>
			{/*
			<List dircetion="row">
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