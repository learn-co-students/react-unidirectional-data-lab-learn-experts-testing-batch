'use strict';

const Store = require('./Store');

class FileStore extends Store{
  constructor(initialState){
    super();
    this.state = initialState;
  }

  updateFile(index, file){
    const newState = [...this.state];
    newState[index] = file
    this.setState(newState);
  }

  addFile(){
    const newState = [...this.state];
    newState.push('');
    this.setState(newState);
  }

  removeFile(i){
    const newState = [...this.state];
    newState.length > 1 ? newState.splice(i, i+1) : newState[0] = '';
    this.setState(newState);
  }
}

module.exports = new FileStore(['']);
