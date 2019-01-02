import React, { Component } from 'react';
import BottomTab from '../BottomTab.js';
import SearchMenu from '../SearchMenu.js';
import { MdAdd, MdRemove } from "react-icons/md";
import TreeViewBase from 'tree-view';
import TreeView from 'tree-view';
import Button from 'terra-button';
import Base from 'terra-base'; 
import HL7TreeView from '../HL7TreeView';
let _ = require('lodash');

const hl7 = 'MSH|^~\&|EPIC|EPICADT|SMS|SMSADT|199912271408|CHARRIS|ADT^A04|1817457|D|2.5|\nPID||0493575^^^2^ID 1|454721||DOE^JOHN^^^^|DOE^JOHN^^^^|19480203|M||B|254 MYSTREET AVE^^MYTOWN^OH^44123^USA||(216)123-4567|||M|NON|400003403~1129086|\nNK1||ROE^MARIE^^^^|SPO||(216)123-4567||EC|||||||||||||||||||||||||||\nPV1||O|168 ~219~C~PMA^^^^^^^^^||||277^ALLEN MYLASTNAME^BONNIE^^^^|||||||||| ||2688684|||||||||||||||||||||||||199912271408||||||002376853';
var menuArray = [];
var parse = function (str) {
    var segments = str.split('\n');
    return _.map(segments, function (segment) {
		var fields = segment.split('|');
		menuArray.push(fields[0]);
        return _.map(fields, function (field) {
            return _.includes(field,'^') ? field.split('^') : field;
        });
    });
};

const getJsonFormattedHl7String = function(hl7){
	return JSON.parse(JSON.stringify(parse(hl7), null, '  '));
}

const hl7string  = JSON.stringify(parse(hl7), null, '  ');


class FormattedView extends Component{
   state = {selectedIndex:-1};

	// componentWillMount(){
	// 	this.setState({selectedIndex:-1});
	// }

	render(){
		return(
			<section>
			
			<div className="formatted_content">
			

			<div className="left_part">
                  
        		<div className="vertical-menu">
				
  					<a href="#" className="on">All</a>
					  { 
						
						hl7.
						split('\n').
						map((menuName,index)=><a href="#" key={index} 
						onClick ={(event)=>{
							this.setState({selectedIndex:index});
							console.log("index value =>",index);
						}}
						className="menu">
						{menuName.split('|')[0]}
						</a>)
					 }
        		</div>
                  
            </div>

            <div className="right_part">
            <SearchMenu tab="formatted-head"/>
            	<div className="formatted-textual-content"> 
				{/* <div className='treeView' style={{height:"100%"}}> */}
			    <HL7TreeView selectedIndex={this.state.selectedIndex} items={getJsonFormattedHl7String(this.props.hl7Text)}/>
				{/* </div> */}
            	</div>
            </div>
			</div>
			<BottomTab/>
			</section>

			
			);
	}
}

export default FormattedView;

