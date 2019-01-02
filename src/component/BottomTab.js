import React, { Component } from 'react';
import {TiChevronLeft,TiChevronRight} from 'react-icons/ti';

const BottomTab = () =>{
	return(

				<div className="bottom">
                <span style={{float:'left'}}><span style={{fontWeight:"normal"}}>Row</span> #4 &nbsp; <span  style={{fontWeight:"normal"}}  style={{fontWeight:"normal"}}>Position</span>  72 &nbsp; <span  style={{fontWeight:"normal"}}>Total Size</span>  354 &nbsp;</span>
                <span className='bottom-right'>
                <span className='prev-nxt'> <TiChevronLeft/> </span>
                <span className='prev-nxt' style={{paddingRight:"8%"}}>Previous</span>
                <span className='prev-nxt'>Next</span>
                <span className='prev-nxt'><TiChevronRight/></span>
                </span>
                </div>


	);
}

export default BottomTab;
