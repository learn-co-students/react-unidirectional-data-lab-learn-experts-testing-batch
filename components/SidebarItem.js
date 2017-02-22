'use strict'

const React = require('react');
const classNames = require('classnames');

class SidebarItem extends React.Component {
  constructor(props) {
    super(props);

    this.getTitle = this.getTitle.bind(this);
  }

  getTitle (file) {
    return file ? file.split('\n').find(line => line.length) : <em>Untitled</em>;
  }

  render() {
    const { file, onClick, isSelected } = this.props;

    return (
      <li className={isSelected ? 'sidebar__item--selected' : 'sidebar__item'}>
        <a className='sidebar__link' onClick={onClick}>
          { this.getTitle(file)}
        </a>
      </li>
    );
  }
}

module.exports = SidebarItem;
