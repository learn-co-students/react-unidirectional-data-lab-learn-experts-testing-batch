'use strict'

const React = require('react');
const classNames = require('classnames');

class SidebarItem extends React.Component {
    constructor(){
      super();
      this.getTitle = this.getTitle.bind(this);
    }

    getTitle(file) {
      return file.split('\n').find(line => line.length);
    }
    // Find first non-empty line and use as title.
  render() {
    const {file, isSelected, onClick } = this.props;

    return (
      <li className={isSelected ? "sidebar__item--selected" : "sidebar__item"} isSelected="sidebar__item--selected">
        <a className="sidebar__link" onClick={this.props.onClick} >
          <em>{file ? this.getTitle(file) : 'Untitled'}</em>
        </a>
      </li>
    );
  }
}

module.exports = SidebarItem;
