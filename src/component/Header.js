import React, { Component } from 'react';

var Header = (props) =>{
		return(

			<div className='header-content'>
						<div className='left'>
							<div className='label'>InterfaceName</div>
							<div className='value'>LAB_MIN</div>
						</div>
						
						<div className='right'>
							<div className='label'>Transaction Key</div>
							<div className='value'>2017111300000100000</div>
						</div>

						<div className='left'>
							<div className='label'>Connection IN </div>
							<div className='value'>LAB_MIN_IN</div>
						</div>
						<div className='right'>
							<div  className='label'>Posted Date</div>
							<div className='value'>1/15/2018&nbsp;00:00:00.047&nbsp;PM</div>
						</div>
					</div>
			);

};

export default Header;