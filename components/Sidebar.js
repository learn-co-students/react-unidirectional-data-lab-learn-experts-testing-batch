'use strict'

const React = require('react');
const SidebarItem = require('./SidebarItem');

class Sidebar extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index, ev) {
    ev.preventDefault();
    this.props.onSelect(index);
  }

  render() {
    const { files, selectedFileIndex, onAdd } = this.props;
    const sidebarItems = files.map((file, index) => (
      <SidebarItem
          key={index}
          id={index}
          file={file}
          isSelected={index === selectedFileIndex}
          onClick={this.handleClick.bind(null, index)}
      />
    ));

    return (
      <ul className="sidebar">
        { sidebarItems }
      </ul>
    );
  }
}

module.exports = Sidebar;
