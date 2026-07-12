/**
 * Creates and returns a Map containing a specific list of groceries.
 * @returns {Map<string, number>} A Map populated with grocery names and quantities.
 */
const groceriesList = () => {
    return new Map([
      ['Apples', 10],
      ['Tomatoes', 10],
      ['Pasta', 1],
      ['Rice', 1],
      ['Banana', 5]
    ]);
  };
  
  export default groceriesList;
