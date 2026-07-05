export default class HolbertonClass {
    constructor(size, location) {
      this._size = size;
      this._location = location;
    }
  
    // Hook into JavaScript's type casting engine
    [Symbol.toPrimitive](hint) {
      if (hint === 'number') {
        return this._size;
      }
      if (hint === 'string') {
        return this._location;
      }
      return this._location; // Default fallback
    }
  }
