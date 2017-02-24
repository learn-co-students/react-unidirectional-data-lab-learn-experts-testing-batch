'use strict'

const React = require('react');
const SidebarItem = require('./SidebarItem');

class Sidebar extends React.Component {
  handleClick(index, ev) {
    ev.preventDefault();
    const file = files.find(file => file.id === index);
    file.setState({
      isSelected: false
    })
  }
  render() {
    const { files, selectedFileIndex, onAdd } = this.props;
    return (
      <ul className="sidebar">
        {
          files.map(({file, id}) =>(
          <SidebarItem
            key={id}
            onClick={this.handleClick.bind(null, id)}
            file={files.map(({file, id}) =>({file})}
            isSelected={selectedFileIndex === id}
            />
        ))
      }
      </ul>
    );
  }
}

module.exports = Sidebar;
