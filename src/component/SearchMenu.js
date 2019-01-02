import React, {Component} from 'react';
import { FaBeer , FaSave , FaPen , FaPrint , FaClone } from 'react-icons/fa';
import SearchBar from './SearchBar.js';
import Toolbar from './Toolbar';

class SearchMenu extends Component{
	
	constructor(props){
		super(props);
	}

	setCssProperties = () => {
		this.tab = this.props.tab || "head";
		this.showPrinter = (this.tab!='head')?'none':'normal';
		this.showSave = this.props.showSave || 'normal';
		this.showPrint = this.props.showPrint || 'normal';
		this.showPen = this.props.showPen || 'normal';
	};

	componentWillMount(){
		this.setCssProperties();
	}
	render(){

		return(
			 <div className={this.tab}>
			 <Toolbar
			  showPrint={this.showPrint} 
			  showPrinter={this.showPrinter}
			  showSave={this.showSave}
			  showPen={this.showPen} />
			<SearchBar/>

             </div> /*head*/
		);
	}
}

export default SearchMenu;