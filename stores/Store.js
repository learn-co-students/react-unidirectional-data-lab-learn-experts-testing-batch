'use strict';

class Store {
  constructor(initialState) {
    this.state = initialState;
    this.listeners = [];
  }

  getState() {
    return this.state;
  }

  addListener(listener) {
    this.listeners.push(listener);
    const removeListener = () => {
      this.listeners = this.listeners.filter(l => listener !== l);
    };
    return removeListener;

  }

  setState(state) {
    this.state = state;
    this.state.files = [];
    for (const listener of this.listeners) {
      listener.call(this, state);
    }
  }
}

module.exports = Store;
