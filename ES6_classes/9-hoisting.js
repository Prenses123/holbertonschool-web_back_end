export class HolbertonClass {
    constructor(year, location) {
      this._year = year;
      this._location = location;
    }
  
    get year() {
      return this._year;
    }
  
    get location() {
      return this._location;
    }
  }
  
  export class StudentHolberton {
    // Fixed: Added holbertonClass parameter
    constructor(firstName, lastName, holbertonClass) {
      this._firstName = firstName;
      this._lastName = lastName;
      this._holbertonClass = holbertonClass;
    }
  
    get fullName() {
      return `${this._firstName} ${this._lastName}`;
    }
  
    // Fixed: Returns the underscore version to prevent infinite loop
    get holbertonClass() {
      return this._shadowCopy || this._holbertonClass;
    }
  
    // Fixed: Swapped out 'self' for 'this'
    get fullStudentDescription() {
      return `${this._firstName} ${this._lastName} - ${this._holbertonClass.year} - ${this._holbertonClass.location}`;
    }
  }
  
  // Instantiate classes AFTER they have been defined
  const class2019 = new HolbertonClass(2019, 'San Francisco');
  const class2020 = new HolbertonClass(2020, 'San Francisco');
  
  const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
  const student2 = new StudentHolberton('John', 'Doe', class2020);
  const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
  const student4 = new StudentHolberton('Donald', 'Bush', class2019);
  const student5 = new StudentHolberton('Jason', 'Sandler', class2019);
  
  const listOfStudents = [student1, student2, student3, student4, student5];
  
  // Fixed: Default export to match what 9-main.js expects
  export default listOfStudents;
