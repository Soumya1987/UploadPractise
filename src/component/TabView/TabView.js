import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import  FormattedView from '../FormattedView/FormattedView';
import UnFormattedView from '../UnformattedView/UnFormattedView';
const hl7 = 'MSH|^~\&|EPIC|EPICADT|SMS|SMSADT|199912271408|CHARRIS|ADT^A04|1817457|D|2.5|\nPID||0493575^^^2^ID 1|454721||DOE^JOHN^^^^|DOE^JOHN^^^^|19480203|M||B|254 MYSTREET AVE^^MYTOWN^OH^44123^USA||(216)123-4567|||M|NON|400003403~1129086|\nNK1||ROE^MARIE^^^^|SPO||(216)123-4567||EC|||||||||||||||||||||||||||\nPV1||O|168 ~219~C~PMA^^^^^^^^^||||277^ALLEN MYLASTNAME^BONNIE^^^^|||||||||| ||2688684|||||||||||||||||||||||||199912271408||||||002376853';
class TabView extends Component{

    constructor(props){
		super(props);
		this.state = { tabIndex: 0 , hl7: ''};
	}

    setHl7Value = function(hl7Str){
        console.log(hl7Str);
        let index = this.state.tabIndex;
        let obj = Object.assign({},this.state,{hl7:hl7Str});
        this.setState(obj,()=>{
            console.log("updated state to ",hl7Str);
        });
    };
    
    componentWillMount() {
        let index = this.state.tabIndex;
        //******Important  */setState work asynchronously 
        let obj = Object.assign({},this.state,{hl7:hl7});
        this.setState(obj,()=>{
            console.log(this.state,'hl7 calback');
        });
        console.log(obj);
        // console.log('hl7 string');
        // console.log(this.state);
    }

    render(){
       
        return(
            <section>
        <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => {
            let obj = Object.assign({},this.state,{tabIndex:tabIndex});
                            this.setState(obj);
							//this.setState({ tabIndex }); console.log(tabIndex);
		}}>
	<TabList >
      	<Tab >HL7UnFormatted </Tab>
      	<Tab >HL7Formatted</Tab>
    </TabList>
    	<TabPanel className='unformatted-tab-panel'><UnFormattedView setHl7Value={this.setHl7Value} hl7Text={ this.state.hl7}/></TabPanel>
    	<TabPanel className='formatted-tab-panel'><FormattedView hl7Text={ this.state.hl7} /></TabPanel>
    </Tabs>
            </section>
        );
    }
};

export default TabView;