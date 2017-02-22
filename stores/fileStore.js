'use strict';

const Store = require('./Store');

class FileStore extends Store {

  updateFile(index, newFile) {
    const files = [...this.getState()];
    files.splice(index, 1, newFile);

    this.setState(files);
  }

  addFile() {
    const files = this.getState().concat('');
    this.setState(files);
  }

  removeFile(index) {
    let files = this.getState();
    files.length === 1 ? files = [''] : files.splice(index,1);

    this.setState(files);
  }
}

module.exports = new FileStore(['']);
