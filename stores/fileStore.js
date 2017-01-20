'use strict';

const Store = require('./Store');

class FileStore extends Store {
  addFile(){
    this.setState([...this.state, ""])
  }

  removeFile(index){
    const updatedState = [...this.state]
    updatedState.length > 1 ?  updatedState.splice(index, index + 1) : updatedState[0] = ""
    this.setState(updatedState)
  }

  updateFile(index,file){
    const updatedState = [...this.state];
    updatedState[index] = file
    this.setState(updatedState)
  }
}

module.exports = new FileStore([""]);
