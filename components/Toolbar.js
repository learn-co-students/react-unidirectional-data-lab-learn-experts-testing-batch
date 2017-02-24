'use strict'

const React = require('react');

const Toolbar = ({handleAdd, handleRemove}) => (
  <nav>
    <button onClick={handleAdd}>+ Add note</button>
    <button onClick={handleRemove}>Delete note</button>
  </nav>
);

module.exports = Toolbar;
