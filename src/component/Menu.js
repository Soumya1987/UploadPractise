import React, { Component } from 'react';
import {TiArrowLeft} from 'react-icons/ti';
class Menu extends Component{
	
	render(){
		return(
				<div className='header'> <TiArrowLeft/> <a href='.' className='back-btn'>Back</a></div>
			);
	}
}

export default Menu;