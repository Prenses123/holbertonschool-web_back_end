export default class Airport {
    constructor(name, code) {
      this._name = name;
      this._code = code;
    }
  
    // Getter for name
    get name() {
      return this._name;
    }
  
    // Getter for code
    get code() {
      return this._code;
    }
  
    // Customizes the behavior of Object.prototype.toString.call()
    get [Symbol.toStringTag]() {
      return this._code;
    }
  
    // Customizes the explicit .toString() output
    toString() {
      return `[object ${this._code}]`;
    }
  }
