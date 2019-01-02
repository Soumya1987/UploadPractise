import React from 'react';
import ReactDom from 'react-dom';
import SingleSelectTreeView from 'tree-view';
import Button from 'terra-button';
import Base from 'terra-base';
import '../css/style.css';
class HL7TreeView extends React.Component
{

constructor(props){
  super(props);
}

componentWillMount(){
  console.log('mounting treeView');
}

componentWillReceiveProps(props) {
  console.log("component will recive properties");
  console.log(this.props);
  console.log(props);
}

render(){
    let items = this.props.items;
   
     return ( <div>
   <Base locale="en" className="opl-treeview">    
     <SingleSelectTreeView 
     onSelect={this.handleOnSelect} 
      singleRootFolderExpansion    
     >
    {this.props.items.map((rows,i) => {   
    let row = rows.map((cell,j) => {
    if(j !== 0){
       if (Array.isArray(rows[j]) && rows[j].filter(member => member!="").length >1)
       {
          let innerrow = rows[j].map((innercell,k) => {
          return <SingleSelectTreeView.Item key={"f"+i+"_i"+j+"_"+k} id={"f"+i+"_i"+j+"_"+k} 
                                        text={rows[j][k]}>
            </SingleSelectTreeView.Item>
    });
  
  if(this.props.selectedIndex != -1){
    return <SingleSelectTreeView.Folder isInitiallySelected key={"f"+i+"_"+j} id={"f"+i+"_"+j} text={rows[0]+" "+(j+1)+":"} >{innerrow}</SingleSelectTreeView.Folder>; 
  } else {
    return <SingleSelectTreeView.Folder  key={"f"+i+"_"+j} id={"f"+i+"_"+j} text={rows[0]+" "+(j+1)+":"} >{innerrow}</SingleSelectTreeView.Folder>; 
  }

  // return <SingleSelectTreeView.Folder isInitiallySelected row={"row_"+i} id={"f"+i+"_"+j} text={rows[0]+" "+(j+1)+":"} >{innerrow}</SingleSelectTreeView.Folder>; 
}
else
{
  return <SingleSelectTreeView.Item id={"f"+i+"_i"+j}  key={"f"+i+"_i"+j}
                                text={rows[0]+" "+(j+1)+":"+rows[j]}>
    </SingleSelectTreeView.Item>
}
      }
    }); 
    return <SingleSelectTreeView.Folder id={"f"+i}  text={rows[0]} >{row}</SingleSelectTreeView.Folder>; 
    })}
     </SingleSelectTreeView>
</Base>
   </div>
);

}
}

export default HL7TreeView;
