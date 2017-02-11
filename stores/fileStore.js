'use strict';

const Store = require('./Store');

class FileStore extends Store{
  constructor(initialState = ['']){
    super(initialState);
    this.state = initialState;
  }
  updateFile(index, value){
    const updatedFile = this.state.slice()
    updatedFile.splice(index, 1, value);
    this.setState(updatedFile);
  }
  addFile(){
    this.setState([...this.state,''])
  }

  removeFile(index){
    if(this.state.length ==1){
      this.setState([''])
    }else{
      const newState = this.state.slice()
      newState.splice(index, 1)
      this.setState(newState)
    }

  }
}

module.exports = new FileStore;
