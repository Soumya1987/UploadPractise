import React, { Component } from 'react';
import {TiAttachmentOutline} from 'react-icons/ti';

class SideMenu extends Component{

	render(){
		return(

			<div id="mySidenav" className="sidenav">
  						<a href="#" className='side-item'><TiAttachmentOutline/></a>
  						<a href="#" className='side-item'>12</a>
			</div>
			);
	}
}

export default SideMenu;