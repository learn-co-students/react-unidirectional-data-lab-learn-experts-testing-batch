'use strict'

const React = require('react');
const classNames = require('classnames');

class SidebarItem extends React.Component {
  static getTitle (file) {
    // Find first non-empty line and use as title.
    return file.split('\n').find(line => line.length);
  }
  render() {
    return (
      <li className="sidebar__item" isSelected="sidebar__item--selected">
        <a className="sidebar__link" onClick={this.handleClick}>
          
        </a>
      </li>
    );
  }
}

module.exports = SidebarItem;
