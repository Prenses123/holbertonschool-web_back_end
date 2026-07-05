export default class Car {
    constructor(brand, motor, color) {
      this._brand = brand;
      this._motor = motor;
      this._color = color;
    }
  
    // Define the default constructor behavior for species
    static get [Symbol.species]() {
      return this;
    }
  
    // Clone method returning a new instance of the current species
    cloneCar() {
      const Species = this.constructor[Symbol.species] || this.constructor;
      return new Species();
    }
  }
