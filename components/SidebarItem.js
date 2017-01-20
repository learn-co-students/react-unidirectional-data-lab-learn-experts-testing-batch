'use strict'

const React = require('react');
const classNames = require('classnames');

class SidebarItem extends React.Component {
  static getTitle (file) {
    return file.split('\n').find(line => line.length > 0);
  }
  render() {
    const { file, isSelected, onClick } = this.props;
    const selected = isSelected ? "sidebar__item--selected" : "sidebar__item"
    return (
      <li className={selected}>
        <a className="sidebar__link" onClick={onClick}>
          <em>{file && file !== "" ? file.split('\n').shift() : "Untitled"}</em>
        </a>
      </li>
    );
  }
}

module.exports = SidebarItem;
