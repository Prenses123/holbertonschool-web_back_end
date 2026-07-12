/**
 * Filters set values starting with a specific string and joins the remainders.
 * @param {Set} set - The source Set containing string values.
 * @param {string} startString - The prefix string to look for.
 * @returns {string} A hyphen-separated string of the modified values.
 */
const cleanSet = (set, startString) => {
    // Edge case: if startString is empty or not a string, return an empty string
    if (!startString || typeof startString !== 'string') {
      return '';
    }
  
    const parts = [];
  
    for (const value of set) {
      // Only process values that are strings and start with the prefix
      if (typeof value === 'string' && value.startsWith(startString)) {
        // Append the substring starting immediately after the prefix
        parts.push(value.slice(startString.length));
      }
    }
  
    // Join all extracted pieces together with a hyphen separator
    return parts.join('-');
  };
  
  export default cleanSet;
