'use strict';

const Store = require('./Store');

class FileStore extends Store {
  constructor(props){
    super(props);
  }
  addFile(){
    const files = this.getState().concat('');
    this.setState(files);
  }

  removeFile(index){
    let files = this.getState();
    if (files.length == 1) {
      files = [''];
    } else {
      files.splice(index, 1);
    }
    this.setState(files);
  }

  updateFile(index, file){
    const files = this.getState().slice();
    files.splice(index, 1, file);
    this.setState(files);
  }
}

module.exports = new FileStore([""]);
