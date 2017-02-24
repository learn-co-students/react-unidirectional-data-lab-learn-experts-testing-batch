'use strict'

const React = require('react');
const SidebarItem = require('./SidebarItem');

class Sidebar extends React.Component {
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(index, ev) {
    ev.preventDefault();
    this.props.onSelect(index);

  }
  render() {
    const { files, selectedFileIndex, onSelect } = this.props;
    return (
      <ul className="sidebar">
        {
          files.map((file, id) =>(
          <SidebarItem
            key={id}
            onClick={this.handleClick.bind(this, id)}
            file={file}
            isSelected={selectedFileIndex === id ? true : false}
            />
        ))
      }
      </ul>
    );
  }
}

module.exports = Sidebar;
