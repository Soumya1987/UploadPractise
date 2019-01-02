import React, { Component } from 'react';
import BottomTab from '../BottomTab.js';
import SearchMenu from '../SearchMenu.js';

class UnFormattedView extends Component{

	constructor(props){
		super(props);
		this.setState({text:''});
	}

	componentWillMount(){
		this.setState({text:this.props.hl7Text});
	}

	render(){
		const hl7 = 'MSH|^~\&|EPIC|EPICADT|SMS|SMSADT|199912271408|CHARRIS|ADT^A04|1817457|D|2.5|\nPID||0493575^^^2^ID 1|454721||DOE^JOHN^^^^|DOE^JOHN^^^^|19480203|M||B|254 MYSTREET AVE^^MYTOWN^OH^44123^USA||(216)123-4567|||M|NON|400003403~1129086|\nNK1||ROE^MARIE^^^^|SPO||(216)123-4567||EC|||||||||||||||||||||||||||\nPV1||O|168 ~219~C~PMA^^^^^^^^^||||277^ALLEN MYLASTNAME^BONNIE^^^^|||||||||| ||2688684|||||||||||||||||||||||||199912271408||||||002376853';
		return(
			<section>

			<div className="content">
                <SearchMenu/>
            </div>

			<div className="textual-content"> 
				<textarea defaultValue={this.props.hl7Text} onChange={(event)=>{
					this.props.setHl7Value(event.target.value);
					this.setState({text:event.target.value});
				}} cols={183} rows={50}>
				</textarea>
			</div>

			<BottomTab/>
			</section>
			);
	}
}

export default UnFormattedView;