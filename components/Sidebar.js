'use strict'

const React = require('react');
const SidebarItem = require('./SidebarItem');

class Sidebar extends React.Component {
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {

    }
  }
  handleClick(index, ev) {
    ev.preventDefault();
    this.props.onSelect(index)
  }
  render() {
    const { files, selectedFileIndex, onSelect } = this.props;
    const sidebars = files.map((file, index) => {
      return (
        <SidebarItem file={file} key={index}
          onClick={this.handleClick.bind(this,index)}
          isSelected={selectedFileIndex === index ? true : false}/>
      )
    })
    return (
      <ul className="sidebar">
        {sidebars}
      </ul>
    );
  }
}

module.exports = Sidebar;
