export default class Building {
    constructor(sqft) {
      this._sqft = sqft;
  
      // Check if the instantiated class is a subclass and hasn't implemented the method
      if (this.constructor !== Building && typeof this.evacuationWarningMessage !== 'function') {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
  
    // Getter for sqft
    get sqft() {
      return this._sqft;
    }
  }
