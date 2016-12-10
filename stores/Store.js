'use strict';

class Store {
  constructor(initialState){
    this.state = initialState;

    this.listeners = [];
  }

  setState(state){
    this.listeners.forEach(listener => listener(state));
    return this.state = state;
  }

  getState(){
    return this.state;
  }

  addListener(listener){
    this.listeners.push(listener);
    const removeListener = () => {
      this.listeners = this.listeners.filter(l => listener !== l);
    }
    return removeListener;
  }
}

module.exports = Store;
