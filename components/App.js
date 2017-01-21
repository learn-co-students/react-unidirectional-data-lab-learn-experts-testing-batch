'use strict'

const React = require('react');
const Sidebar = require('./Sidebar');
const FileView = require('./FileView');
const Toolbar = require('./Toolbar');

const fileStore = require('../stores/fileStore');
const actions = require('../actions');

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      files: fileStore.getState(),
      selectedFileIndex: 0
    }
    this.handleSelect = this.handleSelect.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
  }
  componentDidMount() {
    this.removeListener = fileStore.addListener((state) => {
      this.setState({
        files: state
      })
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
    this.setState({
      selectedFileIndex: selectedFileIndex
    })
  }
  handleAdd(ev) {
    ev.preventDefault();
    const { files } = this.state;
    actions.addFile()
    this.setState({
      selectedFileIndex: files.length
    })
  }
  handleRemove(ev) {
    const { selectedFileIndex } = this.state;
    ev.preventDefault()
    actions.removeFile(selectedFileIndex)
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
