'use strict'

const React = require('react');
const Toolbar = require('./Toolbar');

class FileView extends React.Component {
  debugger;
  render() {
    return (
      <div className="file-view">
        <Toolbar />
        <textarea className="file-view__text" value={this.props.file} />
      </div>
    );
  }
}

module.exports = FileView;
