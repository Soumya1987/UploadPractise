import React, { Component } from 'react';
import {TiArrowLeft,TiAttachmentOutline,TiChevronLeft,TiChevronRight} from 'react-icons/ti';
import { FaBeer , FaSave , FaPen , FaPrint , FaClone } from 'react-icons/fa';
import {GoSearch} from 'react-icons/go';
// import '../css/container-style.css';
import Header from './Header.js';
import Menu from './Menu.js';
import SideMenu from './SideMenu.js';
import TabMenu from './TabMenu.js';
import SearchMenu from './SearchMenu.js';
import BottomTab from './BottomTab.js';
import UnFormattedView from './UnFormattedView/UnFormattedView.js';
import FormattedView from './FormattedView/FormattedView.js';
import TabView from './TabView/TabView';

// const CustomTab = ({ children }) => (
// 	<Tab>
// 	  <h4>{children}</h4>
// 	</Tab>
//   );

// 	CustomTab.tabsRole = 'Tab';

class Container extends Component{

	constructor(props){
		super(props);
	}



	render(){
		return(
				<div className='container'>
					<Menu/>
          <div class='relative-position'>
          <div id="main-containerId">
          <Header />
          <TabView/>
          </div>
          <div className="inline float-right">
          <SideMenu/>
          </div>
          </div>

					{/* <TabMenu/>


			<UnFormattedView/> */}

			</div>

			);
	}
}

export default Container;
