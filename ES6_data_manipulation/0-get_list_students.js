/**
 * Generates a list of students with their ids, first names, and locations.
 * @returns {Array<{id: number, firstName: string, location: string}>} Array of student objects.
 */
const getListStudents = () => {
    return [
      { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
      { id: 2, firstName: 'James', location: 'Columbia' },
      { id: 5, firstName: 'Serena', location: 'San Francisco' }
    ];
  };
  
  export default getListStudents;
