/**
 * Determines if all elements from an array exist within a given set.
 * @param {Set} set - The Set to search within.
 * @param {Array} array - The array of elements to check.
 * @returns {boolean} True if every element in the array is in the set, false otherwise.
 */
const hasValuesFromArray = (set, array) => {
    return array.every((element) => set.has(element));
  };
  
  export default hasValuesFromArray;
