/**
 * Updates a grocery map, changing all items with a quantity of 1 to 100.
 * @param {Map} map - The map containing grocery items and quantities.
 * @returns {Map} The updated map.
 * @throws {Error} Throws "Cannot process" if the input argument is not a Map.
 */
const updateUniqueItems = (map) => {
    // Guard condition: ensure the argument is an instance of Map
    if (!(map instanceof Map)) {
      throw new Error('Cannot process');
    }
  
    // Iterate over the map entries and update the values in place
    map.forEach((value, key) => {
      if (value === 1) {
        map.set(key, 100);
      }
    });
  
    return map;
  };
  
  export default updateUniqueItems;
