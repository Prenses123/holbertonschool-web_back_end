import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    // Pass sqft to the parent class (Building) constructor
    super(sqft);
    this._floors = floors;
  }

  // Getter for floors
  get floors() {
    return this._floors;
  }

  // Override the evacuation warning method required by Building
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
