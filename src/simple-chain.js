const chainMaker = {
  chain : [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(String(value));
    return this;
  },
  removeLink(position) {
    if (typeof position == 'number' && position <= this.getLength() && position > 0){
      this.chain.splice(position - 1, 1);
      return this;
      }
    else {
      this.chain = [];
      throw new Error;
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let values = this.chain;
    this.chain = [];
    return `( ${values.join(' )~~( ')} )`;
  }
};

module.exports = chainMaker;
