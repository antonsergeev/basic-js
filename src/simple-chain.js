const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {

  _links: [],
  
  getLength() {
    return this._links.length;
  },

  addLink(value) {
    const newLink = typeof value == 'undefined' ? '( )' : `( ${value} )`;
    this._links.push(newLink);
    return this;
  },

  removeLink(position) {
    if (typeof position != 'number' || position < 1 || position >= this.getLength()) {
      this._links = [];
      throw new Error('You can\'t remove incorrect link!');
    }
    this._links.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this._links.reverse();
    return this;
  },

  finishChain() {
    const resultString = this._links.join('~~');
    this._links = [];
    return resultString;
  }
};

module.exports = {
  chainMaker
};
