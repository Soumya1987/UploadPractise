
import React, { Component } from 'react';
class TabMenu extends Component{
	render(){
		return(	
			<div className="tab-header">
                		<span className="inactive">HL7Unformatted</span>
                		<span className="active">HL7Formatted</span>
            </div>
              		);
	}
}

export default TabMenu;