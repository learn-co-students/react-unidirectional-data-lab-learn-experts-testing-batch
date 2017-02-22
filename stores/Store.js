'use strict';

class Store {
  constructor (initialState) {
    this.state = initialState;
    this.listeners = [];
  }

  setState(state) {
    this.state = state;
    this.listeners.forEach(listener => listener(state));
  }

  getState() {
    return this.state;
  }

  addListener(listener) {
    this.listeners.push(listener);
    const removeListener = () => {
      this.listeners = this.listeners.filter((l) => listener !== l);
    }

    return removeListener;
  }
}

module.exports = Store;
