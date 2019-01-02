/* eslint no-console:0 */
import 'rc-tree/assets/index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Tree, { TreeNode } from 'rc-tree';
import Tooltip from 'rc-tooltip';
import './contextmenu.less';

function contains(root, n) {
  let node = n;
  while (node) {
    if (node === root) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
}

class TreeView extends React.Component {
  state = {
    selectedKeys: ['4-1-1'],
  };
  componentDidMount() {
    this.getContainer();
    // console.log(ReactDOM.findDOMNode(this), this.cmContainer);
    console.log(contains(ReactDOM.findDOMNode(this), this.cmContainer));
  }
  componentWillUnmount() {
    if (this.cmContainer) {
      ReactDOM.unmountComponentAtNode(this.cmContainer);
      document.body.removeChild(this.cmContainer);
      this.cmContainer = null;
    }
  }
  onSelect = (selectedKeys) => {
    this.setState({ selectedKeys });
  }
  onRightClick = (info) => {
    console.log('right click', info);
    this.setState({ selectedKeys: [info.node.props.eventKey] });
    this.renderCm(info);
  }
  onMouseEnter = (info) => {
    console.log('enter', info);
    this.renderCm(info);
  }
  onMouseLeave = (info) => {
    console.log('leave', info);
  }
  getContainer() {
    if (!this.cmContainer) {
      this.cmContainer = document.createElement('div');
      document.body.appendChild(this.cmContainer);
    }
    return this.cmContainer;
  }
  renderCm(info) {
    if (this.toolTip) {
      ReactDOM.unmountComponentAtNode(this.cmContainer);
      this.toolTip = null;
    }
    this.toolTip = (
      <Tooltip
        trigger="click" placement="bottomRight" prefixCls="rc-tree-contextmenu"
        defaultVisible overlay={<h4>{info.node.props.title}</h4>}
      >
        <span />
      </Tooltip>
    );

    const container = this.getContainer();
    Object.assign(this.cmContainer.style, {
      position: 'absolute',
      left: `${info.event.pageX}px`,
      top: `${info.event.pageY}px`,
    });

    ReactDOM.render(this.toolTip, container);
  }
  render() {
    return (
      <div>
       
        <Tree
          onRightClick={this.onRightClick}
          onSelect={this.onSelect}
          selectedKeys={this.state.selectedKeys}
          multiple
          // defaultExpandAll to expand all
          showLine
          showIcon={false}
        >
          <TreeNode title="MSH" key="0-1">
            <TreeNode   style={{fontWeight:'bold'}}  title="MSH2_ENCODING_CHAR:" className='xyz' key="2-1-1">
            </TreeNode>
             <TreeNode   style={{fontWeight:'bold'}}  title="MSH3_SENDING_APP:" className='msh3' key="3-1-1">
            </TreeNode>
            <TreeNode title="NTE" key="0-2">
              <TreeNode title="leaf" isLeaf />
            </TreeNode>
          </TreeNode>
           <TreeNode title="NTE" key="0-3">
           </TreeNode>

        </Tree>
       
      </div>
    );
  }
}

export default TreeView;