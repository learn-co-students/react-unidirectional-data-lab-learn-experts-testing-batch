'use strict'

const React = require('react');

const Toolbar = (props) => (
  <nav>
    <button onClick={props.onAdd}>+ Add note</button>
    <button onClick={props.onRemove}>Delete note</button>
  </nav>
);

module.exports = Toolbar;
