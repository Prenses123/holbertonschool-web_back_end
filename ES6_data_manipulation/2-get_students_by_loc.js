/**
 * Filters a list of students by a specific location.
 * @param {Array} students - The array of student objects.
 * @param {string} city - The city to filter by.
 * @returns {Array} A new array containing only the students in the specified city.
 */
const getStudentsByLocation = (students, city) => {
    return students.filter((student) => student.location === city);
  };
  
  export default getStudentsByLocation;
