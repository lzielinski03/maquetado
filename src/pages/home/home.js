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

styled-components hover properties on parents
				  shared behaivor
				  custom props
				  		inline { funciona en diferentes nieles,
				  		block    elementos comunes tanto como flex }
				  		auto flex 	
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
							<Link href="#" padding="30px 0 30px 0">
								<Label font-size="13px" padding-right="8px" font-family="Montserrat" font-weight="700" color="white">Home</Label>
								<Icon name="down-arrow" color="white" size="13px"/>
							</Link>

							<List margin="30px 0 0 -30px" display="none" flex-direction="column" position="absolute" className="hover_workarround" background-color="#232323" padding="16px 0">
								<ItemList href="#">
									<Link href="#" font-family="Raleway" font-size="14px" color="rgb(170, 170, 170)" white-space="nowrap" padding="6px 30px" display="block">home 1</Link>
								</ItemList>

								<ItemList href="#">
									<Link href="#" font-family="Raleway" font-size="14px" color="rgb(170, 170, 170)" white-space="nowrap" padding="6px 30px" display="block">home 1</Link>
								</ItemList>
								
								<ItemList href="#">
									<Link href="#" font-family="Raleway" font-size="14px" color="rgb(170, 170, 170)" white-space="nowrap" padding="6px 30px" display="block">home 1</Link>
								</ItemList>
								
								
							</List>

						</ItemList>

						<ItemList padding="0 15px">
							<Link href="#" padding="30px 0 30px 0">
								<Label font-size="13px" padding-right="8px" font-family="Montserrat" font-weight="700" color="white">Blog</Label>
								<Icon name="down-arrow" color="white" size="13px"/>
							</Link>
						</ItemList>

						<ItemList padding="0 15px">
							<Link href="#" padding="30px 0 30px 0">
								<Label font-size="13px" padding-right="8px" font-family="Montserrat" font-weight="700" color="white">Porfolio</Label>
								<Icon name="down-arrow" color="white" size="13px"/>
							</Link>
						</ItemList>

						<ItemList padding="0 15px">
							<Link href="#" padding="30px 0 30px 0">
								<Label font-size="13px" padding-right="8px" font-family="Montserrat" font-weight="700" color="white">Shop</Label>
								<Icon name="down-arrow" color="white" size="13px"/>
							</Link>
						</ItemList>

						<ItemList padding="0 15px">
							<Link href="#" padding="30px 0 30px 0">
								<Label font-size="13px" padding-right="8px" font-family="Montserrat" font-weight="700" color="white">Variations</Label>
								<Icon name="down-arrow" color="white" size="13px"/>
							</Link>
						</ItemList>

						<ItemList padding="0 15px">
							<Link href="#" padding="30px 0 30px 0">
								<Label font-size="13px" padding-right="8px" font-family="Montserrat" font-weight="700" color="white">Elements</Label>
								<Icon name="down-arrow" color="white" size="13px"/>
							</Link>
						</ItemList>

						<ItemList padding="0 15px">
							<Link href="#">
								<Icon name="down-arrow" color="white" size="13px"/>
							</Link>
						</ItemList>

						<ItemList padding="0 15px">
							<Link href="#">
								<Icon name="down-arrow" color="white" size="13px"/>
							</Link>
						</ItemList>

						<ItemList padding="0 15px">
							<Link href="#">
								<Icon name="down-arrow" color="white" size="13px"/>
							</Link>
						</ItemList>

						<ItemList padding="0 15px">
							<Link href="#">
								<Icon name="down-arrow" color="white" size="13px"/>
							</Link>
						</ItemList>
						
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