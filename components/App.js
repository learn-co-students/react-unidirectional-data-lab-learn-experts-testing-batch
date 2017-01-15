'use strict'

const React = require('react');
const Sidebar = require('./Sidebar');
const FileView = require('./FileView');
const Toolbar = require('./Toolbar');

const fileStore = require('../stores/fileStore');
const actions = require('../actions');

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      files: fileStore.getState(),
      selectedFileIndex: 0
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
  }

  componentDidMount() {
    this.removeListener = fileStore.addListener((files) => {
      this.setState({files})
    })
  }
  componentWillUnmount() {
    this.removeListener()
  }
  handleChange(ev) {
    const { selectedFileIndex } = this.state;
    actions.updateFile(selectedFileIndex, ev.target.value)
  }
  handleSelect(selectedFileIndex) {
    this.setState({selectedFileIndex})
  }
  handleAdd(ev) {
    ev.preventDefault();
    actions.addFile(ev.target.value)
  }
  handleRemove(ev) {
    ev.preventDefault()
    actions.removeFile(ev.target.value)
  }
  render() {
    const { files, selectedFileIndex } = this.state;
    const file = files[selectedFileIndex];

    return (
      <div className="app">
        <Sidebar
          files={files}
          selectedFileIndex={selectedFileIndex}
          onSelect={this.handleSelect}
        />
        <FileView
          file={file}
          onChange={this.handleChange}
          onAdd={this.handleAdd}
          onRemove={this.handleRemove}
        />
      </div>
    );
  }
}

module.exports = App;
