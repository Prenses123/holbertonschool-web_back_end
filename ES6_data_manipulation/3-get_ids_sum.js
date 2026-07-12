/**
 * Calculates the sum of all student ids.
 * @param {Array} students - The array of student objects.
 * @returns {number} The total sum of the ids.
 */
const getStudentIdsSum = (students) => {
    return students.reduce((accumulator, currentStudent) => accumulator + currentStudent.id, 0);
  };
  
  export default getStudentIdsSum;
